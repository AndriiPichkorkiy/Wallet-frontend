import styled from 'styled-components'
export const SelectWrapper = styled.div`
  margin-top: 32px;
  width: 100%;
  // display: flex;
  // flex-direction: column;
`

export const Select = styled.select`
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
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
`
export const Option = styled.option`
  width: 100%;
  background-color: transparent;
  cursor: pointer;

  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  overflow: hidden;
`
export const Thead = styled.thead`
  display: flex;
  background-color: #fff;
  border-radius: 30px;
`

export const Tr = styled.tr`
  display: flex;
  flex-direction: column;
  width: 100%;
  // justify-content: space-between;
  // align-items: space-between;
  padding: 16px 20px;
  // height: 50px;
`
export const Tbody = styled.tbody`
  // display: flex;
  // flex-direction: column;
  // width: 100%;
  // height: 100%;
  // border-radius: 30px;
`
export const Td = styled.td`
  // display: flex;

  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
`
export const TdSum = styled.td`
  display: flex;
  align-items: center;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`
export const ColorSquare = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 2px;
  background-color: #000;
  margin-right: 10px;
`
export const Underline = styled.div`
  width: 100%;
  height: 1px;
  border-top: 1px solid #dcdcdf;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
`
export const LineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // width: 100%;
  // height: 100%;
`

export const Svg = styled.svg``
