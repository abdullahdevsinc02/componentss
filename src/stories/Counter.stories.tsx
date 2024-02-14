import { Story, Meta } from '@storybook/react'
import { Counter, CounterProps } from '../components/counter/counter'

// Import any other dependencies needed for the story
export default {
  title: 'Components/Counter',
  component: Counter,
} as Meta

const Template: Story<CounterProps> = (args: any) => <Counter {...args} />

export const Normal = Template.bind({})
Normal.args = {
  textLabel: 'Counter',
  placeHolder: '5',
  onChange: ()=>{}
}
