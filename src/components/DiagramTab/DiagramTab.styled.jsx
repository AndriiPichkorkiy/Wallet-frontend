import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1200px) {
    margin-left: 70px;
    margin-top: 32px;
  }
`

export const StatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 768px) {
    align-items: flex-start;
    flex-direction: row;
  }
`
export const DiagramWrapper = styled.div`
  display: flex;
  // flex-direction: column;
`

export const StatsTitle = styled.h2`
  display: block;
  width: 100%;
  text-align: start;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  margin-bottom: 8px;
`
