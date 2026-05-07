import Button from './Button'
import { leftIcon, rightIcon, iconOptions } from './icons'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: { control: { type: 'select' }, options: ['primary', 'secondary', 'text'] },
    size: { control: { type: 'select' }, options: ['large', 'medium', 'small'] },
    state: { control: { type: 'select' }, options: ['default', 'hover', 'onclick', 'focused', 'disabled'] },
    leftIcon: {
      control: { type: 'select' },
      options: Object.keys(iconOptions),
      mapping: iconOptions,
    },
    rightIcon: {
      control: { type: 'select' },
      options: Object.keys(iconOptions),
      mapping: iconOptions,
    },
    showLeftIcon: { control: { type: 'boolean' } },
    showRightIcon: { control: { type: 'boolean' } },
  },
}

const PageWrapper = ({ title, children }) => (
  <div
    style={{
      minHeight: '100vh',
      padding: '36px 24px',
      background: 'var(--color-background-page)',
      color: 'var(--color-text-primary)',
      fontFamily: 'Inter, system-ui, sans-serif',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
    }}
  >
    <div style={{ width: '100%', maxWidth: 540, display: 'grid', gap: 20 }}>
      <section style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
          <div>
            <p style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>{title}</p>
            <p style={{ margin: '6px 0 0', color: 'var(--color-text-secondary)', fontSize: 14 }}>
              Preview inside the current Storybook brand/theme page
            </p>
          </div>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px 12px',
              borderRadius: 999,
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'var(--color-text-primary)',
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            Page preview
          </span>
        </div>
      </section>
      <div
        style={{
          background: 'var(--color-background-surface)',
          borderRadius: 24,
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 40px 80px rgba(0,0,0,0.08)',
          padding: 32,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {children}
      </div>
    </div>
  </div>
)

const Template = (args) => (
  <PageWrapper title={`${args.variant?.charAt(0).toUpperCase()}${args.variant?.slice(1)} ${args.size?.charAt(0).toUpperCase()}${args.size?.slice(1)}`}>
    <Button {...args} />
  </PageWrapper>
)

// Primary Button Variants
export const PrimaryLarge = Template.bind({})
PrimaryLarge.args = { variant: 'primary', size: 'large', text: 'Primary Large' }

export const PrimaryMedium = Template.bind({})
PrimaryMedium.args = { variant: 'primary', size: 'medium', text: 'Primary Medium' }

export const PrimarySmall = Template.bind({})
PrimarySmall.args = { variant: 'primary', size: 'small', text: 'Primary Small' }

// Secondary Button Variants
export const SecondaryLarge = Template.bind({})
SecondaryLarge.args = { variant: 'secondary', size: 'large', text: 'Secondary Large' }

export const SecondaryMedium = Template.bind({})
SecondaryMedium.args = { variant: 'secondary', size: 'medium', text: 'Secondary Medium' }

export const SecondarySmall = Template.bind({})
SecondarySmall.args = { variant: 'secondary', size: 'small', text: 'Secondary Small' }

// Text Button Variants
export const TextLarge = Template.bind({})
TextLarge.args = { variant: 'text', size: 'large', text: 'Text Large' }

export const TextMedium = Template.bind({})
TextMedium.args = { variant: 'text', size: 'medium', text: 'Text Medium' }

export const TextSmall = Template.bind({})
TextSmall.args = { variant: 'text', size: 'small', text: 'Text Small' }

// State Examples
export const PrimaryHover = Template.bind({})
PrimaryHover.args = { variant: 'primary', size: 'large', state: 'hover', text: 'Primary Hover' }

export const PrimaryOnClick = Template.bind({})
PrimaryOnClick.args = { variant: 'primary', size: 'large', state: 'onclick', text: 'Primary Click' }

export const PrimaryFocused = Template.bind({})
PrimaryFocused.args = { variant: 'primary', size: 'large', state: 'focused', text: 'Primary Focused' }

export const PrimaryDisabled = Template.bind({})
PrimaryDisabled.args = { variant: 'primary', size: 'large', state: 'disabled', text: 'Primary Disabled' }

// With Icons
export const WithLeftIcon = Template.bind({})
WithLeftIcon.args = { leftIcon, text: 'Edit', showLeftIcon: true }

export const WithRightIcon = Template.bind({})
WithRightIcon.args = { rightIcon, text: 'Send', showRightIcon: true }

export const WithBothIcons = Template.bind({})
WithBothIcons.args = { leftIcon, rightIcon, text: 'Share', showLeftIcon: true, showRightIcon: true }

// Icon Control Demo - showcases replaceable icons
export const IconControlsDemo = (args) => (
  <PageWrapper title="Icon Controls">
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: '100%' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div>
          <p style={{ margin: '0 0 12px', fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)' }}>Left Icon Only</p>
          <Button {...args} leftIcon={args.leftIcon} showLeftIcon={true} showRightIcon={false} text="Edit" />
        </div>
        <div>
          <p style={{ margin: '0 0 12px', fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)' }}>Right Icon Only</p>
          <Button {...args} rightIcon={args.rightIcon} showLeftIcon={false} showRightIcon={true} text="Send" />
        </div>
      </div>
      <div>
        <p style={{ margin: '0 0 12px', fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)' }}>Both Icons</p>
        <Button {...args} leftIcon={args.leftIcon} rightIcon={args.rightIcon} showLeftIcon={true} showRightIcon={true} text="Share" />
      </div>
    </div>
  </PageWrapper>
)
IconControlsDemo.args = { leftIcon, rightIcon, variant: 'primary', size: 'large' }
