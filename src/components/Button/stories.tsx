import { Meta, Story } from '@storybook/react'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Request a quote',
  },
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args}></Button>
