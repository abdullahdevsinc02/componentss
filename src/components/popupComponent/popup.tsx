import React from 'react'

import { Button } from '../button'
import { Popup, PopupContent, Icon, Content, Title, Message, ButtonBox } from './popupStyled'

interface PopupProps {
  title?: string
  message?: string
  children?: React.ReactNode
  className?: string
  type: 'success' | 'danger'
  onClickRight: () => void
  onClickLeft: () => void
  popupStyle?: React.CSSProperties
  titleStyle?: React.CSSProperties
  messageStyle?: React.CSSProperties
  iconStyle?: React.CSSProperties
  iconContainerStyle?: React.CSSProperties
  leftButtonLabel?: string
  rightButtonLabel?: string
}

const PopUp: React.FC<PopupProps> = ({
  title,
  message,
  children,
  className,
  type = 'success',
  onClickRight = () => { },
  onClickLeft = () => { },
  popupStyle,
  titleStyle,
  messageStyle,
  iconStyle,
  iconContainerStyle,
  leftButtonLabel,
  rightButtonLabel
}) => {

  const childComponent = (
    <Message>{children}</Message>
  )

  return (

    <Popup style={popupStyle} className={className}>
      <PopupContent>
        <Icon type={type === 'success' ? 'success' : 'danger'} style={iconContainerStyle}>
          <svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' fill='currentColor' className='bi bi-exclamation-diamond-fill' viewBox='0 0 16 16' style={iconStyle ? iconStyle : { color: `${type === 'success' ? '#1EAE63' : '#FF6868'}` }}>
            <path d='M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' />
          </svg>
        </Icon>
        <Content>
          <Title style={titleStyle}>{title}</Title>
          <Message style={messageStyle}>{message}</Message>
          {children && childComponent}
        </Content>
        <ButtonBox>
          <div>
            <Button label={leftButtonLabel ? leftButtonLabel : 'Cancel'} onClick={onClickLeft} style={{ width: '234px', backgroundColor: '#F8F9FD', color: 'black' }} />
          </div>
          <div>
            <Button label={rightButtonLabel ? rightButtonLabel : 'Continue'} onClick={onClickRight} style={{ width: '234px' }} variant={type === 'success' ? undefined : 'danger'} />
          </div>
        </ButtonBox>
      </PopupContent>
    </Popup>
  )
}

export { PopUp, PopupProps }
