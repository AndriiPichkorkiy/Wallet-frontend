import axios from "axios";

const nApiKey = "e748f76230c94212b77dc5789416846e"
// const api = `https://newsapi.org/v2/everything?q=economic&apiKey=${nApiKey}`
axios.defaults.baseURL = 'https://newsapi.org/v2/';

export async function getNews(query) {
    const news = axios({
        method: "get",
        url: `everything?q=${query}&apiKey=${nApiKey}`,
    })
    return news
}

