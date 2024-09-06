import { useState, useEffect, useRef } from "react";
import "./Header.css";
import { useTranslation } from "react-i18next";
import { i18n, languageNames } from "../../i18n.ts";

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
    const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
    const navLinksRef = useRef<HTMLUListElement | null>(null);
    const menuButtonRef = useRef<HTMLButtonElement | null>(null);
    const languageMenuRef = useRef<HTMLUListElement | null>(null);
    const { t } = useTranslation();

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

    const handleOutsideClick = (event: MouseEvent) => {
        if (navLinksRef.current && !navLinksRef.current.contains(event.target as Node) && menuButtonRef.current && !menuButtonRef.current.contains(event.target as Node)) {
            setMenuOpen(false);
        }
        if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
            setLanguageMenuOpen(false);
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        if (languageMenuOpen) setLanguageMenuOpen(false);
    };

    const toggleLanguageMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        setLanguageMenuOpen((prev) => !prev);
    };

    const handleChangeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("language", lng);
        setLanguageMenuOpen(false);
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
                <button ref={menuButtonRef} className="header__menu-button" onClick={toggleMenu} aria-label="Menu">
                    <span translate="no" className="material-icons">{menuOpen ? "close" : "menu"}</span>
                </button>
                <ul className={`nav-links ${menuOpen ? "open" : ""}`} ref={navLinksRef}>
                    <li>
                        <a onClick={() => setMenuOpen(false)} href={`#${ROUTES.HOME}`} className={activeLink === ROUTES.HOME ? "active" : ""}>
                            {t("header.home")}
                        </a>
                    </li>
                    <li>
                        <a onClick={() => setMenuOpen(false)} href={`#${ROUTES.PROJECTS}`} className={activeLink === ROUTES.PROJECTS ? "active" : ""}>
                            {t("header.projects")}
                        </a>
                    </li>
                    <li>
                        <a onClick={() => setMenuOpen(false)} href={`#${ROUTES.SKILLS}`} className={activeLink === ROUTES.SKILLS ? "active" : ""}>
                            {t("header.skills")}
                        </a>
                    </li>
                    <li>
                        <a onClick={() => setMenuOpen(false)} href={`#${ROUTES.CONTACT}`} className={activeLink === ROUTES.CONTACT ? "active" : ""}>
                            {t("header.contact")}
                        </a>
                    </li>
                </ul>
                <div className="language-dropdown">
                    <button onClick={(event) => toggleLanguageMenu(event)}>
                        <span translate="no" className="material-icons">
                            translate
                        </span>
                        <p>{languageNames[i18n.language]}</p>
                        <span translate="no" className="material-icons">
                            arrow_drop_down
                        </span>
                    </button>

                    <ul className={languageMenuOpen ? "open" : ""} ref={languageMenuRef}>
                        {Object.keys(languageNames).map((lng) => (
                            <li key={lng} onClick={() => handleChangeLanguage(lng)}>
                                <span className="material-icons check-icon" translate="no">
                                    {i18n.language === lng ? "check" : "radio_button_unchecked"}
                                </span>
                                {languageNames[lng]}
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
}
