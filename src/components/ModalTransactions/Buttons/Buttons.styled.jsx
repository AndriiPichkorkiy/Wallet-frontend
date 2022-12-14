import styled from 'styled-components'

export const ContainerAddTransitionButton = styled.div`
  cursor: pointer;
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 44px;
  height: 44px;
  background-color: var(--accentPrimary);
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  &:hover,
  &:focus {
    background-image: linear-gradient(315deg, #89d891 0%, #03c8a8 74%);
    transform: scale(1.04);
  }
`
export const ButtonMinus = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
`

export const ButtonPlus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: pointer;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`
export const ButtonPlusCrist = styled.div`
  background-color: #fff;
  height: 2px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const VerticalAlign = styled.div`
  background-color: #fff;
  height: 20px;
  width: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`
