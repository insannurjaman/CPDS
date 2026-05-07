import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: 'tests',
  timeout: 60_000,
  expect: { toHaveScreenshot: { threshold: 0.02 } },
  use: {
    headless: true,
    viewport: { width: 800, height: 600 },
    actionTimeout: 10_000,
  },
  webServer: {
    command: 'npx storybook dev -p 6007 --host 0.0.0.0',
    port: 6007,
    reuseExistingServer: true,
    timeout: 120_000,
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
  ],
})
