import React from "react";

export const Header = () => {
	return (
		<header className="header">
			<div className="header--wrapper">
				<div className="logo">
					<h2>
						<a href="#">SAGPT</a>
					</h2>
				</div>
				<nav className="menu--nav">
					<ul className="menu">
						<li className="menu--item">
							<a href="#" className="menu--link">
								Inicio
							</a>
						</li>
                        <li className="menu--item">
							<a href="#" className="menu--link">
								Quienes somos
							</a>
						</li>
                        <li className="menu--item">
							<a href="#" className="menu--link">
								Servicios
							</a>
						</li>
                        <li className="menu--item">
							<a href="#" className="menu--link">
								Contacto
							</a>
						</li>
					</ul>
                    
				</nav>
				<form action="" className="login" id="login">
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
