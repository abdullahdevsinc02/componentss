import styled from 'styled-components'

const Label = styled.span`
  font-family: 'Rubik', sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 16px;
  color: rgba(0, 0, 0, 1);
`;

const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 573px;
  height: 47px;
  padding-left: 24px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  border: none;
  background: #F8F9FD;
  color: #C4C4C4;
  border-radius: 5px;
  font-family: 'Rubik', sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;

  &:focus {
    outline: 0;
    color: black;
  }
`;

const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export { Input, CounterContainer, Label }
