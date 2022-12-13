import styled from 'styled-components'

import { ReactComponent as DropDownIcon } from '../../../assets/images/icons/dropDown.svg'

export const SelectWrapper = styled.div`
  position: relative;

  // margin-bottom: 20px;
  width: 300px;
`

export const Title = styled.p`
  position: absolute;
  top: 45%;
  left: 20px;
  transform: translateY(-50%);

  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`

export const Svg = styled(DropDownIcon)`
  position: absolute;
  top: 40%;
  right: 20px;
  width: 18px;
  height: 9px;
  cursor: pointer;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
`

export const Sel = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #000;
  border-radius: 30px;
  background-color: transparent;

  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  cursor: pointer;
  // :hover,
  // :focus-visible {
  //   outline: 1px solid #4a56e2;
  //   border-color: #4a56e2;
  // }
  // .active {
  //   transform: rotateX(180deg);
  // }
  // .option {
  //   background-color: #000;
  // }
`
export const List = styled.ul`
  position: absolute;
  top: 50px;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(25px);
  border-radius: 20px;
`
export const ListOption = styled.li`
  width: 100%;
  padding: 5px 20px;
  cursor: pointer;

  border-radius: 20px;
  rgba(255, 255, 255, 0.7);
  :hover {
  background: rgba(255, 255, 255, 0.7);

    color: rgba(255, 101, 150, 1);
  }
`
