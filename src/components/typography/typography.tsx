import React from 'react'

import { TypographyStyles } from './typographyStyled'

interface TypographyProps {
  children: React.ReactNode
  size?: string
  className?: string
  style?: React.CSSProperties
  [propName: string]: any
}

const Typography: React.FC<TypographyProps> = ({
  children,
  size = 'h1',
  className = '',
  style = {},
  ...restProps
}) => (
  <TypographyStyles className={`${size} ${className}`} style={style} {...restProps} >
    {children}
  </TypographyStyles>
)

export { Typography, TypographyProps }
