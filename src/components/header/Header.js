import React from 'react';

export const Header = () => {
    return (
        <header className="header">
            <div className="header--wrapper">
                <div className="logo">
                    <h2><a href="#">SAGPT</a></h2>
                </div>
                <nav className="menu--nav">
                    <ul className="menu">
                        <li className="menu--item">
                            <a href="#" className="menu--link">Consultar Productos</a>
                        </li>
                    </ul>
                </nav>
                <form action="" className="login" id="login">
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Sign in</button>
                </form>
            </div>
        </header>
    )
}
