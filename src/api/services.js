import axios from 'axios';


const instance = axios.create({
    baseURL: "https://api.monobank.ua/bank/currency",
    _limit: 3,
});

export const getMonoCurrency = async () => {
    const { data } = await instance.get();
    return data
};


export const getPrivatCurrency = async () => {
    const data = await instance.get("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11");
    console.log(data)
    return data
};
