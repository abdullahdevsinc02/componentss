import { Story, Meta } from '@storybook/react'
import { TextField, TextFieldProps } from '../components/textFieldComponent/textField'

// Import any other dependencies needed for the story
export default {
  title: 'Components/TextField',
  component: TextField,
} as Meta

const Template: Story<TextFieldProps> = (args: any) => <TextField {...args} />

export const Normal = Template.bind({})
Normal.args = {
  textLabel: 'Text Filed Label',
  type: null
}
