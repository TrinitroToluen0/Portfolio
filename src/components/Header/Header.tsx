import { useState, useEffect } from "react";
import "./Header.css";

export default function Header() {
    const [activeLink, setActiveLink] = useState("home");

    const handleScroll = () => {
        const sections = ["home", "skills", "projects"];
        const offset = window.innerHeight / 2;

        for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top <= offset && rect.bottom >= offset) {
                    setActiveLink(section);
                    break;
                }
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="header">
            <nav className="nav">
                <div className="logo">&lt;Javier Menco /&gt;</div>
                <ul className="nav-links">
                    <li><a href="#home" className={activeLink === "home" ? "active" : ""}>Home</a></li>
                    {/* <li><a href="#projects" className={activeLink === "career" ? "active" : ""}>My career</a></li> */}
                    <li><a href="#skills" className={activeLink === "skills" ? "active" : ""}>My skills</a></li>
                    <li><a href="#projects" className={activeLink === "projects" ? "active" : ""}>Projects</a></li>
                    <li><a href="#contact" className={activeLink === "contact" ? "active" : ""}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}