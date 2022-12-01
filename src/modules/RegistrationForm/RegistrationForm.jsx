import React from 'react';
import PropTypes from 'prop-types';
// import {Container, Header,FormContainer, LabelContainer, UserInput, StyledBtn } from './RegisterForm.styled';
import useForm from '../../helpers/useForm';
import { Formik, Field, Form } from 'formik';
const RegistrationForm = ({ onSubmit }) => {
    const initialState = {
        name: '',
        email: '',
        password:''
    }
    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit})
    const { name, email, password } = state;
        return (
            <Formik
                initialValues={{
                name: '',
                email: '',
                password: '',
            }}>
                <div className=''>
                    <div className="logo">
                        <span>
                            <svg>
                                <use href='../../assets/images/icons/wallet30x30.svg'></use>
                            </svg>
                        </span>
                        <p className=''>Wallet</p>

                    </div>
                    
                <FormContainer onSubmit={handleSubmit}>
                    <LabelContainer >
                        Name
                        <UserInput
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            value={name}
                            onChange={handleChange} />
                    </LabelContainer>
                    <LabelContainer >
                        Email
                        <UserInput
                            type="email"
                            name="email"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                            title="Enter your email Please!"
                            required
                            value={email}
                            onChange={handleChange} />
                        </LabelContainer>

                    <LabelContainer >
                        Password
                        <UserInput
                            type="password"
                            name="password"
                            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                            title="Minimum eight characters, at least one letter and one number"
                            required
                            value={password}
                            onChange={handleChange} />
                        </LabelContainer>
                        <StyledBtn type='submit'>Register</StyledBtn>
                        </FormContainer>
                    </div>
                </Formik>
        )
}
    
    RegistrationForm.propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };
export default RegistrationForm;

  <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="Jane" />

        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Doe" />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>