/* eslint-disable no-useless-escape */
import * as Yup from 'yup'

// регулярка A, потребує спец символ:
// /^(?=.*[0-9])(?=.*[a-zA-Z])(?=\S+$).{6,16}$/

// регулярка B, не обов'язково писати спец символ:
// /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/

// object settings:
const schemaTemplate = {
  name: Yup.string()
    .min(1, 'Too Short!')
    .max(12, 'Too Long!')
    .required('Please enter a name')
    .strict()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Must be only letters'
    ),

  email: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .email('Invalid email')
    .strict()
    .trim()

    .matches(
      /^[^-][a-zA-Z0-9.!#$%&'*+=?^_`{|}~-][^-]{0,}\@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}$/,
      'invalid email'
    )
    .required('Please enter an email'),

  password: Yup.string()
    .min(6, 'Too Short!')
    .max(12, 'Too Long!')
    // .lowercase('Only lowercase letters are allowed')
    .strict()
    .trim()
    // .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    .matches(
      /^(?=.*[0-9])(?=.*[a-zA-Z])(?=\S+$).{6,16}$/,
      'Minimum six characters, one latin letters, one number and one special character'
    )
    .required('Please enter a password'),

  confirmPassword: Yup.string()
    .min(6, 'Too Short!')
    .max(12, 'Too Long!')
    .required('Please confirm your password')
    // .lowercase('Only lowercase letters are allowed')
    .strict()
    .trim()
    .oneOf([Yup.ref('password'), null], 'Password must match')
    // .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    .matches(
      /^(?=.*[0-9])(?=.*[a-zA-Z])(?=\S+$).{6,16}$/,
      'Minimum six characters, one lowercase letter, one number and one special character'
    )
}

export const SignUpSchema = Yup.object().shape({
  name: schemaTemplate.name,
  email: schemaTemplate.email,
  password: schemaTemplate.password,
  confirmPassword: schemaTemplate.confirmPassword
})

export const SignInSchema = Yup.object().shape({
  email: schemaTemplate.email,
  password: schemaTemplate.password
})
