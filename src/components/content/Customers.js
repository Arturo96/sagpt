import React from "react";
import { useSelector } from "react-redux";

export const Customers = () => {
	const customers = useSelector(state => state.customers);
    
	return (
		<div>
			<h4>Listado de clientes</h4>

			<table className="customers">
				<thead>
					<tr>
						<th>Documento</th>
						<th>Apellidos</th>
						<th>Nombres</th>
						<th>Telefono</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{customers.length > 0 && customers.map(customer => 
						<tr key={customer.id}>
							<td>{customer.documento}</td>
							<td>{customer.apellidos}</td>
							<td>{customer.nombres}</td>
							<td>{customer.telefono}</td>
							<td>{customer.email}</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};
