import { test, expect } from '@playwright/test'

const stories = [
  { id: 'components-button--primary-large', name: 'Primary Large' },
  { id: 'components-button--primary-medium', name: 'Primary Medium' },
  { id: 'components-button--primary-small', name: 'Primary Small' },
  { id: 'components-button--secondary-large', name: 'Secondary Large' },
  { id: 'components-button--secondary-medium', name: 'Secondary Medium' },
  { id: 'components-button--secondary-small', name: 'Secondary Small' },
  { id: 'components-button--text-large', name: 'Text Large' },
  { id: 'components-button--text-medium', name: 'Text Medium' },
  { id: 'components-button--text-small', name: 'Text Small' },
  { id: 'components-button--primary-hover', name: 'Primary Hover' },
  { id: 'components-button--primary-on-click', name: 'Primary On Click' },
  { id: 'components-button--primary-disabled', name: 'Primary Disabled' },
  { id: 'components-button--with-left-icon', name: 'With Left Icon' },
  { id: 'components-button--with-right-icon', name: 'With Right Icon' },
  { id: 'components-button--with-both-icons', name: 'With Both Icons' },
]

for (const s of stories) {
  test.describe(s.name, () => {
    test(`${s.name} - accessibility`, async ({ page }) => {
      const url = `http://localhost:6007/?path=/story/${s.id}`
      await page.goto(url)

      // wait for preview iframe and the story to load
      const iframeHandle = await page.waitForSelector('iframe#storybook-preview-iframe', { timeout: 20000 })
      const frame = await iframeHandle.contentFrame()
      if (!frame) throw new Error('Preview frame not found')

      const elementSelector = '#storybook-root button'
      const btnLocator = frame.locator(elementSelector).first()
      await btnLocator.waitFor({ state: 'visible', timeout: 20000 })

      // inject axe into the preview frame and run accessibility checks against the story root only
      await frame.addScriptTag({ url: 'https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.8.0/axe.min.js' })
      await frame.waitForFunction(() => window.axe && typeof window.axe.run === 'function')
      const result = await frame.evaluate(async () => {
        const runAxe = async () => {
          try {
            return await window.axe.run(document.querySelector('#storybook-root'))
          } catch (error) {
            if (error?.message?.includes('Axe is already running')) {
              await new Promise((resolve) => setTimeout(resolve, 100))
              return runAxe()
            }
            throw error
          }
        }
        return await runAxe()
      })
      if (result.violations && result.violations.length > 0) {
        console.error('Axe violations:', JSON.stringify(result.violations, null, 2))
      }
      expect(result.violations.length).toBe(0)
    })

    test(`${s.name} - visual`, async ({ page }) => {
      const url = `http://localhost:6007/?path=/story/${s.id}`
      await page.goto(url)
      await page.waitForSelector('iframe#storybook-preview-iframe', { timeout: 20000 })
      const frameLocator2 = page.frameLocator('iframe#storybook-preview-iframe')

      const elementSelector = '#storybook-root button'
      const btnLocator2 = frameLocator2.locator(elementSelector).first()
      await btnLocator2.waitFor({ state: 'visible', timeout: 20000 })
      await expect(btnLocator2).toHaveScreenshot(`button-${s.id}.png`)
    })
  })
}
