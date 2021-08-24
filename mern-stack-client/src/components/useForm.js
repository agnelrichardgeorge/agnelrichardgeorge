import React,{useEffect,useState} from 'react';

const useForm = (initialFieldValues) => {

    const [values,setValues] = useState(initialFieldValues)
    const [errors,setErrors] = useState({})

    const handleInputChange =e => {
        const {name,value}= e.target
        setValues({
            ...values,
            [name]:value
        })
    }
    return {
        values,
        setValues,
        handleInputChange,
        errors,
        setErrors,
    };
}
 
export default useForm;