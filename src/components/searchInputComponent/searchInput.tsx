import React, { ChangeEvent } from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import {SearchBar, InputSearch, SearchIcon} from './searchInputStyled'

interface SearchInputProps {
  name?: string
  id?: string
  placeholder?: string
  onChange: (value: string) => void
  minLength?: number
  maxLength?: number
  fieldStyle?: React.CSSProperties
  iconStyle?: React.CSSProperties
  fieldClassName?: string
  iconClassName?: string
  required?: boolean
  disabled?: boolean
  [propName: string]: any
}

const SearchInput: React.FC<SearchInputProps> = ({
  name,
  id,
  placeholder,
  onChange,
  minLength = 2,
  maxLength = 30,
  fieldStyle,
  iconStyle,
  fieldClassName,
  iconClassName,
  required = false,
  disabled = false,
  ...restProps
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    onChange && onChange(event.target.value)

  return (
    <div>
      <SearchBar>
        <SearchIcon
          className={
            iconClassName ? `searchIcon ${iconClassName}` : 'searchIcon'
          }
          icon={faSearch}
          style={iconStyle}
        />
        <InputSearch
          name={name}
          type='text'
          id={id}
          className={
            fieldClassName ? `inputSearch ${fieldClassName}` : 'inputSearch'
          }
          maxLength={maxLength}
          minLength={minLength}
          onChange={handleChange}
          placeholder={placeholder}
          style={fieldStyle}
          required={required}
          disabled={disabled}
          {...restProps}
        />
      </SearchBar>
    </div>
  )
}

export { SearchInput, SearchInputProps }
