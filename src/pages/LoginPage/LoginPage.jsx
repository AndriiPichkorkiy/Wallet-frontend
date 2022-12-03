import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
// import { useSelector} from 'react-redux'
import { useLoginMutation } from '../../services/authApi'
import { isAuth } from '../../redux/auth/userSlice'
import { newToken } from '../../redux/auth/tokenSlice'

const LoginPage = () => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [login, { isLoading }] = useLoginMutation()

  console.log(isLoading)

  // const token = useSelector(state => state.token)
  // const user = useSelector(state => state.user)

  // console.log(token)
  // console.log(user)

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value)
      case 'password':
        return setPassword(value)
      default:
        return
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const res = await login({ email, password }).unwrap()
    dispatch(isAuth(res.user))
    dispatch(newToken(res.token))
    setEmail('')
    setPassword('')
  }

  return (
    <>
      <h1>Login Form</h1>
      <div>
        <form onSubmit={handleSubmit} autoComplete='off'>
          <input
            label='E-mail'
            placeholder='ironMan3000@gmail.com'
            variant='standard'
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            required
          />

          <input
            label='Password'
            placeholder='qwerty123'
            variant='standard'
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
          />
          <button type='submit'>Login</button>
        </form>
      </div>
    </>
  )
}

export default LoginPage
