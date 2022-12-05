import React from 'react'
import { useState } from 'react'
import { useSignUpMutation } from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { isAuth } from '../../redux/auth/userSlice'

// import RegistrationForm from "";

// {
//   "name": "Valeriy Zalushnyi",
//   "email": "rusnipeaceda@ukr.net",
//   "password": "slavaukraini23"
// }

const RegistrationPage = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signUp, { isLoading }] = useSignUpMutation()
  console.log('isLoading', isLoading)
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value)
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
    const res = await signUp({ name, email, password }).unwrap()
    // console.log(res)
    dispatch(isAuth(res))
    setName('')
    setEmail('')
    setPassword('')
  }
  return (
    <>
      <h1>RegistrationForm</h1>
      <div>
        <form onSubmit={handleSubmit} autoComplete='off'>
          <input
            label='Name'
            placeholder='Nick Fury'
            variant='standard'
            type='text'
            name='name'
            value={name}
            onChange={handleChange}
            required
          />
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
          <button type='submit'>Sign up</button>
        </form>
      </div>
      {/* <RegistrationForm/> */}
    </>
  )
}

export default RegistrationPage
