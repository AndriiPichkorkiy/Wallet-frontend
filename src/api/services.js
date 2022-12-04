import axios from 'axios';


const instance = axios.create({
    baseURL: "https://api.monobank.ua/bank/currency",
    _limit: 3,
});

export const getCurrency = async () => {
    const { data } = await instance.get();
    console.log(data)
    return data
};
