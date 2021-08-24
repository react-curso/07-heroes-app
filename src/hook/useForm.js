import { useState } from "react"

export const useForm = (initialState = {}) => {

    const [valueForm, setValueForm] = useState(initialState);

    const reset = () => {
        setValueForm(initialState)
    };

    const handleInputChange = ({target}) => {
        
        setValueForm({
            ...valueForm,
            [target.name]: target.value
        })
    };

    return {
        valueForm,
        handleInputChange,
        reset
    }


}
