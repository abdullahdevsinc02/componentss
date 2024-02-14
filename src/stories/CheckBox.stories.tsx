import { Story, Meta } from '@storybook/react'
import { CheckBox, CheckBoxProps } from '../components/checkBox/checkBox'

// Import any other dependencies needed for the story
export default {
  title: 'Components/CheckBox',
  component: CheckBox,
} as Meta

const Template: Story<CheckBoxProps> = (args: any) => <CheckBox {...args} />

export const Normal = Template.bind({})
Normal.args = {
  textLabel: 'CheckBox',
}
