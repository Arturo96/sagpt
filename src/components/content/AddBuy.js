import React from "react";

export const AddBuy = () => {
	return (
		<div>
			<h4>Registrar compra</h4>

			<form className="buy">
				<label>
					Documento
					<input type="text" className="txtDocumento" />
				</label>
				<label>
					Nombres
					<input type="text" className="txtNombres" />
				</label>
				<label>
					Apellidos
					<input type="text" className="txtApellidos" />
				</label>
				<label>
					Teléfono
					<input type="tel" className="txtTelefono" />
				</label>
				<label>
					Dirección
					<input type="text" className="txtDireccion" />
				</label>
				<label>
					Email
					<input type="text" className="txtEmail" />
				</label>

				<div className="buy--products">
					<label>
						Nombre del producto
						<select>
							<option value="Iphone 12">Iphone 12</option>
							<option value="S20">Samsung Galaxy S20 FE</option>
							<option value="Oneplus 8T">Oneplus 8T</option>
						</select>
					</label>
					<label>Unidades compradas
						<input type="number" name="" id="" />
					</label>
				</div>
			</form>
		</div>
	);
};
