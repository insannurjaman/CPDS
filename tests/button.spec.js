import { test, expect } from '@playwright/test'

const stories = [
  { id: 'components-button--primary', name: 'Primary' },
  { id: 'components-button--with-left-icon', name: 'With Left Icon' },
  { id: 'components-button--with-right-icon', name: 'With Right Icon' },
  { id: 'components-button--with-both-icons', name: 'With Both Icons' },
  { id: 'components-button--disabled', name: 'Disabled' },
  { id: 'components-button--hover', name: 'Hover' },
  { id: 'components-button--focused', name: 'Focused' },
]

for (const s of stories) {
  test.describe(s.name, () => {
    test(`${s.name} - accessibility`, async ({ page }) => {
      const url = `http://localhost:6007/iframe.html?id=${s.id}`
      await page.goto(url)
      await page.waitForLoadState('networkidle')
      await page.waitForSelector('button')

      // inject axe from CDN and run accessibility checks
      await page.addScriptTag({ url: 'https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.8.0/axe.min.js' })
      const result = await page.evaluate(async () => await axe.run())
      if (result.violations && result.violations.length > 0) {
        console.error('Axe violations:', JSON.stringify(result.violations, null, 2))
      }
      expect(result.violations.length).toBe(0)
    })

    test(`${s.name} - visual`, async ({ page }) => {
      const url = `http://localhost:6007/iframe.html?id=${s.id}`
      await page.goto(url)
      await page.waitForSelector('button')
      const button = await page.$('button')
      await expect(button).toHaveScreenshot(`button-${s.id}.png`)
    })
  })
}
