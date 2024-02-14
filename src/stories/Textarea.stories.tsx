import { Story, Meta } from '@storybook/react'
import { TextArea, TextAreaProps } from '../components/textAreaComponent/textArea'

// Import any other dependencies needed for the story
export default {
  title: 'Components/TextArea',
  component: TextArea,
} as Meta

const Template: Story<TextAreaProps> = (args: any) => <TextArea {...args} />

export const Normal = Template.bind({})
Normal.args = {
  textLabel: 'Text Filed Label',
  type: null
}
