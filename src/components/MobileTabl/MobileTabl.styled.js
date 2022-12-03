import styled from 'styled-components'

export const ContainerMobileTabl = styled.div`
  width: 100%;
  max-width: 280px;
  background-color: #ffffff;
  margin: 0 auto 8px auto;
  border-radius: 10px;
  border-left: 5px solid
    ${p => {
      switch (p.isType) {
        case '+':
          return '#FF6596'
        case '-':
          return '#24CCA7'
        default:
          return ''
      }
    }};
`

export const CardBox = styled.div`
  padding: 12px 20px 8px;
`

export const TypographyCard = styled.p`
  position: relative;
  display: flex;
  justify-content: space-between;
  font-family: 'Circe';
  font-size: 18px;
  font-weight: 700;
  line-height: 1.474;
  margin-bottom: 20px;
  &::after {
    position: absolute;
    content: '';
    bottom: -8px;
    left: -25px;
    width: 100%;
    min-width: 280px;
    border-bottom: 1px solid #dcdcdf;
  }
  &:last-child {
    margin-bottom: 0;
    &::after {
      border-bottom: none;
    }
  }
`

export const Span = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: ${p => {
    switch (p.isType) {
      case '+':
        return '#FF6596'
      case '-':
        return '#24CCA7'
      default:
        return ''
    }
  }};
`
