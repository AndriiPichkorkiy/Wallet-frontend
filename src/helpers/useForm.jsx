import { useState } from 'react';

const useForm = ({ initialState, onSubmit }) => {
    const [state, setState] = useState({ ...initialState });

    const handleChange = ({ target }) => {
        const { name, value } = target;
        const newValue = value;
        setState(prevState => ({
            ...prevState,
            [name]:newValue
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ ...state });
        setState({ ...initialState })
        console.log(state)
    }

    return {state, setState, handleChange, handleSubmit}
}

export default useForm;