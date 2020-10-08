import React from "react";
import "./App.scss";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

function App() {
	return (
		<>
			<Header />
			<main className="content">
				<article className="home">
					<h1>Bienvenido a SAGPT!</h1>
					<h2>SAGPT es un sistema de administración del proceso de garantías para los productos de las tiendas tecnológicas.</h2>
					<p>SAGPT permite facilitarle tanto al comprador del producto, como el administrador de la tienda tecnológica, la gestión de las garantías de los productos tecnológicos adquiridos o vendidos, donde al momento de que el comprador adquiera un producto, el administrador pueda almacenar en la aplicación web la información del comprador y la información del producto que el comprador adquirió con su garantía asociada. Además, se le envía al correo de dicho comprador una factura virtual con todos los detalles del producto adquirido y toda la información de su garantía, y poder consultarla también aquí.</p>
				</article>
			</main>
			<Footer />
		</>
	);
}

export default App;
