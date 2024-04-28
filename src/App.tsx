import "./App.css";
import Header from "./components/Header/Header.tsx";
import Home from "./components/Home/Home.tsx";
import Skills from "./components/Skills/Skills.tsx";
import Projects from "./components/Projects/Projects.tsx";
import Contact from "./components/Contact/Contact.tsx";
import { scrollToElement } from "./functions/scrollToElement";
import { useEffect } from "react";

function App() {
    useEffect(scrollToElement, []);
    return (
        <>
            <Header />
            <Home />
            <Skills />
            <Projects />
            <Contact />
        </>
    );
}

export default App;
