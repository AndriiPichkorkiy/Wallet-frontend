import {
  ContainerMobileTabl,
  CardBox,
  TypographyCard,
  Span,
  ContainerEmpty
} from './MobileTabl.styled'
import { nanoid } from '@reduxjs/toolkit'
import EllipsisText from 'react-ellipsis-text'
import { useContext } from 'react'
import { ThemeContext } from '../../ThemeSwitching/ThemeContextProvider'

const MobileTabl = ({ transactions }) => {
  const themeContext = useContext(ThemeContext)
  if (transactions.length > 0) {
    const card = transactions.map(
      ({ type, category, comment, amount, balance, date }) => {
        const time = date
        const newDate = new Date(time).toLocaleDateString()

        return (
          <ContainerMobileTabl
            key={nanoid()}
            sx={{ minWidth: 280 }}
            isType={type ? '+' : '-'}
          >
            <CardBox>
              <TypographyCard>
                Date <Span> {newDate}</Span>
              </TypographyCard>
              <TypographyCard>
                Type <Span>{type ? '+' : '-'}</Span>
              </TypographyCard>
              <TypographyCard>
                Category <Span>{category.name}</Span>
              </TypographyCard>
              <TypographyCard>
                Comment
                <Span>
                  <EllipsisText text={comment} length={15} />
                </Span>
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
      }
    )
    return card
  }
  if (transactions.length === 0) {
    return (
      <ContainerEmpty sx={{ minWidth: 280 }}>
        There are no recorded transactions. Click the{' '}
        <span style={{ color: themeContext.colors.accentPrimary }}>green button </span> in
        the lower right corner ↓ and make the first entry!
      </ContainerEmpty>
    )
  }
}
export default MobileTabl
