import styled from 'styled-components'

const Switch = styled.input`
  height: 15px;
  width: 15px;
  margin-right: 12px;
  accent-color: #1EAA63;
`

const SwitchSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`

const TextField = styled.span`
  font-family: 'Rubik', sans-serif;
  font-size: 16px;
  font-weight:400;
  line-height: 12px;
  letter-spacing: 0em;
  color: #000000;
  text-align: left;
  border: none;
  background-color: transparent;
  outline: none;
`
export { Switch, SwitchSpan, TextField }
