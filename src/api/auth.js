import axios from 'axios';

export const instance = axios.create({
    baseURL:'https://connections-api.herokuapp.com/'
})
const token = {
    set: token => {
        instance.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset: () => {
        instance.defaults.headers.common.Authorization = '';
    }
}
export const signup = async(data) => {
    const result  = await instance.post('/users/signup', data);
    token.set(result.data.token);
    return result.data;
}

export const signin = async(data) => {
    const  result = await instance.post('/users/login', data);
    token.set(result.data.token);
    return result.data;
}

export const logout = async() => {
    const  result  = await instance.post('/users/logout');
    token.unset();
    return result.data;
}

export const getCurrent = async (authToken) => {
    try {
        token.set(authToken);
        const result = await instance.get('users/current');
        return result.data;
    }
    catch (error) {
        token.unset();
        throw error;
    }
}