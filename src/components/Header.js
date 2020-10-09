import React from "react";
import PropTypes from "prop-types";

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
		console.log(elementos);
		if (matchMedia("(min-width: 1024px)").matches) {
			
			elementos.forEach(el => {
				if (el.classList.contains("show")) {
					el.classList.remove("show");
				}
			});
		}
	});
};

export const Header = ({ test }) => {
	return (
		<header className="header">
			<div className="header--wrapper">
				<div className="logo">
					<h2>
						<a href="./">SAGPT </a>
					</h2>
					<span id="menuToggle" onClick={() => toggleMenu()} className="menu--toggle">
						<i className="fas fa-bars"></i>
					</span>
				</div>
				<nav className="menu--nav animate__animated animate__fadeInDown" data-display>
					<ul className="menu">
						<li className="menu--item">
							<a href="./" className="menu--link">
								Inicio
							</a>
						</li>
						<li className="menu--item">
							<a href="./" className="menu--link">
								Quienes somos
							</a>
						</li>
						<li className="menu--item">
							<a href="./" className="menu--link">
								Servicios
							</a>
						</li>
						<li className="menu--item">
							<a href="./" className="menu--link">
								Contacto
							</a>
						</li>
					</ul>
				</nav>
				<form
					action=""
					className="login animate__animated animate__fadeInDown"
					id="login"
					data-display
				>
					<div className="form-group">
						<input type="email" placeholder="Email" />
						<input type="password" placeholder="Password" />
					</div>

					<button type="submit">Sign in</button>
				</form>
			</div>
		</header>
	);
};

Header.propTypes = {
	test: PropTypes.string.isRequired
};

Header.defaultProps = {
	test2: "Test"
};
