import "./App.css";
import Header from "./components/Header/Header.tsx";
import Home from "./components/Home/Home.tsx";
import Skills from "./components/Skills/Skills.tsx";
import Projects from "./components/Projects/Projects.tsx";
import Contact from "./components/Contact/Contact.tsx";
import ScrollToTopButton from "./components/ScrollTop/ScrollTop.tsx";
import Footer from "./components/Footer/Footer.tsx";
import { scrollToElement } from "./functions/scrollToElement";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    useEffect(scrollToElement, []);

    return (
        <>
            <ToastContainer stacked position="bottom-right" autoClose={4000} closeButton hideProgressBar newestOnTop={false} rtl={false} draggable theme="dark" />
            <Header />
            <Home />
            <Projects />
            <Skills />
            <Contact />
            <Footer/>
            <ScrollToTopButton/>
        </>
    );
}

export default App;
