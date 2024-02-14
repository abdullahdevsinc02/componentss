import React from 'react'

import { Typography } from '../typography'
import { Icon, ButtonComponent } from './buttonStyled'

interface ButtonProps {
  label: string
  iconClasses?: string
  labelClasses?: string
  className?: string
  onClick: () => void
  icon?: React.ReactNode
  type?: 'primary' | 'secondary' | 'teritary'
  variant?: 'success' | 'warning' | 'danger' | 'info'
  disabled?: boolean
  style?: React.CSSProperties
  iconStyle?: React.CSSProperties
  labelStyle?: React.CSSProperties
  postPosition?: boolean
  [propName: string]: any
}

const Button: React.FC<ButtonProps> = ({
  label,
  className = '',
  labelClasses = '',
  iconClasses = '',
  onClick,
  icon,
  type = 'primary',
  variant = 'success',
  disabled = false,
  style = {},
  iconStyle = {},
  labelStyle = {},
  postPosition = false,
  ...restProps
}) => {
  const iconComponent = (
    <Icon className={iconClasses} style={iconStyle}>
      {icon}
    </Icon>
  )

  return (
    <ButtonComponent >
      <button
        className={`${className} ${type} ${variant} ${disabled ? 'disabled' : ''}`}
        onClick={onClick}
        disabled={disabled}
        style={style}
        {...restProps}
      >
        {!postPosition && icon && iconComponent}
        <Typography
          size='utility-lg'
          style={labelStyle}
        >
          <p className={labelClasses}>{label}</p>
        </Typography>
        {postPosition && icon && iconComponent}
      </button>
    </ButtonComponent>
  )
}

export { Button, ButtonProps }
