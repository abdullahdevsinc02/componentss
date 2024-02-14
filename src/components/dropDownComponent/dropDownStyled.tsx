import Select from 'react-select'
import styled from 'styled-components'

type OptionType = {
  label: any
  value: string
}

const TextFieldLabel = styled.p`
  font-size: 15px;
  font-weight: 500;
  text-align: left;
`;

const SelectedOption = styled.span`
  display: flex;
  flex-direction: row;
  width: fit-content;
  padding: 4px 16px;
  background: #f4fbf7;
  border: 0.5px solid #1eae63;
  border-radius: 50px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
`;

const OptionWrapper = styled.div<{ selected: boolean }>`
  display: flex !important;
  align-items: center;
  margin: 5px !important;
  cursor: default !important;
  width: auto !important;
  user-select: none !important;
  background-color: ${({ selected }) => (selected ? '#1EAE630D !important' : '#f8f9fd !important')};
  color: black !important;
  accent-color: #1eaa63;
`;

const OptionInput = styled.input`
  width: 20px;
  height: 20px;
`;

const OptionLabel = styled.span`
  margin-left: 10px;
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #757575;
`;

const CustomSelect = styled(Select) <{ selectedData: OptionType[] }>`
  width: 279px;
  height: 47px;
  text-align: left;
  font-size: 15px;
  .custom-dropDown__control.css-13cymwt-control {
    background-color: #F8F9FD;
     border: ${({ selectedData }) => (selectedData.length > 0 ? '1px solid #1eae63 ' : '1px solid #F8F9FD')};
  }

  .custom-dropDown__menu-list {
    background: #F8F9FD;
    border-width: 1px 0px 1px 1px;
    border-style: solid;
    border-color: #EDEFF1;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
  }

  .custom-dropDown__multi-value.css-1p3m7a8-multiValue {
    border: 1px solid #1eae63;
    border-radius: 10px;
    background-color: #f8f9fd;
    font-size: 12px;
    font-weight: 400;
  }

  .custom-dropDown__control.custom-dropDown__control--is-focused.custom-dropDown__control--menu-is-open.css-t3ipsp-control {
    box-shadow: 0 0 0 1px #1eae63 !important;
    border: 1px solid #1eae63;
  }

  .custom-dropDown__control.custom-dropDown__control--is-focused.css-t3ipsp-control {
    box-shadow: 0 0 0 1px #1eae63 !important;
    border: 1px solid #1eae63;
  }

  .custom-dropDown-normal__control.custom-dropDown-normal__control--is-focused.css-t3ipsp-control {
    box-shadow: 0 0 0 1px #1eae63 !important;
    border: 1px solid #1eae63;
  }
`;

export { TextFieldLabel, SelectedOption, OptionWrapper, OptionInput, OptionLabel, CustomSelect }
