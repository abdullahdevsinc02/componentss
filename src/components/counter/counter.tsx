import React from 'react'
import { Input, CounterContainer, Label } from './counterStyled'

interface CounterProps {
  textLabel: string
  placeHolder?: string
  value?: string | number
  disabled?: boolean
  onChange: (value: string) => void
  [propName: string]: any
  className?: string
  labelClasses?: string
  style?: {}
  labelStyle?: {}
}

const Counter: React.FC<CounterProps> = ({
  textLabel,
  placeHolder,
  value,
  onChange,
  disabled = false,
  labelClasses,
  className,
  style,
  labelStyle,
  ...restProps
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <CounterContainer>
      <Label className={labelClasses} style={labelStyle}>
        {textLabel}
      </Label>
      <Input
        type='number'
        placeholder={placeHolder}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        className={`textField ${className}`}
        style={style}
        {...restProps}
      />
    </CounterContainer>
  )
}

export { Counter, CounterProps }
