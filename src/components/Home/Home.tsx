import "./Home.css";
import imagen from "../../assets/javier.png";
import { useEffect, useState } from "react";

export default function Home() {
    const initialTitle = "Hi! i'm ";
    const initialName = "Javier Menco";
    const initialSubtitle = "Software Developer";
    const writeSpeed = 50;
    const [title, setTitle] = useState("");
    const [name, setName] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [showCursorTitle, setShowCursorTitle] = useState(true);
    const [showCursorSubtitle, setShowCursorSubtitle] = useState(false);
    const [titleComplete, setTitleComplete] = useState(false);
    const [nameComplete, setNameComplete] = useState(false);

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex < initialTitle.length) {
                setTitle(initialTitle.substring(0, currentIndex + 1));
                currentIndex++;
            } else {
                clearInterval(interval);
                setTitleComplete(true);
            }
        }, writeSpeed);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        if (titleComplete) {
            let currentIndex = 0;
            const interval = setInterval(() => {
                if (currentIndex < initialName.length) {
                    setName(initialName.substring(0, currentIndex + 1));
                    currentIndex++;
                } else {
                    clearInterval(interval);
                    setShowCursorTitle(false);
                    setNameComplete(true);
                }
            }, writeSpeed);

            return () => {
                clearInterval(interval);
            };
        }
    }, [titleComplete]);

    useEffect(() => {
        if (nameComplete) {
            setShowCursorSubtitle(true);
            let currentIndex = 0;
            const interval = setInterval(() => {
                if (currentIndex < initialSubtitle.length) {
                    setSubtitle(initialSubtitle.substring(0, currentIndex + 1));
                    currentIndex++;
                } else {
                    clearInterval(interval);
                }
            }, writeSpeed);

            const cursorInterval = setInterval(() => {
                setShowCursorSubtitle((prevShowCursor) => !prevShowCursor);
            }, 500);

            return () => {
                clearInterval(interval);
                clearInterval(cursorInterval);
            };
        }
    }, [nameComplete]);

    return (
        <div className="home">
            <div className="home__inner">
                <img className="home__photo" src={imagen} alt="Javier Menco's Photo" />
                <div className="home__info">
                    <h1 className="home__title">
                        {title}
                        <span className="home__name">{name}</span>
                        {showCursorTitle && <span className="cursor">|</span>}
                    </h1>
                    <h2 className="home__subtitle">
                        {subtitle}
                        {showCursorSubtitle && <span className="cursor">|</span>}
                    </h2>
                </div>
            </div>
        </div>
    );
}