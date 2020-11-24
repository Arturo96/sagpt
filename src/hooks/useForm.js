import { useState } from "react"

export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const [errores, setErrores] = useState({
		documento: false,
		nombres: false,
		apellidos: false,
		telefono: false,
		email: false
	});

    const reset = () => {
        setValues(initialState);
    }

    const formEmpty = () => {
        const {documento, nombres, apellidos, telefono, email} = values;

        if(documento.length === 0) return true;
        if(nombres.length === 0) return true;
        if(apellidos.length === 0) return true;
        if(telefono.length === 0) return true;
        if(email.length === 0) return true;

        return false;
    }

    const validarForm = () => {
        const {documento, nombres, apellidos, telefono, email} = errores;

        if(documento) return false;
        if(nombres) return false;
        if(apellidos) return false;
        if(telefono) return false;
        if(email) return false;

        return true;
    }

    const handleInputChange = ({target}) => {

        let bandera = true;

        if(target.value === '') {
            setErrores({
                ...errores,
                [target.name]: true
            })
        } else {

            if(target.name === 'documento' || target.name === 'telefono') {
                
                const regExp = /^\d+$/;

                if(!regExp.test(target.value)) return;

                if(target.name === 'documento' && (target.value.length < 8 || target.value.length > 11)) bandera = false;

                if(target.name === 'telefono' && (target.value.length < 7 || target.value.length > 10)) bandera = false;
            } 

            if(target.name === 'nombres' || target.name === 'apellidos') {
                
                const regExp = /^[a-zA-ZÁÄÉËÍÏÓÖÚÜáäéëíïóöúü\s]+$/i;

                if(!regExp.test(target.value)) return;

            } 

            if(target.name === 'email') {
                const regExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

                if(!regExp.test(target.value)) bandera = false;
            }

            if(bandera) setErrores({
                ...errores,
                [target.name]: false
            }) 
            else setErrores({
                ...errores,
                [target.name]: true
            })
            
        }

        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    return [
        values,
        handleInputChange,
        errores,
        validarForm,
        formEmpty,
        reset,
    ]

}