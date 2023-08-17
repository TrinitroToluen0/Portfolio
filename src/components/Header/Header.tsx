import "./Header.css"

export default function Header () {
    return (
        <header className="header">
            <nav className="nav">
                <div className="logo">&lt;Javier Menco /&gt;</div>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">My skills</a></li>
                    {/* <li><a href="#">My career</a></li> */}
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}