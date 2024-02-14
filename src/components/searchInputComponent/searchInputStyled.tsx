import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const SearchBar = styled.div`
  width: 247px;
  height: 47px;
  background-color: #f8f9fd;
  color: #757575;
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
`

const InputSearch = styled.input`
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

  &::placeholder {
    color: #757575;
  }
`

const SearchIcon = styled(FontAwesomeIcon)`
  vertical-align: middle;
  padding-left: 8px;
  padding-right: 8px;
`

export { SearchBar, InputSearch, SearchIcon }
