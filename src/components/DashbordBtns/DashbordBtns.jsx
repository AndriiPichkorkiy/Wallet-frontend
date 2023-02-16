import React, { useContext } from 'react'
import {
  BtnsCont,
  BtnText,
  Container,
  CurrLinkBtn,
  LinkBtn,
  NewsBtnText,
  NewsLinkBtn
} from './DBtnsComponents'
import HomeSharpIcon from '@mui/icons-material/HomeSharp'
import TimelineIcon from '@mui/icons-material/Timeline'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import ArticleIcon from '@mui/icons-material/Article'
import Media from 'react-media'
import { ThemeContext } from 'styled-components'

const DashbordBtns = () => {

  const themeContext = useContext(ThemeContext)
  return (
    <Container>
      <BtnsCont>
        <LinkBtn to='/'>
          <Media queries={{ small: '(max-width: 767px)' }}>
            {matches =>
              matches.small ? (
                <HomeSharpIcon
                  sx={{
                    color: themeContext.colors.background,
                    background: themeContext.colors.paleActiveColor,
                    borderRadius: '6px',
                    width: '44px',
                    height: '44px'
                  }}
                />
              ) : (
                <HomeSharpIcon
                  sx={{
                    color: themeContext.colors.background,
                    background: themeContext.colors.paleActiveColor,
                    borderRadius: '2px',
                    width: '18px',
                    height: '18px'
                  }}
                />
              )
            }
          </Media>
          <BtnText>Home</BtnText>
        </LinkBtn>
        <LinkBtn to='/statistics'>
          <Media queries={{ small: '(max-width: 767px)' }}>
            {matches =>
              matches.small ? (
                <TimelineIcon
                  sx={{
                    color: themeContext.colors.background,
                    background: themeContext.colors.paleActiveColor,
                    borderRadius: '6px',
                    width: '44px',
                    height: '44px'
                  }}
                />
              ) : (
                <TimelineIcon
                  sx={{
                    color: themeContext.colors.background,
                    background: themeContext.colors.paleActiveColor,
                    borderRadius: '2px',
                    width: '18px',
                    height: '18px'
                  }}
                />
              )
            }
          </Media>
          <BtnText>Statistics</BtnText>
        </LinkBtn>
        <CurrLinkBtn to='/currency'>
          <AttachMoneyIcon
            sx={{
              color: themeContext.colors.background,
              background: themeContext.colors.paleActiveColor,
              borderRadius: '6px',
              width: '44px',
              height: '44px'
            }}
          />
        </CurrLinkBtn>
      </BtnsCont>
      <NewsLinkBtn to='/news'>
        <Media queries={{ small: '(max-width: 767px)' }}>
          {matches =>
            !matches.small && (
              <ArticleIcon
                sx={{
                  color: themeContext.colors.background,
                  background: themeContext.colors.paleActiveColor,
                  borderRadius: '2px',
                  width: '18px',
                  height: '18px'
                }}
              />
            )
          }
        </Media>
        <NewsBtnText>News</NewsBtnText>
      </NewsLinkBtn>
    </Container>
  )
}

export default DashbordBtns
