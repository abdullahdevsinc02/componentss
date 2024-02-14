import styled from 'styled-components'

const Icon = styled.span`
  height: 24px;
  width: 24px;
  display: flex !important;
  align-items: center;
`;

const ButtonComponent = styled.div`
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    border-radius: 4px;
    border: none;
    font-style: normal;
    font-family: 'Rubik', sans-serif;
    font-weight: 550;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    height: 48px;
    width: auto;
    gap: 12px;
  }

  button.primary.danger {
    background: #FF6868;
    color: #FFFFFF;
  }

  button.primary.danger:active {
    background: #FF4A4A;
  }

  button.primary.success {
    background: #1EAE63;
    color: #FFFFFF;
  }

  button.primary.success:active {
    background: #0D964F;
  }

  button.primary.info {
    background: #2EA2E6;
    color: #FFFFFF;
  }

  button.primary.info:active {
    background: #0081CC;
  }

  button.primary.warning {
    background: #EDA12F;
    color: #FFFFFF;
  }

  button.primary.warning:active {
    background: #DB8400;
  }

  button.primary.disabled {
    background: #EDEDED;
    color: #959595;
  }

  button.primary.disabled:active {
    background: #EDEDED;
    color: #959595;
  }
  button.secondary.danger {
    background: transparent;
    color: #FF6868;
    border: 1px solid;
    border-radius: 5px;
  }

  button.secondary.danger:active {
    background: #FF4A4A;
    color: #FFFFFF;
    border: none
  }

  button.secondary.success {
    background: transparent;
    color: #1EAE63;
    border: 1px solid;
    border-radius: 5px;
  }

  button.secondary.success:active {
    background: #0D964F;
    color: #FFFFFF;
    border: none
  }


  button.secondary.info {
    background: transparent;
    color: #2EA2E6;
    border: 1px solid;
    border-radius: 5px;
  }

  button.secondary.info:active {
    background: #0081CC;
    color: #FFFFFF;
    border: none
  }

  button.secondary.warning {
    background: transparent;
    color: #EDA12F;
    border: 1px solid;
    border-radius: 5px;
  }

  button.secondary.warning:active {
    background: #DB8400;
    color: #FFFFFF;
    border: none
  }

  button.secondary.disabled {
    background: transparent;
    color: #959595;
    border: 1px solid;
    border-radius: 5px;
  }

  button.secondary.disabled:active {
    background: transparent;
    color: #959595;
    border: 1px solid;
    border-radius: 5px;
  }

  button.teritary.success {
    background: transparent;
    color: #1EAE63;
  }

  button.teritary.success:active {
    background: #0D964F;
    color: #FFFFFF;
  }

  button.teritary.danger {
    background: transparent;
    color: #FF6868;
  }

  button.teritary.danger:active {
    background: #FF4A4A;
    color: #FFFFFF;
  }

  button.teritary.warning {
    background: transparent;
    color: #EDA12F;
  }

  button.teritary.warning:active {
    background: #DB8400;
    color: #FFFFFF;
  }

  button.teritary.info {
    background: transparent;
    color: #2EA2E6;
  }

  button.teritary.info:active {
    background: #0081CC;
    color: #FFFFFF;
  }

  button.teritary.disabled {
    background: transparent;
    color: #959595;
  }

  button.teritary.disabled:active {
    background: transparent;
    color: #959595;
  }
`;

export { Icon, ButtonComponent }
