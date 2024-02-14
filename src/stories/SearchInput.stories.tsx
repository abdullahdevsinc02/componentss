import { Story, Meta } from '@storybook/react'
import { SearchInput, SearchInputProps } from '../components/searchInputComponent/searchInput'

// Import any other dependencies needed for the story
export default {
  title: 'Components/SearchInput',
  component: SearchInput,
} as Meta

const Template: Story<SearchInputProps> = (args: any) => <SearchInput {...args} />

export const Normal = Template.bind({})
Normal.args = {
  placeholder: 'Search input'
}
