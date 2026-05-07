import Accordion from './Accordion'

const sampleItems = [
  {
    title: 'How does the onboarding process work?',
    description: 'Learn how new users complete the onboarding flow.',
    content:
      'Onboarding is fast and secure. Users verify their identity, connect accounts, and receive guidance through inline help. The process is optimized for both light and dark themes, with consistent spacing and shadow treatment.',
  },
  {
    title: 'What is included in the pricing plan?',
    description: 'See a quick overview of plan perks and billing.',
    content:
      'Our pricing plan includes unlimited access to the dashboard, real-time analytics, priority support, and customizable notifications. Brand colors and component surfaces adapt automatically for VoltFunded and InstantFunding.',
  },
  {
    title: 'Can I enable multiple panels at once?',
    description: 'Toggle panels independently with the multi-open option.',
    content:
      'Yes. When allowMultiple is enabled, users can expand multiple sections at once. This pattern is ideal for reference content and FAQ pages where users want to compare answers quickly.',
  },
]

export default {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {
    allowMultiple: { control: 'boolean' },
    defaultOpenIndex: { control: 'number' },
  },
}

const Template = (args) => <Accordion {...args} />

export const Default = Template.bind({})
Default.args = {
  items: sampleItems,
  allowMultiple: false,
  defaultOpenIndex: 0,
}

export const MultipleOpen = Template.bind({})
MultipleOpen.args = {
  items: sampleItems,
  allowMultiple: true,
  defaultOpenIndex: [0, 1],
}

export const AllClosed = Template.bind({})
AllClosed.args = {
  items: sampleItems,
  allowMultiple: true,
  defaultOpenIndex: [],
}
