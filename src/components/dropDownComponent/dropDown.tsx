import React from 'react'

import {
  TextFieldLabel,
  SelectedOption,
  OptionWrapper,
  OptionInput,
  OptionLabel,
  CustomSelect
} from './dropDownStyled'

type OptionType = {
  label: any
  value: string
  disabled?: boolean
}

type CustomSelectProps = {
  required?: boolean
  labelId?: string
  selectId?: string
  labelStyle?: React.CSSProperties
  textLabel?: string
  onChange?: (options: OptionType[]) => void
  options: OptionType[]
  className?: string
  search?: boolean
  placeHolder?: string
  selected: any[]
  setSelected : any
  [propName: string]: any
}

const Option = (props: any) => {
  const { data, isSelected, onSelect, getStyles } = props
  return (
    <OptionWrapper
      selected={isSelected}
      onClick={ data.disabled ? () => {} : () => onSelect(data)}
      style={getStyles('option', props)}
    >
      <OptionInput type='checkbox' className='checkbox' checked={isSelected} onChange={() => { }} disabled={data.disabled ? data.disabled : false} />
      <OptionLabel className='labelCheckBox'>{data.label}</OptionLabel>
    </OptionWrapper>
  )
}

const DropDownComponent: React.FC<CustomSelectProps> = (
  {
    required,
    labelStyle,
    labelId,
    selectId,
    textLabel,
    placeHolder,
    onChange,
    options,
    selected,
    setSelected,
    className,
    search = false,
    ...restProps
  }
) => {

  const handleSelect = (option: OptionType) => {
    const newSelectedOptions = [...selected]
    const optionIndex = newSelectedOptions.findIndex(
      item => item.value === option.value
    )
    if (optionIndex > -1)
      newSelectedOptions.splice(optionIndex, 1)
    else
      newSelectedOptions.push(option)

    if (onChange) onChange(newSelectedOptions)
    setSelected(newSelectedOptions)
  }

  return (
    <>
      <TextFieldLabel id={labelId} style={labelStyle}>
        {textLabel}
        {required && '*'}
      </TextFieldLabel>
      <CustomSelect
        id={selectId}
        isSearchable={search}
        selectedData={selected}
        options={options}
        className={className}
        value={
          selected.length > 0
            ? {
              value: '',
              label: (
                <SelectedOption>
                  {selected[0]?.label}
                  {selected.length > 1 && ` + ${selected.length - 1}`}
                </SelectedOption>
              ),
            }
            : { value: 'Select Options', label: (<span style={{ color: 'rgba(176, 176, 176, 1)', fontWeight: '400', fontSize: '15px', lineHeight: '15px' }}>{placeHolder}</span>) }
        }
        classNamePrefix='custom-dropDown'
        isOptionSelected={(option: any) =>
          selected.some((item) => item.value === option.value)
        }
        components={{
          Option: (props: any) => (
            <Option
              {...props}
              onSelect={props.data.disabled ? ()=>{} :handleSelect}
              isSelected={selected.some(
                (item) => item.value === props.data.value
              )}
            />
          ),
        }}
        {...restProps}
      />
    </>
  )
}

export { DropDownComponent, CustomSelectProps }
