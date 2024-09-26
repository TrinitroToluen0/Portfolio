import "./App.css";

// Main component imports
import Header from "./components/Header/Header.tsx";
import Home from "./components/Home/Home.tsx";
import Career from "./components/Career/Career.tsx";
import Skills from "./components/Skills/Skills.tsx";
import Projects from "./components/Projects/Projects.tsx";
import Contact from "./components/Contact/Contact.tsx";
import ScrollToTopButton from "./components/ScrollTop/ScrollTop.tsx";
import Footer from "./components/Footer/Footer.tsx";

// Functions imports
import { scrollToElement } from "./utils/scrollToElement.ts";

// Libraries imports
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Data imports
import careerData from "./data/careerData.ts";
import projectsData from "./data/projectsData.ts";
import skillsData from "./data/skillsData.tsx";

function App() {
    useEffect(scrollToElement, []);

    return (
        <>
            <ToastContainer stacked position="bottom-right" autoClose={4000} closeButton hideProgressBar newestOnTop={false} rtl={false} draggable theme="dark" />
            <Header />
            <Home />
            <Career careerData={careerData}></Career>
            <Projects projectsData={projectsData} />
            <Skills skillsData={skillsData} />
            <Contact />
            <Footer />
            <ScrollToTopButton />
        </>
    );
}

export default App;
