import "./Header.css"

export default function Header () {
    return (
        <>
            <header className="header">
                <nav className="nav">
                    <div className="logo">&lt;Javier Menco /&gt;</div>
                    <ul className="nav-links">
                        <li><a href="Currículum de Javier Menco.pdf" download>Mi Currículum</a></li>
                        <li><a href="#">Sobre mí</a></li>
                        <li><a href="#">Mi carrera</a></li>
                        <li><a href="#">Proyectos</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}