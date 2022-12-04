import {
  ContainerMobileTabl,
  CardBox,
  TypographyCard,
  Span,
} from './MobileTabl.styled'
// import { ContainerTabl } from '../HomeTabl/HomeTabl.styled'
import { useId } from 'react'

const MobileTabl = ({ data }) => {
  const unid = useId()
  const card =
    data &&
    data.map(({ type, category, comment, sum, balance, date }) => {
      return (
        <ContainerMobileTabl sx={{ minWidth: 280 }} isType={type ? '+' : '-'}>
          <CardBox key={unid}>
            <TypographyCard>
              Date <Span> {date}</Span>
            </TypographyCard>
            <TypographyCard>
              Type <Span>{type ? '+' : '-'}</Span>
            </TypographyCard>
            <TypographyCard>
              Category <Span>{category}</Span>
            </TypographyCard>
            <TypographyCard>
              Comment <Span>{comment}</Span>
            </TypographyCard>
            <TypographyCard>
              Sum <Span isType={type ? '+' : '-'}>{sum}</Span>
            </TypographyCard>
            <TypographyCard>
              Balance <Span>{balance}</Span>
            </TypographyCard>
          </CardBox>
        </ContainerMobileTabl>
      )
    })
  return card
}
export default MobileTabl
