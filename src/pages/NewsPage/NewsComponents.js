import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 46px 20px 0 20px;
  flex-direction: column;
`

export const NewsList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;

  /* align-items: center; */
`

export const NewsHeader = styled.h2`
  margin-bottom: 20px;
  align-self: center;
  justify-self: center;
  font-weight: 600;
  font-size: 25px;
`

export const NewsItem = styled.li`
  font-family: Circe;
  display: flex;
  flex-direction: column;
  /* padding-left: 35px; */
  /* border: 0.5px gray solid; */
  border-bottom: 1px solid #e7e5f2;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.05),
    0px 5px 5px rgba(0, 0, 0, 0.3);
  padding: 0px 20px;
  /* border-radius: 40px; */
  /* :not(:last-child) { */
  /* margin-bottom: 8px; */
  /* border-bottom: 0; */
  /* } */
`
export const NewsItemHead = styled.h3`
  padding-top: 10px;
  padding-left: 50px;
  padding-bottom: 10px;
`

export const NewsText = styled.p`
  padding-left: 10px;
  font-size: 18px;
`

export const NewsLink = styled.a`
  color: var(--paleActiveColor);
  text-decoration: underline;
  padding-left: 10px;
  padding-bottom: 5px;
  :hover {
    color: var(--activeColor);
  }
  align-self: end;
`
