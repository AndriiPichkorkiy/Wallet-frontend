import React, { useEffect, useState } from 'react'
import Media from 'react-media'
import { Navigate } from 'react-router-dom'
import { getNews } from '../../services/newsApi'
import {
    Container,
    NewsHeader,
    NewsItem,
    NewsItemHead,
    NewsLink,
    NewsList,
    NewsText
} from './NewsComponents'

const NewsPage = () => {
    // eslint-disable-next-line no-unused-vars
    const [news, setNews] = useState([])

    useEffect(() => {
        const asyncF = async () => {
            const { data } = await getNews()
            console.log(data)
            setNews(data)
        }
        asyncF()
    }, [])

    return (
        <Media queries={{ small: '(max-width: 767px)' }}>
            {matches =>
                matches.small ? (
                    <Navigate to='/currency' />
                ) : (
                    <>
                        <Container>
                            {/* <NewsHeader>News about currency</NewsHeader> */}
                            <NewsHeader>News</NewsHeader>
                            <NewsList>
                                {/* <NewsItem>
                  <NewsItemHead>QWWeeeee</NewsItemHead>
                  <NewsText>ASdasdfasd asd sas swde qweas sa</NewsText>
                  <NewsLink href='/'>link to the article</NewsLink>
                </NewsItem>
                <NewsItem>
                  <NewsItemHead>QWWeeeee</NewsItemHead>
                  <NewsText>ASdasdfasd asd sas swde qweas sa</NewsText>
                  <NewsLink href='/'>link to the article</NewsLink>
                </NewsItem> */}

                                {news.map(item => {
                                    return (
                                        <NewsItem style={{ margin: '10px 0' }} key={item.uuid}>
                                            <NewsItemHead>
                                                {new Date(item.published_at).toLocaleDateString()}
                                                <img src={item.image_url} width={100} height={100} alt="new's img" />
                                            </NewsItemHead>
                                            <NewsText>{item.title}</NewsText>
                                            <NewsLink target='_blank' href={item.url}>
                                                Link to the article
                                            </NewsLink>
                                        </NewsItem>
                                    )
                                })}
                                {/* {news.map(item => {
                                    return (
                                        <NewsItem style={{ margin: '10px 0' }}>
                                            <NewsItemHead>
                                                {new Date(item.publishedAt).toLocaleDateString()}
                                            </NewsItemHead>
                                            <NewsText>{item.title}</NewsText>
                                            <NewsLink target='_blank' href={item.url}>
                                                Link to the article
                                            </NewsLink>
                                        </NewsItem>
                                    )
                                })} */}
                            </NewsList>
                        </Container>
                    </>
                )
            }
        </Media>
    )
}

export default NewsPage
