import { useState, useEffect } from "react";
import "./ScrollTop.css";

export default () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <span onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={`scrollTop material-icons ${isVisible ? "visible" : ""}`}>
            arrow_upward
        </span>
    );
};
