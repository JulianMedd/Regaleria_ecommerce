import React from "react";
import "./navbar.scss"
import CartWidget from "../CartWidget";

export const NavBar = () => {
    return(
        <header className="cabecera">
            <a href="#" className="cabecera__logo" target="_blank">TODO AMOR</a>

            <ion-icon name="menu-outline" className="cabecera__toggle" id="nav-toggle"></ion-icon>

            <nav className="nav" id="nav-menu">

                <div className="nav__contenainer">
                
                    <div class="nav__content bd-grid">
                        <ion-icon name="close-outline" className="nav__close" id="nav-close"></ion-icon>

                        <div className="nav__menu">
                            <ul className="nav__lista">
                                <li className="nav__item"><a href="#sobreNosotros" className="nav__link active">SOBRE NOSOTROS</a></li>
                                <li className="nav__item"><a href="#comoComprar" className="nav__link">COMO COMPRAR</a></li>
                                <li className="nav__item"><a href="#libreria" className="nav__link">LIBRERIA</a></li>
                                <li className="nav__item"><a href="#accesorios" className="nav__link">ACCESORIOS</a></li>
                                <li className="nav__item"><a href="#cocina" className="nav__link">COCINA</a></li>
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