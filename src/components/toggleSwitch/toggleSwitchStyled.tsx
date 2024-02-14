import styled from 'styled-components'

interface LabelProps {
  checked: boolean
}

const Wrapper = styled.span`
  display: flex;
  align-items: center;
`

const Input = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`

const Label = styled.label<LabelProps>`
  cursor: pointer;
  text-indent: -9999px;
  width: 33px;
  height: 20px;
  margin-right: 8px;
  background: ${props => props.checked ? '#1EAE63' : '#959595'};
  display: inline-block;
  border-radius: 100px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 2px;
    left: 3px;
    bottom: 2px;
    width: 15px;
    height: 16px;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
  }

  ${Input}:checked + & {
    background: #1EAE63;
  }

  ${Input}:checked + &:after {
    left: calc(100% - 3px);
    transform: translateX(-100%);
  }
`
const TextField = styled.span`
  font-family: 'Rubik', sans-serif;
  font-size: 12px;
  font-weight:400;
  line-height: 12px;
  letter-spacing: 0em;
  color: #000000;
  text-align: left;
  border: none;
  background-color: transparent;
  outline: none;
`

export { Wrapper, Input, Label, TextField }
