import React from 'react'
import Button from './Button'
import { leftIcon, rightIcon } from './icons'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: { control: { type: 'select' }, options: ['primary', 'secondary', 'text'] },
    size: { control: { type: 'select' }, options: ['large', 'medium', 'small'] },
    state: { control: { type: 'select' }, options: ['default', 'hover', 'focused', 'disabled'] },
  },
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = { variant: 'primary', text: 'Button' }

export const WithLeftIcon = Template.bind({})
WithLeftIcon.args = { leftIcon, text: 'Edit' }

export const WithRightIcon = Template.bind({})
WithRightIcon.args = { rightIcon, text: 'Send' }

export const WithBothIcons = Template.bind({})
WithBothIcons.args = { leftIcon, rightIcon, text: 'Share' }

export const Disabled = Template.bind({})
Disabled.args = { variant: 'primary', size: 'large', state: 'disabled', text: 'Disabled' }

export const Hover = Template.bind({})
Hover.args = { variant: 'primary', size: 'large', state: 'hover', text: 'Hover' }

export const Focused = Template.bind({})
Focused.args = { variant: 'primary', size: 'large', state: 'focused', text: 'Focused' }
