import { Story, Meta } from '@storybook/react'
import { Typography, TypographyProps } from '../components/typography/typography'

// Import any other dependencies needed for the story
export default {
  title: 'Components/Typography',
  component: Typography,
} as Meta

const Template: Story<TypographyProps> = (args: any) => <Typography {...args} />

export const Normal = Template.bind({})
Normal.args = {
  children: 'Hello Peter'
}

