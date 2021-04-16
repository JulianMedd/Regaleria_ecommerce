import React from "react";
import "./navbar.scss"
import CartWidget from "../CartWidget";

import {Link } from "react-router-dom";

export const NavBar = () => {
    return(
        <header className="cabecera">
            <Link to="/" className="cabecera__logo" >TODO AMOR</Link>

{/*             <ion-icon name="menu-outline" className="cabecera__toggle" id="nav-toggle"></ion-icon>
 */}
            <nav className="nav" id="nav-menu">

                <div className="nav__contenainer">
                
                    <div class="nav__content bd-grid">
{/*                         <ion-icon name="close-outline" className="nav__close" id="nav-close"></ion-icon>
 */}
                        <div className="nav__menu">
                            <ul className="nav__lista">
                                <li className="nav__item"><Link to="/" className="nav__link active">SOBRE NOSOTROS</Link></li>
                                <li className="nav__item"><Link href="#comoComprar" className="nav__link">COMO COMPRAR</Link></li>
                                <li className="nav__item"><Link to='/category/libreria' className="nav__link">LIBRERIA</Link></li>
                                <li className="nav__item"><Link to='/category/accesorios' className="nav__link">ACCESORIOS</Link></li>
                                <li className="nav__item"><Link to='/category/cocina' className="nav__link">COCINA</Link></li>
                            </ul>
                        </div>

                        <div className="nav__redes">
                            <a href="#" className="nav__redes--icono" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a>
                        </div>
                        
                    </div>

                </div>

            </nav>

            <CartWidget/>

        </header>
    )

}

export default NavBar;

/* FUNCIONALIDAD NAV */

/* const navMenu = document.getElementById("nav-menu"),
      toggleMenu = document.getElementById("nav-toggle"),
      closeMenu = document.getElementById("nav-close")

toggleMenu.addEventListener("click", ()=>{
    navMenu.classList.toggle("show")
} )

closeMenu.addEventListener("click", ()=>{
    navMenu.classList.remove("show")
} )

const navLink = document.querySelectorAll(".nav__link")

function linkAction(){
    navLink.forEach(n => n.classList.remove("active"))
    this.classList.add("active")

    navMenu.classList.remove("show")
}

navLink.forEach(n => n.addEventListener("click", linkAction))
 */