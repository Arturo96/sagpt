import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Login } from "./auth/Login";
import { Logout } from "./auth/Logout";

const d = document;

let elementos = d.querySelectorAll("[data-display]");

const toggleMenu = () => {
	elementos = d.querySelectorAll("[data-display]");
	elementos.forEach(el => {
		el.classList.toggle("show");
	});
};

export const loadHeader = () => {
	window.addEventListener("resize", e => {
		elementos = d.querySelectorAll("[data-display]");
		if (matchMedia("(min-width: 1024px)").matches) {
			elementos.forEach(el => {
				if (el.classList.contains("show")) {
					el.classList.remove("show");
				}
			});
		}
	});
};

export const Header = () => {
	const { uid } = useSelector(state => state.auth);

	return (
		<header className="header">
			<div className="header--wrapper">
				<div className="logo">
					<h2>
						<Link to="/">SAGPT</Link>
					</h2>
					<span id="menuToggle" onClick={() => toggleMenu()} className="menu--toggle">
						<i className="fas fa-bars"></i>
					</span>
				</div>
				<nav className="menu--nav animate__animated animate__fadeInDown" data-display>
					<ul className="menu">
						<li className="menu--item">
							<Link to="/" className="menu--link">
								Inicio
							</Link>
						</li>
						<li className="menu--item">
							<Link to="/about" className="menu--link">
								Quienes somos
							</Link>
						</li>
						<li className="menu--item">
							<Link to="/products" className="menu--link">
								Productos
							</Link>
						</li>
						<li className="menu--item">
							<Link to="/contact" className="menu--link">
								Contacto
							</Link>
						</li>
						{!!uid && (
							<>
								<li className="menu--item">
									<Link to="/customers" className="menu--link">
										Clientes
									</Link>
								</li>
								<li className="menu--item">
									<Link to="/purchases" className="menu--link">
										Compras
									</Link>
								</li>
							</>
						)}
					</ul>
				</nav>

				{!!uid ? <Logout /> : <Login />}
			</div>
		</header>
	);
};
