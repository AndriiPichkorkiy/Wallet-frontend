import styled from 'styled-components'

import { ReactComponent as DropDownIcon } from '../../../assets/images/icons/dropDown.svg'

export const SelectWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
  width: 100%;
  .rotate {
    transform: rotateX(180deg);
  }
`

export const Select = styled.select`
  position: relative;
  width: 100%;
  height: 50px;
  border: 1px solid #000;
  border-radius: 30px;
  padding: 0 20px;
  background-color: transparent;

  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  cursor: pointer;
  :hover,
  :focus-visible {
    outline: 1px solid #4a56e2;
    border-color: #4a56e2;
  }
  .active {
    transform: rotateX(180deg);
  }
  .option {
    background-color: #000;
  }
`
export const Option = styled.option`
  // width: 100%;
  // background-color: transparent;
  // cursor: pointer;

  // font-family: 'Circe';
  // font-style: normal;
  // font-weight: 400;
  // font-size: 16px;
  // line-height: 24px;
`

export const Svg = styled(DropDownIcon)`
  position: absolute;
  top: 45%;
  right: 20px;
  width: 18px;
  height: 9px;
  cursor: pointer;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
`
