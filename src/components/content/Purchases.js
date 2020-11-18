import React from "react";
import {Link} from 'react-router-dom';

export const Purchases = () => {
	return (
		<div>
			<h4>Listado de compras</h4>
			
			<Link to="/addBuy" className="addBuy btn btn--primary">Registrar Compra</Link>

			<table className="purchases">
				<thead>
					<tr>
						<th>ID</th>
						<th>Documento del cliente</th>
						<th>Usuario responsable</th>
						<th>Acción</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>1152457641</td>
						<td>admin@gmail.com</td>
						<td>
							<button>Editar</button>
						</td>
					</tr>
					<tr>
						<td>2</td>
						<td>1152457641</td>
						<td>admin@gmail.com</td>
						<td>
							<button>Editar</button>
						</td>
					</tr>
					<tr>
						<td>3</td>
						<td>1152457641</td>
						<td>admin@gmail.com</td>
						<td>
							<button>Editar</button>
						</td>
					</tr>
					<tr>
						<td>4</td>
						<td>1152457641</td>
						<td>admin@gmail.com</td>
						<td>
							<button>Editar</button>
						</td>
					</tr>
					<tr>
						<td>5</td>
						<td>1152457641</td>
						<td>admin@gmail.com</td>
						<td>
							<button>Editar</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
