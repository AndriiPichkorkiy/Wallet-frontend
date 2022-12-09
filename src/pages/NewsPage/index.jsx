import React, { useEffect, useState } from 'react'
import Media from 'react-media'
import { Navigate } from 'react-router-dom'
import Currency from '../../components/Currency'
import DashbordBtns from '../../components/DashbordBtns/DashbordBtns'
import Header from '../../components/Header/Header'
import { getNews } from '../../services/newsApi'
import { Container, NewsHeader, NewsItem, NewsItemHead, NewsLink, NewsList, NewsText } from './NewsComponents'

const NewsPage = () => {
    const [news, setNews] = useState([])

    // useEffect(() => {
    //     const asyncF = async () => {
    //         const { data } = await getNews("currency")
    //         setNews(data.articles)
    //     }
    //     asyncF()
    // }, [])
    
    return (
        <Media queries={{ small: '(max-width: 767px)' }}>
            {matches =>
              matches.small ? (
                <Navigate to="cabinet/currency"/>
          ) : (
              <>
                <Container>
                    <NewsHeader>News about currency</NewsHeader>
                    <NewsList >
                      <NewsItem><NewsItemHead>QWWeeeee</NewsItemHead><NewsText>ASdasdfasd asd sas swde qweas sa</NewsText><NewsLink href="/">link to the article</NewsLink></NewsItem>
                      <NewsItem><NewsItemHead>QWWeeeee</NewsItemHead><NewsText>ASdasdfasd asd sas swde qweas sa</NewsText><NewsLink href="/">link to the article</NewsLink></NewsItem>
                        
                      {news.map(item => {
                        return <NewsItem style={{ margin: "10px 0" }}>
                                <NewsItemHead>{item.source.name}</NewsItemHead>
                                <NewsText>{item.title}</NewsText>
                                <NewsLink href={item.url}>link to the article</NewsLink>
                              </NewsItem>
                        })}
                    </NewsList>
                </Container>
              </>
              )
            }
          </Media>
  )
}


export default NewsPage

        