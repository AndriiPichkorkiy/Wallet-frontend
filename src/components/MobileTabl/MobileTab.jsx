import {
  ContainerMobileTabl,
  CardBox,
  TypographyCard,
  Span,
  ContainerEmpty
} from './MobileTabl.styled'
import { useId } from 'react'

const MobileTabl = ({ data }) => {
  const unid = useId()
  if (data.length === 0) {
    return (
      <ContainerEmpty sx={{ minWidth: 280 }}>
        There are no recorded transactions. Click the green button in the lower
        right corner and make the first entry!
      </ContainerEmpty>
    )
  }
  const card =
    // data &&
    data.map(({ type, category, comment, amount, balance, date }) => {
      const time = date.$date.$numberLong
      const newDate = new Date(+time)
      const DATA =
        newDate.getDate() +
        '.' +
        (newDate.getMonth() + 1) +
        '.' +
        newDate.getFullYear()

      return (
        <ContainerMobileTabl sx={{ minWidth: 280 }} isType={type ? '+' : '-'}>
          <CardBox key={unid}>
            <TypographyCard>
              Date <Span> {DATA}</Span>
            </TypographyCard>
            <TypographyCard>
              Type <Span>{type ? '+' : '-'}</Span>
            </TypographyCard>
            <TypographyCard>
              Category <Span>{category.name}</Span>
            </TypographyCard>
            <TypographyCard>
              Comment <Span>{comment}</Span>
            </TypographyCard>
            <TypographyCard>
              Sum <Span isType={type ? '+' : '-'}>{amount.toFixed(2)}</Span>
            </TypographyCard>
            <TypographyCard>
              Balance <Span>{balance.toFixed(2)}</Span>
            </TypographyCard>
          </CardBox>
        </ContainerMobileTabl>
      )
    })
  return card
}
export default MobileTabl
