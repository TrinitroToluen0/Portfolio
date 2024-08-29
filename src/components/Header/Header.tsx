import { useState, useEffect, useRef } from "react";
import "./Header.css";

const ROUTES = {
    HOME: "home",
    CAREER: "career",
    SKILLS: "skills",
    PROJECTS: "projects",
    CONTACT: "contact",
};

export default function Header() {
    const [activeLink, setActiveLink] = useState(ROUTES.HOME);
    const [menuOpen, setMenuOpen] = useState(false);
    const navLinksRef = useRef<HTMLUListElement | null>(null);
    const menuButtonRef = useRef<HTMLButtonElement | null>(null);

    const handleScroll = () => {
        const sections = document.querySelectorAll("section");
        const offset = window.innerHeight / 2;

        for (const section of sections) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= offset && rect.bottom >= offset) {
                setActiveLink(section.id);
                break;
            }
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleOutsideClick = (event: MouseEvent) => {
        if (navLinksRef.current && !navLinksRef.current.contains(event.target as Node) && menuButtonRef.current && !menuButtonRef.current.contains(event.target as Node)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        document.addEventListener("click", handleOutsideClick);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    return (
        <header className="header">
            <nav className="nav">
                <h1 className="logo">Javier Menco</h1>
                <button ref={menuButtonRef} className="header__menu-button" onClick={toggleMenu} aria-label="Menu">
                    <span className="material-icons">{menuOpen ? "close" : "menu"}</span>
                </button>
                <ul className={`nav-links ${menuOpen ? "open" : ""}`} ref={navLinksRef}>
                    <li>
                        <a onClick={() => setMenuOpen(false)} href={`#${ROUTES.HOME}`} className={activeLink === ROUTES.HOME ? "active" : ""}>
                            Home
                        </a>
                    </li>
                    {/* <li><a onClick={() => setMenuOpen(false)} href={`#${ROUTES.CAREER}`} className={activeLink === ROUTES.CAREER ? "active" : ""}>My career</a></li> */}
                    <li>
                        <a onClick={() => setMenuOpen(false)} href={`#${ROUTES.PROJECTS}`} className={activeLink === ROUTES.PROJECTS ? "active" : ""}>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a onClick={() => setMenuOpen(false)} href={`#${ROUTES.SKILLS}`} className={activeLink === ROUTES.SKILLS ? "active" : ""}>
                            My skills
                        </a>
                    </li>
                    <li>
                        <a onClick={() => setMenuOpen(false)} href={`#${ROUTES.CONTACT}`} className={activeLink === ROUTES.CONTACT ? "active" : ""}>
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
