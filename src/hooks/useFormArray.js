import { useState } from "react";

export const useFormArray = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

	const addProduct = () => {
		setValues([
			...values,
			{
				id: new Date().getTime(),
				modelo: "Redmi Airdots",
				unidad: 1
			}
		])
	}

	const updateProducts = ({ target }) => {
		
		const productID = Number(target.dataset.id);
		
		setValues(values.map(p => 
			p.id === productID ? 
			{...p, [target.name]: target.value }
			: p))
    };
    
    return [values, addProduct, updateProducts];
}