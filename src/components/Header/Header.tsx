import React from 'react';
import "./Header.css"

export default function Header () {
    return (
        <>
        <header className="header">
            <nav className="nav">
                <div className="logo">Mi Portafolio</div>
                <ul className="nav-links">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Proyectos</a></li>
                    <li><a href="#">Acerca de mí</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
        </header>
        </>
    );
}