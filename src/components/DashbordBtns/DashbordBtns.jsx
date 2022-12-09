import React from 'react'
import {
  BtnsCont,
  BtnText,
  Container,
  CurrLinkBtn,
  LinkBtn
} from './DBtnsComponents'
import HomeSharpIcon from '@mui/icons-material/HomeSharp'
import TimelineIcon from '@mui/icons-material/Timeline'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import Media from 'react-media'

const DashbordBtns = () => {
  return (
    <Container>
      <BtnsCont>
        <LinkBtn to='/cabinet'>
          <Media queries={{ small: '(max-width: 767px)' }}>
            {matches =>
              matches.small ? (
                <HomeSharpIcon
                  sx={{
                    color: 'var(--background)',
                    background: 'var(--paleActiveColor)',
                    borderRadius: '6px',
                    width: '44px',
                    height: '44px'
                  }}
                />
              ) : (
                <HomeSharpIcon
                  sx={{
                    color: 'var(--background)',
                    background: 'var(--paleActiveColor)',
                    width: '18px',
                    height: '18px'
                  }}
                />
              )
            }
          </Media>
          <BtnText>Home</BtnText>
        </LinkBtn>
        <LinkBtn to='/cabinet/statistics'>
          <Media queries={{ small: '(max-width: 767px)' }}>
            {matches =>
              matches.small ? (
                <TimelineIcon
                  sx={{
                    color: 'var(--background)',
                    background: 'var(--paleActiveColor)',
                    borderRadius: '6px',
                    width: '44px',
                    height: '44px'
                  }}
                />
              ) : (
                <TimelineIcon
                  sx={{
                    color: 'var(--background)',
                    background: 'var(--paleActiveColor)',
                    width: '18px',
                    height: '18px'
                  }}
                />
              )
            }
          </Media>
          <BtnText>Statistiscs</BtnText>
        </LinkBtn>
        <CurrLinkBtn to='/cabinet/currency'>
          <AttachMoneyIcon
            sx={{
              color: 'var(--background)',
              background: 'var(--paleActiveColor)',
              borderRadius: '6px',
              width: '44px',
              height: '44px'
            }}
          />
        </CurrLinkBtn>
      </BtnsCont>
    </Container>
  )
}

export default DashbordBtns
