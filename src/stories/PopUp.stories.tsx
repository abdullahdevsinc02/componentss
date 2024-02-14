import { Story, Meta } from '@storybook/react'
import { PopUp, PopupProps } from '../components/popupComponent/popup'

// Import any other dependencies needed for the story
export default {
  title: 'Components/PopUp',
  component: PopUp,
} as Meta

const Template: Story<PopupProps> = (args: any) => <PopUp {...args} />

export const Normal = Template.bind({})
Normal.args = {
  title: 'PopUp Title',
  message: 'Message will be displayed here',
  
}
