import styled from 'styled-components'
import { respondTo } from '../../../helpers/respondTo'

import { ReactComponent as DropDownIcon } from '../../../assets/images/icons/dropDown.svg'

export const SelectWrapper = styled.div`
  position: relative;
  /* margin-bottom: 20px; */
  width: 100%;

  .rotateOpen {
    transform: rotateX(180deg);
  }
  .rotateClose {
    transform: rotateX(0deg);
  }
  .rotate {
    transform: rotateX(180deg);
  }
  ${respondTo.sm`
  :not(:last-child) {
      margin-right: 16px;
    }
  `}
  ${respondTo.lg`
  :not(:last-child) {
      margin-right: 32px;
    }
  `}
`

export const Title = styled.p`
  position: absolute;
  top: 45%;
  left: 20px;
  transform: translateY(-50%);
  cursor: pointer;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.mainText};
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

export const Selector = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #000;
  border-radius: 30px;
  background-color: transparent;
  border-color: ${({ theme }) => theme.colors.chartInputBorderColor};

  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  cursor: pointer;
  :hover,
  :focus-visible {
    border-color: ${({ theme }) => theme.colors.activeColor};
  }
`
export const List = styled.ul`
  position: absolute;
  z-index: 99;
  top: 50px;
  // max-width: 100%;
  max-height: 450px;
  overflow-y: scroll;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.chartSelectBg};
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(25px);
  border-radius: 20px;
  &::-webkit-scrollbar {
    width: 1px;
  }

  animation: scale-in-ver-top 250ms cubic-bezier(0.4, 0, 0.2, 1); both;
  @keyframes scale-in-ver-top {
    0% {
      -webkit-transform: scaleY(0);
      transform: scaleY(0);
      -webkit-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
      opacity: 1;
    }
    100% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
      -webkit-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
      opacity: 1;

    }
  }

`
export const ListOption = styled.li`
  width: 100%;
  padding: 5px 20px;
  cursor: pointer;
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.mainText};

  ${({ theme }) => theme.colors.chartSelectBg};
  :hover {
    background: ${({ theme }) => theme.colors.chartSelectBg};
    color: ${({ theme }) => theme.colors.accentSecondary};
  }

  `
export const CategoryTitle = styled.p`
  position: absolute;
  top: 45%;
  left: 20px;
  cursor: pointer;
  transform: translateY(-50%);

  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;

  color: ${({ theme }) => theme.colors.textHeader};
`
export const CategorySvg = styled(DropDownIcon)`
  position: absolute;
  top: 40%;
  right: 20px;
  width: 18px;
  height: 9px;
  cursor: pointer;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
`

export const CategorySelect = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  background-color: transparent;
  background: transparent;

  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  cursor: pointer;
  :hover,
  :focus-visible {
    border-color: ${({ theme }) => theme.colors.activeColor};
    background-color: transparent;
  }
  ${respondTo.sm`
    height: 32px;
  `}
`
