import styled from 'styled-components'

export const ContainerMobileTabl = styled.div`
  width: 100%;
  max-width: 280px;
  background-color: var(--background);
  margin: 0 auto 8px auto;
  border-radius: 10px;
  border-left: 5px solid
    ${p => {
      switch (p.isType) {
        case '+':
          return 'var(--accentPrimary)'
        case '-':
          return 'var(--accentSecondary)'
        default:
          return ''
      }
    }};
`
export const ContainerEmpty = styled.div`
  height: 280px;
  max-width: 280px;
  padding: 40px 20px 8px;
  font-family: 'Circe';
  font-size: 16px;
  line-height: 1.474;
  text-align: center;
  background-color: var(--background);
  margin-bottom: 8px;
  border-radius: 10px;
  border-radius: 10px;
  border-left: 5px solid var(--paleActiveColor);
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
    border-bottom: 1px solid var(--text-header);
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
  text-align: end;
  color: ${p => {
    switch (p.isType) {
      case '+':
        return 'var(--accentPrimary)'
      case '-':
        return 'var(--accentSecondary)'
      default:
        return ''
    }
  }};
`
