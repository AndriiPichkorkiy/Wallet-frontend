import styled from 'styled-components'

export const ChartWrapper = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
  @media screen and (min-width: 768px) {
    width: 336px;
    height: 336px;
    margin-right: 32px;
  }
  @media screen and (min-width: 1280px) {
    width: 288px;
    height: 288px;
  }
`
export const BalanceWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  text-align: center;

  color: #000000;
`
