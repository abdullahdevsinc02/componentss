import React from 'react'
import { Story, Meta } from '@storybook/react'
import { DropDownComponent, CustomSelectProps } from '../components/dropDownComponent/dropDown'

// Import any other dependencies needed for the story
export default {
  title: 'Components/DropDown',
  component: DropDownComponent,
} as Meta

const Template: Story<CustomSelectProps> = (args: any) => {
  const [data, setData] = React.useState([])
  return <DropDownComponent {...args} selected={data} setSelected={setData} />
}

export const Normal = Template.bind({})
Normal.args = {
  options: [{ 'value': 'option1', 'label': 'abc' }, { 'value': 'option2', 'label': 'xyz' }],
  textLabel: 'Label',
}
