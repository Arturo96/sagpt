import React from "react";
import { useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { useFormArray } from "../../hooks/useFormArray";

export const AddBuy = () => {
	const products = useSelector(state => state.products);

	const [formValues, handleInputChange] = useForm({
			documento: "",
			nombres: "",
			apellidos: "",
			telefono: "",
			email: ""
		}),
		{ documento, nombres, apellidos, telefono, email } = formValues;

	const [productsBuy, addProduct, updateProducts] = useFormArray([
		{	
			id: new Date().getTime(),
			modelo: "Redmi Airdots",
			unidad: 1
		}
	]);

	const handleSubmit = e => {
		e.preventDefault();

		console.log(productsBuy);
	};

	return (
		<div>
			<h4>Registrar compra</h4>

			<form onSubmit={handleSubmit} className="buy">
				<label>
					Documento
					<input
						type="text"
						name="documento"
						onChange={handleInputChange}
						value={documento}
						className="txtDocumento"
					/>
				</label>
				<label>
					Nombres
					<input
						type="text"
						name="nombres"
						onChange={handleInputChange}
						value={nombres}
						className="txtNombres"
					/>
				</label>
				<label>
					Apellidos
					<input
						type="text"
						name="apellidos"
						onChange={handleInputChange}
						value={apellidos}
						className="txtApellidos"
					/>
				</label>
				<label>
					Teléfono
					<input
						type="tel"
						name="telefono"
						onChange={handleInputChange}
						value={telefono}
						className="txtTelefono"
					/>
				</label>
				<label>
					Email
					<input
						type="email"
						name="email"
						onChange={handleInputChange}
						value={email}
						className="txtEmail"
					/>
				</label>

				<div className="buy--products">
					{productsBuy.length > 0 &&
						productsBuy.map((productBuy) => (
							<div key={productBuy.id}>
								<label>
									Nombre del producto
									<select name="modelo" 
									data-id={productBuy.id}
									onChange={updateProducts}>
										{products.length > 0 &&
											products.map(product => (
												<option key={product.id} value={product.modelo}>
													{product.modelo}
												</option>
											))}
									</select>
								</label>
								<label>
									Unidades compradas
									<input
										name="unidad"
										data-id={productBuy.id}
										onChange={updateProducts}
										type="number"
										className="txtUnit"
										value={productBuy.unidad}
									/>
								</label>
							</div>
						))}
				</div>

				<div className="buy--actions">
					<button type="button" onClick={addProduct} className="btn btn--secondary">Agregar producto</button>
					<button type="submit" className="btn btn--cta">
						Ingresar compra
					</button>
				</div>
			</form>
		</div>
	);
};
