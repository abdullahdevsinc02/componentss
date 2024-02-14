import React, { useState } from 'react'

import { Wrapper, Input, Label, TextField } from './toggleSwitchStyled'

interface ToggleSwitchProps {
  onToggle?: (checked: boolean) => void
  textLabel: string
  className: string
  style?: React.CSSProperties
  textStyle?: React.CSSProperties
  required?: boolean
  [propName: string]: any
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  onToggle,
  textLabel,
  className,
  style,
  textStyle,
  required = false,
  ...restProps
}) => {
  const [checked, setChecked] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
    if (onToggle) onToggle(event.target.checked)
  }

  return (
    <Wrapper>
      <Input
        type='checkbox'
        id='toggle'
        checked={checked}
        onChange={handleChange}
        className={className}
        required
        data-testid='toggle-switch-input'
        {...restProps}
      />
      <Label
        style={style}
        htmlFor='toggle'
        checked={checked}
      />
      <TextField
        style={textStyle}
      >
        {textLabel}
      </TextField>
    </Wrapper>
  )
}

export { ToggleSwitch, ToggleSwitchProps }
