import styled from 'styled-components'

export const ContainerMobileTabl = styled.div`
  width: 100%;
  max-width: 280px;
  background-color: #ffffff;
  margin: 0 20px 8px 20px;
  border-radius: 10px;
  border-left: 5px solid
    ${p => {
      switch (p.type) {
        case '-':
          return 'color: #FF6596'
        case '+':
          return 'color #24CCA7'
        default:
          return `#212900`
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
  font-style: normal;
  color: ${p => {
    switch (p.typeTR) {
      case '-':
        return 'color: #FF6596'
      case '+':
        return 'color #24CCA7'
      default:
        return `#921898`
    }
  }};
`
