import React, { useState } from 'react'
import { Switch, SwitchSpan, TextField } from './checkBoxStyled'

interface CheckBoxProps {
  onClick?: (checked: boolean) => void
  textLabel: string
  style?: React.CSSProperties
  textStyle?: React.CSSProperties
  className?: string
  required?: boolean
  [propName: string]: any
}

const CheckBox: React.FC<CheckBoxProps> = ({
  onClick,
  textLabel,
  style,
  textStyle,
  required = false,
  className,
  ...restProps
}) => {
  const [checked, setChecked] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
    if (onClick) onClick(event.target.checked)
  }

  return (
    <SwitchSpan>
      <Switch
        type='checkbox'
        checked={checked}
        className={`textField ${className}`}
        onChange={handleChange}
        style={style}
        {...restProps}
      />
      <TextField style={textStyle}>{textLabel}{required && '*'}</TextField>
    </SwitchSpan>
  )
}

export { CheckBox, CheckBoxProps }
