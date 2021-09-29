import { Meta, Story } from '@storybook/react'
import Card, { CardProps } from '.'
import { Web } from '@styled-icons/material-outlined/Web'

export default {
  title: 'Card',
  component: Card,
  args: {
    title: 'WordPress Site',
    subtitle:
      'Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut ',
    link: 'Read more',
    path: '/',
    icon: <Web />,
  },
  parameters: {
    backgrounds: {
      default: 'black',
    },
  },
} as Meta

export const Default: Story<CardProps> = (args) => (
  <div style={{ maxWidth: '90rem', margin: '0 auto' }}>
    <Card {...args} />
  </div>
)
