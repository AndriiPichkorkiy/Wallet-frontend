import React from 'react'
import Media from 'react-media'
import { Navigate } from 'react-router-dom'
import { useGetNewsQuery } from '../../services/newsApi'
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
    const { data: dataNews } = useGetNewsQuery()


    return (
        <Media queries={{ small: '(max-width: 767px)' }}>
            {matches =>
                matches.small ? (
                    <Navigate to='/currency' />
                ) : (
                    <>
                        <Container>
                            <NewsHeader>News about currency</NewsHeader>
                            <NewsList>
                                {dataNews?.map(item => {
                                    return (
                                        <NewsItem key={item.uuid} style={{ margin: '10px 0' }}>
                                            <NewsItemHead>
                                                {item.title}
                                            </NewsItemHead>
                                            <NewsText>{item.description}</NewsText>
                                            <NewsLink target='_blank' href={item.url}>
                                                Link to the article
                                            </NewsLink>
                                        </NewsItem>
                                    )
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