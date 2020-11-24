import React from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { addBuyDB } from "../../helpers/addBuy";
import { useForm } from "../../hooks/useForm";
import { useFormArray } from "../../hooks/useFormArray";

export const AddBuy = () => {
	const products = useSelector(state => state.products);

	const [formValues, handleInputChange, errores, validarForm, formEmpty] = useForm({
			documento: "",
			nombres: "",
			apellidos: "",
			telefono: "",
			email: ""
		}),
		{ documento, nombres, apellidos, telefono, email } = formValues;

	const [productsBuy, addProduct, updateProducts, deleteProducts] = useFormArray([
		{
			id: new Date().getTime(),
			modelo: "Redmi Airdots",
			unidad: 1
		}
	]);

	const handleSubmit = e => {
		e.preventDefault();

		if(!validarForm()) {
			Swal.fire('Error', 'Completa los campos correctamente.', 'error')
			return;
		} 

		if(formEmpty()) {
			Swal.fire('Error', 'Completa los campos solicitados.', 'error');
			return;
		} 

		const buy = {
			...formValues,
			productos: productsBuy
		}

		addBuyDB(buy);

	};

	return (
		<div>
			<h4>Registrar compra</h4>

			<form onSubmit={handleSubmit} className="buy">
				<label>
					Documento <b>(*)</b>
					<input
						type="text"
						name="documento"
						onChange={handleInputChange}
						value={documento}
						className="txtDocumento"
						// autoComplete="off"
						required
					/>
				</label>
				{errores.documento && <div className="error">El documento no es válido.</div>}

				<label>
					Nombres <b>(*)</b>
					<input
						type="text"
						name="nombres"
						onChange={handleInputChange}
						value={nombres}
						className="txtNombres"
						// autoComplete="off"
						required
					/>
				</label>
				{errores.nombres && <div className="error">Los nombres son requeridos.</div>}

				<label>
					Apellidos <b>(*)</b>
					<input
						type="text"
						name="apellidos"
						onChange={handleInputChange}
						value={apellidos}
						className="txtApellidos"
						// autoComplete="off"
						required
					/>
				</label>
				{errores.apellidos && <div className="error">Los apellidos son requeridos.</div>}

				<label>
					Teléfono <b>(*)</b>
					<input
						type="tel"
						name="telefono"
						onChange={handleInputChange}
						value={telefono}
						className="txtTelefono"
						// autoComplete="off"
						required
					/>
				</label>
				{errores.telefono && <div className="error">El teléfono no es válido.</div>}

				<label>
					Email <b>(*)</b>
					<input
						type="email"
						name="email"
						onChange={handleInputChange}
						value={email}
						className="txtEmail"
						// autoComplete="off"
						required
					/>
				</label>
				{errores.email && <div className="error">El email no es válido.</div>}

				<div className="buy--products">
					{productsBuy.length > 0 &&
						productsBuy.map((productBuy, i) => (
							<div key={productBuy.id} className="buy--product">
								<div className="buy--product-body">
									<label>
										Nombre del producto
										<select name="modelo" data-id={productBuy.id} onChange={updateProducts}>
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
											min="1"
											max="5"
											data-id={productBuy.id}
											onChange={updateProducts}
											type="number"
											className="txtUnit"
											value={productBuy.unidad}
										/>
									</label>
								</div>
								{i > 0 && (
									<button
										onClick={deleteProducts}
										data-id={productBuy.id}
										className="btn btn--danger"
									>
										Borrar producto
									</button>
								)}
							</div>
						))}
				</div>

				<div className="buy--actions">
					<button type="button" onClick={addProduct} className="btn btn--secondary">
						Agregar producto
					</button>
					<button type="submit" className="btn btn--cta">
						Ingresar compra
					</button>
				</div>
			</form>
		</div>
	);
};
