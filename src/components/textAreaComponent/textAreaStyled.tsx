import styled,{ css } from  'styled-components'

const Label = styled.p<{ success: boolean; focus: boolean }>`
  font-size: 15px;
  font-weight: 500;
  text-align: left;

  ${({ success }) =>
    success &&
    css`
      color: #1eae63;
    `}

  ${({ focus }) =>
    focus &&
    css`
      color: #1eae63;
    `}
`;

const LabelError = styled.p`
  font-size: 15px;
  font-weight: 500;
  text-align: left;
  color: #ff6868;
`;

const Input = styled.textarea<{ error: boolean; success: boolean; focus: boolean }>`
  display: block;
  box-sizing: border-box;
  width: 1082px;
  height: 118px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;

  ${({ error }) =>
    error &&
    css`
      background: rgba(255, 104, 104, 0.05);
      border: 1px solid rgba(255, 104, 104, 1);
      outline: 0;
    `}

  ${({ success }) =>
    success &&
    css`
      border: 1px solid #1eae63;
      outline: 0;
    `}

  ${({ focus }) =>
    focus &&
    css`
      border: 1px solid #1eae63;
      outline: 0;
    `}

  ${({ error, success }) =>
    !error &&
    !success &&
    css`
      background: #f8f9fd;
    `}
`;

export { Label, LabelError, Input }
