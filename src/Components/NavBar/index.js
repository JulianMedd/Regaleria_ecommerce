import React from "react";
import "./navbar.scss";
import CartWidget from "../CartWidget";

import {Link } from "react-router-dom";

export const NavBar = () => {
    return(
        <header className="cabecera">
            <div className="nav__container">

                <Link to="/" className="cabecera__logo" >TODO AMOR</Link>

                <nav className="nav" id="nav-menu">

                    <div className="nav__menu">
                        <ul className="nav__lista">
                            <li className="nav__item"><Link to='/category/libreria' className="nav__link">LIBRERIA</Link></li>
                            <li className="nav__item"><Link to='/category/accesorios' className="nav__link">ACCESORIOS</Link></li>
                            <li className="nav__item"><Link to='/category/cocina' className="nav__link">COCINA</Link></li>
                        </ul>
                    </div>

                </nav>

                <Link to='/cart'><CartWidget/></Link>

            </div>
        </header>
    )

}

export default NavBar;