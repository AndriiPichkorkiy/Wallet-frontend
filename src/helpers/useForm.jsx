import { useState } from 'react';

const useForm = ({ initialState, onSubmit }) => {
    const [state, setState] = useState({ ...initialState });

    const handleChange = ({ target }) => {
        const { name, value } = target;
        const newValue = value;
        setState(prevState => ({
            ...prevState,
            [name]: newValue
        }))
    }

    const handleSubmit = (data) => {
        // delete data.confirmPassword;
        const { name, email, password } = data;
        console.log(data)
        onSubmit({ name, email, password});
        setState({ ...initialState })
    }

    return { state, setState, handleChange, handleSubmit }
}

export default useForm;