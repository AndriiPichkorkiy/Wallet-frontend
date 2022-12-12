import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://wallet-project-m5us.onrender.com'
})
const token = {
  set: token => {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`
  },
  unset: () => {
    instance.defaults.headers.common.Authorization = ''
  }
}

export const verifyEmailToken = async verifyCode => {
  try {
    const result = await instance.post('/api/user/verify/' + verifyCode)
    token.set(result.token)
    return result.data
  } catch (error) {
    console.error(error)
    return error
  }
}
