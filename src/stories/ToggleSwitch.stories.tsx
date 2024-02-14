import { Story, Meta } from '@storybook/react'
import { ToggleSwitch, ToggleSwitchProps } from '../components/toggleSwitch/toggleSwitch'

// Import any other dependencies needed for the story
export default {
  title: 'Components/ToggleSwitch',
  component: ToggleSwitch,
} as Meta

const Template: Story<ToggleSwitchProps> = (args: any) => <ToggleSwitch {...args} />

export const Normal = Template.bind({})
Normal.args = {
  textLabel: 'Toggle Switch',
}
