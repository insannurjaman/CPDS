# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: button.spec.js >> Primary Disabled >> Primary Disabled - accessibility
- Location: tests/button.spec.js:23:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 1
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - banner "Storybook" [ref=e6]:
      - heading "Storybook" [level=1] [ref=e7]
      - img
      - generic [ref=e10]:
        - generic [ref=e11]:
          - generic [ref=e12]:
            - generic [ref=e13]:
              - link "Skip to content" [ref=e14] [cursor=pointer]:
                - /url: "#storybook-preview-wrapper"
              - link "Storybook" [ref=e16] [cursor=pointer]:
                - /url: ./
                - img "Storybook" [ref=e17]
              - switch "Settings" [ref=e22] [cursor=pointer]:
                - img [ref=e23]
            - generic [ref=e28]:
              - generic [ref=e30] [cursor=pointer]:
                - button "Open onboarding guide" [ref=e34]:
                  - img [ref=e36]
                  - strong [ref=e38]: Get started
                - generic [ref=e39]:
                  - button "Collapse onboarding guide" [expanded] [ref=e40]:
                    - img [ref=e41]
                  - button "44% completed" [ref=e43]:
                    - generic [ref=e44]:
                      - img [ref=e45]
                      - img [ref=e47]
                    - generic [ref=e50]: 44%
              - list [ref=e52]:
                - listitem [ref=e53]:
                  - button "Open onboarding guide for See what's new" [ref=e54] [cursor=pointer]:
                    - img [ref=e56]
                    - generic [ref=e59]: See what's new
                  - button "Go"
                - listitem [ref=e60]:
                  - button "Open onboarding guide for Test your components" [ref=e61] [cursor=pointer]:
                    - img [ref=e63]
                    - generic [ref=e66]: Test your components
                  - button "Start"
                - listitem [ref=e67]:
                  - button "Open onboarding guide for Automatically document your components" [ref=e68] [cursor=pointer]:
                    - img [ref=e70]
                    - generic [ref=e73]: Automatically document your components
          - generic [ref=e74]: Search for components
          - search [ref=e75]:
            - combobox "Search for components" [ref=e76]:
              - generic:
                - img
              - searchbox "Search for components" [ref=e77]
              - code:
                - generic: ⌘
                - text: K
              - button "Tag filters" [ref=e79] [cursor=pointer]:
                - img [ref=e80]
            - button "Create a new story" [ref=e82] [cursor=pointer]:
              - img [ref=e83]
          - navigation "Stories" [ref=e86]:
            - heading "Stories" [level=2] [ref=e87]
            - generic [ref=e89]:
              - button "Design Tokens" [ref=e91] [cursor=pointer]:
                - generic [ref=e92]:
                  - img [ref=e94]
                  - img [ref=e96]
                - text: Design Tokens
              - generic [ref=e98]:
                - button "Collapse" [expanded] [ref=e99] [cursor=pointer]:
                  - img [ref=e101]
                  - text: Components
                - button "Expand all" [ref=e103] [cursor=pointer]:
                  - img [ref=e104]
              - button "Accordion" [ref=e107] [cursor=pointer]:
                - generic [ref=e108]:
                  - img [ref=e110]
                  - img [ref=e112]
                - text: Accordion
              - button "AreaChart" [ref=e115] [cursor=pointer]:
                - generic [ref=e116]:
                  - img [ref=e118]
                  - img [ref=e120]
                - text: AreaChart
              - button "Button" [expanded] [ref=e123] [cursor=pointer]:
                - generic [ref=e124]:
                  - img [ref=e126]
                  - img [ref=e128]
                - text: Button
              - link "Primary Large" [ref=e131] [cursor=pointer]:
                - /url: /?path=/story/components-button--primary-large
                - img [ref=e133]
                - text: Primary Large
              - link "Primary Medium" [ref=e136] [cursor=pointer]:
                - /url: /?path=/story/components-button--primary-medium
                - img [ref=e138]
                - text: Primary Medium
              - link "Primary Small" [ref=e141] [cursor=pointer]:
                - /url: /?path=/story/components-button--primary-small
                - img [ref=e143]
                - text: Primary Small
              - link "Secondary Large" [ref=e146] [cursor=pointer]:
                - /url: /?path=/story/components-button--secondary-large
                - img [ref=e148]
                - text: Secondary Large
              - link "Secondary Medium" [ref=e151] [cursor=pointer]:
                - /url: /?path=/story/components-button--secondary-medium
                - img [ref=e153]
                - text: Secondary Medium
              - link "Secondary Small" [ref=e156] [cursor=pointer]:
                - /url: /?path=/story/components-button--secondary-small
                - img [ref=e158]
                - text: Secondary Small
              - link "Text Large" [ref=e161] [cursor=pointer]:
                - /url: /?path=/story/components-button--text-large
                - img [ref=e163]
                - text: Text Large
              - link "Text Medium" [ref=e166] [cursor=pointer]:
                - /url: /?path=/story/components-button--text-medium
                - img [ref=e168]
                - text: Text Medium
              - link "Text Small" [ref=e171] [cursor=pointer]:
                - /url: /?path=/story/components-button--text-small
                - img [ref=e173]
                - text: Text Small
              - link "Primary Hover" [ref=e176] [cursor=pointer]:
                - /url: /?path=/story/components-button--primary-hover
                - img [ref=e178]
                - text: Primary Hover
              - link "Primary On Click" [ref=e181] [cursor=pointer]:
                - /url: /?path=/story/components-button--primary-on-click
                - img [ref=e183]
                - text: Primary On Click
              - link "Primary Focused" [ref=e186] [cursor=pointer]:
                - /url: /?path=/story/components-button--primary-focused
                - img [ref=e188]
                - text: Primary Focused
              - generic [ref=e190]:
                - link "Primary Disabled" [ref=e191] [cursor=pointer]:
                  - /url: /?path=/story/components-button--primary-disabled
                  - img [ref=e193]
                  - text: Primary Disabled
                - link "Skip to content" [ref=e195] [cursor=pointer]:
                  - /url: "#storybook-preview-wrapper"
              - link "With Left Icon" [ref=e197] [cursor=pointer]:
                - /url: /?path=/story/components-button--with-left-icon
                - img [ref=e199]
                - text: With Left Icon
              - link "With Right Icon" [ref=e202] [cursor=pointer]:
                - /url: /?path=/story/components-button--with-right-icon
                - img [ref=e204]
                - text: With Right Icon
              - link "With Both Icons" [ref=e207] [cursor=pointer]:
                - /url: /?path=/story/components-button--with-both-icons
                - img [ref=e209]
                - text: With Both Icons
              - link "Icon Controls Demo" [ref=e212] [cursor=pointer]:
                - /url: /?path=/story/components-button--icon-controls-demo
                - img [ref=e214]
                - text: Icon Controls Demo
              - button "HeatmapCell" [ref=e217] [cursor=pointer]:
                - generic [ref=e218]:
                  - img [ref=e220]
                  - img [ref=e222]
                - text: HeatmapCell
        - region "Component tests" [ref=e225]:
          - generic [ref=e226]:
            - heading "Component tests" [level=2] [ref=e227]
            - generic [ref=e228] [cursor=pointer]:
              - button "Run tests" [ref=e232]:
                - img [ref=e234]
                - text: Run tests
              - button "Expand testing module" [ref=e238]:
                - img [ref=e239]
            - generic [ref=e241]:
              - generic [ref=e244]:
                - generic [ref=e245]: Visual tests
                - button "Set up visual tests" [ref=e247]
              - generic [ref=e249]:
                - generic [ref=e250]:
                  - generic [ref=e251]:
                    - generic [ref=e252]: Run component tests
                    - generic [ref=e253]: Not run
                  - generic [ref=e254]:
                    - switch "Watch mode" [ref=e255] [cursor=pointer]:
                      - img [ref=e256]
                    - button "Start test run" [ref=e259] [cursor=pointer]:
                      - img [ref=e260]
                - list [ref=e262]:
                  - listitem [ref=e263]:
                    - generic [ref=e264]:
                      - checkbox "Interactions" [checked] [disabled] [ref=e266]
                      - generic [ref=e267]: Interactions
                    - button "Run tests to see results" [disabled] [ref=e268]
                  - listitem [ref=e270]:
                    - generic [ref=e271] [cursor=pointer]:
                      - checkbox "Coverage" [ref=e273]
                      - generic [ref=e274]: Coverage
                    - button "Coverage unavailable, run tests first" [disabled] [ref=e275]
                  - listitem [ref=e277]:
                    - generic [ref=e278] [cursor=pointer]:
                      - checkbox "Accessibility" [ref=e280]
                      - generic [ref=e281]: Accessibility
                    - button "Run tests to see accessibility results" [disabled] [ref=e282]
    - separator "Sidebar resize handle" [ref=e284]
  - generic [ref=e286]:
    - region "Toolbar" [ref=e287]:
      - heading "Toolbar" [level=2] [ref=e288]
      - toolbar [ref=e289]:
        - generic [ref=e290]:
          - button "Reload story" [ref=e291] [cursor=pointer]:
            - img [ref=e292]
          - switch "Grid visibility" [ref=e294] [cursor=pointer]:
            - img [ref=e295]
          - button "Preview background" [ref=e297] [cursor=pointer]:
            - img [ref=e298]
          - switch "Measure tool" [ref=e301] [cursor=pointer]:
            - img [ref=e302]
          - switch "Outline tool" [ref=e305] [cursor=pointer]:
            - img [ref=e306]
          - button "Viewport size" [ref=e308] [cursor=pointer]:
            - img [ref=e309]
          - button "Vision filter" [ref=e313] [cursor=pointer]:
            - img [ref=e314]
          - button "Design system brand VoltFunded" [ref=e319] [cursor=pointer]:
            - img [ref=e320]
            - text: VoltFunded
          - button "Light or dark theme Light" [ref=e322] [cursor=pointer]:
            - img [ref=e323]
            - text: Light
        - generic [ref=e325]:
          - switch "Change zoom level" [ref=e326] [cursor=pointer]: 100%
          - button "Enter full screen" [ref=e327] [cursor=pointer]:
            - img [ref=e328]
          - button "Share" [ref=e330] [cursor=pointer]:
            - img [ref=e331]
          - button "Open in editor" [ref=e334] [cursor=pointer]:
            - img [ref=e335]
    - main "Main preview area" [ref=e338]:
      - heading "Main preview area" [level=2] [ref=e339]
      - generic [ref=e341]:
        - link "Skip to sidebar" [ref=e342] [cursor=pointer]:
          - /url: "#components-button--primary-disabled"
        - iframe [ref=e346]:
          - generic [ref=f1e5]:
            - generic [ref=f1e7]:
              - generic [ref=f1e8]:
                - paragraph [ref=f1e9]: Primary Large
                - paragraph [ref=f1e10]: Preview inside the current Storybook brand/theme page
              - generic [ref=f1e11]: Page preview
            - button "Primary Disabled" [disabled] [ref=f1e13]:
              - generic [ref=f1e15]: Primary Disabled
  - generic [ref=e347]:
    - separator "Addon panel resize handle" [ref=e348]
    - region "Addon panel" [ref=e350]:
      - heading "Addon panel" [level=2] [ref=e351]
      - generic [ref=e352]:
        - generic [ref=e353]:
          - generic [ref=e354]:
            - button "Move addon panel to right" [ref=e355] [cursor=pointer]:
              - img [ref=e356]
            - button "Hide addon panel" [ref=e359] [cursor=pointer]:
              - img [ref=e360]
          - generic [ref=e363]:
            - button "Scroll backward" [disabled] [ref=e365]:
              - img [ref=e366]
            - tablist "Available addons" [ref=e369]:
              - tab "Controls 8" [selected] [ref=e370] [cursor=pointer]:
                - generic [ref=e371]:
                  - generic [ref=e372]: Controls
                  - generic [ref=e373]: "8"
              - tab "Actions" [ref=e374] [cursor=pointer]:
                - generic [ref=e376]: Actions
              - tab "Interactions" [ref=e377] [cursor=pointer]:
                - generic [ref=e379]: Interactions
              - tab "Visual tests" [ref=e380] [cursor=pointer]
              - tab "Accessibility 1" [ref=e381] [cursor=pointer]:
                - generic [ref=e382]:
                  - generic [ref=e383]: Accessibility
                  - generic [ref=e384]: "1"
            - button "Scroll forward" [ref=e386] [cursor=pointer]:
              - img [ref=e387]
        - tabpanel "Controls 8" [ref=e389]:
          - generic [ref=e396]:
            - button "Reset controls" [ref=e398] [cursor=pointer]:
              - img [ref=e399]
            - table [ref=e401]:
              - rowgroup [ref=e402]:
                - row "Name Control" [ref=e403]:
                  - columnheader "Name" [ref=e404]
                  - columnheader "Control" [ref=e405]
              - rowgroup [ref=e406]:
                - row "variant variant primary" [ref=e407]:
                  - cell "variant" [ref=e408]
                  - cell "variant primary" [ref=e409]:
                    - generic [ref=e410]:
                      - img
                      - generic [ref=e411]: variant
                      - combobox "variant" [ref=e412]:
                        - option "Choose option..."
                        - option "primary" [selected]
                        - option "secondary"
                        - option "text"
                - row "size size large" [ref=e413]:
                  - cell "size" [ref=e414]
                  - cell "size large" [ref=e415]:
                    - generic [ref=e416]:
                      - img
                      - generic [ref=e417]: size
                      - combobox "size" [ref=e418]:
                        - option "Choose option..."
                        - option "large" [selected]
                        - option "medium"
                        - option "small"
                - row "state state disabled" [ref=e419]:
                  - cell "state" [ref=e420]
                  - cell "state disabled" [ref=e421]:
                    - generic [ref=e422]:
                      - img
                      - generic [ref=e423]: state
                      - combobox "state" [ref=e424]:
                        - option "Choose option..."
                        - option "default"
                        - option "hover"
                        - option "onclick"
                        - option "focused"
                        - option "disabled" [selected]
                - row "text Primary Disabled" [ref=e425]:
                  - cell "text" [ref=e426]
                  - cell "Primary Disabled" [ref=e427]:
                    - textbox [ref=e429]:
                      - /placeholder: Edit string...
                      - text: Primary Disabled
                - row "leftIcon leftIcon Choose option..." [ref=e430]:
                  - cell "leftIcon" [ref=e431]
                  - cell "leftIcon Choose option..." [ref=e432]:
                    - generic [ref=e433]:
                      - img
                      - generic [ref=e434]: leftIcon
                      - combobox "leftIcon" [ref=e435]:
                        - option "Choose option..." [disabled] [selected]
                        - option "none"
                        - option "--- Default ---"
                        - option "Plus (Default)"
                        - option "Default Left"
                        - option "Default Right"
                        - option "--- Assets ---"
                        - option "Activity"
                        - option "Android"
                        - option "Android Logo"
                        - option "Apple Logo"
                        - option "Arrow Down"
                        - option "Arrow Insert"
                        - option "Arrow Left"
                        - option "Arrow Outward"
                        - option "Arrow Right"
                        - option "Arrow Up"
                        - option "Attachment"
                        - option "Bank"
                        - option "Bar Chart"
                        - option "Bitcoin"
                        - option "Book"
                        - option "Brain"
                        - option "Building"
                        - option "Calendar"
                        - option "Card"
                        - option "Chat"
                        - option "Check Circle"
                        - option "Check Line"
                        - option "Chevron Down"
                        - option "Chevron Left"
                        - option "Chevron Right"
                        - option "Chevron Up"
                        - option "Circles"
                        - option "City"
                        - option "Close"
                        - option "Close Circle"
                        - option "Configure"
                        - option "Copy"
                        - option "Cross Shield"
                        - option "Crown"
                        - option "Customize"
                        - option "Decrease"
                        - option "Desktop"
                        - option "Dollar"
                        - option "Dot"
                        - option "Down Line"
                        - option "Download"
                        - option "Email"
                        - option "External Link"
                        - option "Eye Closed"
                        - option "Eye Open"
                        - option "File"
                        - option "Fire"
                        - option "Group"
                        - option "Growth"
                        - option "Headphone"
                        - option "Home"
                        - option "Inbox"
                        - option "Info"
                        - option "IOS"
                        - option "IOS Logo"
                        - option "Laptop"
                        - option "Light Mode"
                        - option "Link"
                        - option "Lock"
                        - option "Loss"
                        - option "Magic"
                        - option "Mail"
                        - option "Map Point"
                        - option "More Horizontal"
                        - option "More Vertical"
                        - option "Night Mode"
                        - option "No Record"
                        - option "Notification"
                        - option "Pencil"
                        - option "People"
                        - option "Phone"
                        - option "Phone 1"
                        - option "Pie Chart"
                        - option "Product Icon"
                        - option "Profit"
                        - option "Prohibition"
                        - option "Question Mark"
                        - option "React"
                        - option "Refresh 1"
                        - option "Refresh 2"
                        - option "Repeat"
                        - option "Reward"
                        - option "Security"
                        - option "Send"
                        - option "Setting"
                        - option "Share"
                        - option "Shield"
                        - option "Shield Check"
                        - option "Sidebar Accounts"
                        - option "Sidebar Analysis Hub"
                        - option "Sidebar Certificates"
                        - option "Sidebar Challenges"
                        - option "Sidebar Collapse"
                        - option "Sidebar Dashboard"
                        - option "Sidebar Downloads"
                        - option "Sidebar Expand"
                        - option "Sidebar Kyc Verification"
                        - option "Sidebar My Profile"
                        - option "Sidebar Orders"
                        - option "Sidebar Payouts"
                        - option "Sidebar Points & Rewards"
                        - option "Sidebar Search"
                        - option "Sidebar Shortcut"
                        - option "Sidebar Supports"
                        - option "Sidebar Trading Tools"
                        - option "Stack"
                        - option "Star"
                        - option "Star Filled"
                        - option "Thunder"
                        - option "Time"
                        - option "Timer"
                        - option "Tools"
                        - option "Up Line"
                        - option "Vite"
                        - option "Wallet"
                        - option "Warning Circle"
                        - option "Warning Triangle"
                        - option "Web"
                        - option "Windows Logo"
                        - option "World"
                - row "rightIcon rightIcon Choose option..." [ref=e436]:
                  - cell "rightIcon" [ref=e437]
                  - cell "rightIcon Choose option..." [ref=e438]:
                    - generic [ref=e439]:
                      - img
                      - generic [ref=e440]: rightIcon
                      - combobox "rightIcon" [ref=e441]:
                        - option "Choose option..." [disabled] [selected]
                        - option "none"
                        - option "--- Default ---"
                        - option "Plus (Default)"
                        - option "Default Left"
                        - option "Default Right"
                        - option "--- Assets ---"
                        - option "Activity"
                        - option "Android"
                        - option "Android Logo"
                        - option "Apple Logo"
                        - option "Arrow Down"
                        - option "Arrow Insert"
                        - option "Arrow Left"
                        - option "Arrow Outward"
                        - option "Arrow Right"
                        - option "Arrow Up"
                        - option "Attachment"
                        - option "Bank"
                        - option "Bar Chart"
                        - option "Bitcoin"
                        - option "Book"
                        - option "Brain"
                        - option "Building"
                        - option "Calendar"
                        - option "Card"
                        - option "Chat"
                        - option "Check Circle"
                        - option "Check Line"
                        - option "Chevron Down"
                        - option "Chevron Left"
                        - option "Chevron Right"
                        - option "Chevron Up"
                        - option "Circles"
                        - option "City"
                        - option "Close"
                        - option "Close Circle"
                        - option "Configure"
                        - option "Copy"
                        - option "Cross Shield"
                        - option "Crown"
                        - option "Customize"
                        - option "Decrease"
                        - option "Desktop"
                        - option "Dollar"
                        - option "Dot"
                        - option "Down Line"
                        - option "Download"
                        - option "Email"
                        - option "External Link"
                        - option "Eye Closed"
                        - option "Eye Open"
                        - option "File"
                        - option "Fire"
                        - option "Group"
                        - option "Growth"
                        - option "Headphone"
                        - option "Home"
                        - option "Inbox"
                        - option "Info"
                        - option "IOS"
                        - option "IOS Logo"
                        - option "Laptop"
                        - option "Light Mode"
                        - option "Link"
                        - option "Lock"
                        - option "Loss"
                        - option "Magic"
                        - option "Mail"
                        - option "Map Point"
                        - option "More Horizontal"
                        - option "More Vertical"
                        - option "Night Mode"
                        - option "No Record"
                        - option "Notification"
                        - option "Pencil"
                        - option "People"
                        - option "Phone"
                        - option "Phone 1"
                        - option "Pie Chart"
                        - option "Product Icon"
                        - option "Profit"
                        - option "Prohibition"
                        - option "Question Mark"
                        - option "React"
                        - option "Refresh 1"
                        - option "Refresh 2"
                        - option "Repeat"
                        - option "Reward"
                        - option "Security"
                        - option "Send"
                        - option "Setting"
                        - option "Share"
                        - option "Shield"
                        - option "Shield Check"
                        - option "Sidebar Accounts"
                        - option "Sidebar Analysis Hub"
                        - option "Sidebar Certificates"
                        - option "Sidebar Challenges"
                        - option "Sidebar Collapse"
                        - option "Sidebar Dashboard"
                        - option "Sidebar Downloads"
                        - option "Sidebar Expand"
                        - option "Sidebar Kyc Verification"
                        - option "Sidebar My Profile"
                        - option "Sidebar Orders"
                        - option "Sidebar Payouts"
                        - option "Sidebar Points & Rewards"
                        - option "Sidebar Search"
                        - option "Sidebar Shortcut"
                        - option "Sidebar Supports"
                        - option "Sidebar Trading Tools"
                        - option "Stack"
                        - option "Star"
                        - option "Star Filled"
                        - option "Thunder"
                        - option "Time"
                        - option "Timer"
                        - option "Tools"
                        - option "Up Line"
                        - option "Vite"
                        - option "Wallet"
                        - option "Warning Circle"
                        - option "Warning Triangle"
                        - option "Web"
                        - option "Windows Logo"
                        - option "World"
                - row "showLeftIcon Set boolean" [ref=e442]:
                  - cell "showLeftIcon" [ref=e443]
                  - cell "Set boolean" [ref=e444]:
                    - button "Set boolean" [ref=e445] [cursor=pointer]
                - row "showRightIcon Set boolean" [ref=e446]:
                  - cell "showRightIcon" [ref=e447]
                  - cell "Set boolean" [ref=e448]:
                    - button "Set boolean" [ref=e449] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | 
  3  | const stories = [
  4  |   { id: 'components-button--primary-large', name: 'Primary Large' },
  5  |   { id: 'components-button--primary-medium', name: 'Primary Medium' },
  6  |   { id: 'components-button--primary-small', name: 'Primary Small' },
  7  |   { id: 'components-button--secondary-large', name: 'Secondary Large' },
  8  |   { id: 'components-button--secondary-medium', name: 'Secondary Medium' },
  9  |   { id: 'components-button--secondary-small', name: 'Secondary Small' },
  10 |   { id: 'components-button--text-large', name: 'Text Large' },
  11 |   { id: 'components-button--text-medium', name: 'Text Medium' },
  12 |   { id: 'components-button--text-small', name: 'Text Small' },
  13 |   { id: 'components-button--primary-hover', name: 'Primary Hover' },
  14 |   { id: 'components-button--primary-on-click', name: 'Primary On Click' },
  15 |   { id: 'components-button--primary-disabled', name: 'Primary Disabled' },
  16 |   { id: 'components-button--with-left-icon', name: 'With Left Icon' },
  17 |   { id: 'components-button--with-right-icon', name: 'With Right Icon' },
  18 |   { id: 'components-button--with-both-icons', name: 'With Both Icons' },
  19 | ]
  20 | 
  21 | for (const s of stories) {
  22 |   test.describe(s.name, () => {
  23 |     test(`${s.name} - accessibility`, async ({ page }) => {
  24 |       const url = `http://localhost:6007/?path=/story/${s.id}`
  25 |       await page.goto(url)
  26 | 
  27 |       // wait for preview iframe and the story to load
  28 |       const iframeHandle = await page.waitForSelector('iframe#storybook-preview-iframe', { timeout: 20000 })
  29 |       const frame = await iframeHandle.contentFrame()
  30 |       if (!frame) throw new Error('Preview frame not found')
  31 | 
  32 |       // For disabled buttons, we use div instead of button
  33 |       const elementSelector = s.name.includes('Disabled') ? '#storybook-root div' : '#storybook-root button'
  34 |       const btnLocator = frame.locator(elementSelector).first()
  35 |       await btnLocator.waitFor({ state: 'visible', timeout: 20000 })
  36 | 
  37 |       // inject axe into the preview frame and run accessibility checks against the story root only
  38 |       await frame.addScriptTag({ url: 'https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.8.0/axe.min.js' })
  39 |       const result = await frame.evaluate(async () => await window.axe.run(document.querySelector('#storybook-root')))
  40 |       if (result.violations && result.violations.length > 0) {
  41 |         console.error('Axe violations:', JSON.stringify(result.violations, null, 2))
  42 |       }
> 43 |       expect(result.violations.length).toBe(0)
     |                                        ^ Error: expect(received).toBe(expected) // Object.is equality
  44 |     })
  45 | 
  46 |     test(`${s.name} - visual`, async ({ page }) => {
  47 |       const url = `http://localhost:6007/?path=/story/${s.id}`
  48 |       await page.goto(url)
  49 |       await page.waitForSelector('iframe#storybook-preview-iframe', { timeout: 20000 })
  50 |       const frameLocator2 = page.frameLocator('iframe#storybook-preview-iframe')
  51 | 
  52 |       // For disabled buttons, we use div instead of button
  53 |       const elementSelector = s.name.includes('Disabled') ? '#storybook-root div' : '#storybook-root button'
  54 |       const btnLocator2 = frameLocator2.locator(elementSelector).first()
  55 |       await btnLocator2.waitFor({ state: 'visible', timeout: 20000 })
  56 |       await expect(btnLocator2).toHaveScreenshot(`button-${s.id}.png`)
  57 |     })
  58 |   })
  59 | }
  60 | 
```