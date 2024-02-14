import React, { useState } from 'react'

import { Label, LabelError, Input } from './textFieldStyled'

interface TextFieldProps {
  textLabel: string
  placeHolder: string
  type?: 'error' | 'success' | null
  value?: string
  style?: {}
  labelStyle?: {}
  className?: string
  [propName: string]: any
  disable?: boolean
  required?: boolean
  onChange: (value: string) => void
}

const TextField: React.FC<TextFieldProps> = ({
  textLabel,
  placeHolder,
  type,
  value,
  onChange = null,
  disable = false,
  required = false,
  className,
  style,
  labelStyle,
  ...restProps
}) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(event.target.value)
  }

  return (
    <>
      {type === 'error' ? (
        <LabelError style={labelStyle}>
          {textLabel}
          {required && '*'}
        </LabelError>
      ) : (
        <Label
          success={type === 'success'}
          focus={isFocused}
          style={labelStyle}
        >
          {textLabel}
          {required && '*'}
        </Label>
      )}

      <Input
        error={type === 'error'}
        success={type === 'success'}
        id='textField'
        type='text'
        placeholder={placeHolder}
        value={value}
        style={style}
        onChange={handleChange}
        className={`textField ${className}`}
        onFocus={handleFocus}
        focus={isFocused}
        onBlur={handleBlur}
        disabled={disable}
        required={required}
        {...restProps}
      />
    </>
  )
}

export { TextField, TextFieldProps }
