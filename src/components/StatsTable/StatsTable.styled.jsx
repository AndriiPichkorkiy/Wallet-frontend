import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 32px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
    transform: translateY(-32px);
  }
  @media screen and (min-width: 1024px) {
    margin-top: 0;
    transform: translateY(0);
  }
`
export const SelectionWrapper = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`
