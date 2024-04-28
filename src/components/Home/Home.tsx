import "./Home.css";
import javierPhoto from "../../assets/javier.png";
import { useEffect, useState } from "react";

export default function Home() {
    const greetText = "Hi! i'm ";
    const nameText = "Javier Menco";
    const professionText = "Software Developer";

    const [greet, setGreet] = useState("");
    const [name, setName] = useState("");
    const [profession, setProfession] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [cursor, setCursor] = useState(true);
    const [cursorPosition, setCursorPosition] = useState("top");
    const [cursorBlink, setCursorBlink] = useState(false);

    useEffect(() => {
        const delay = 25;

        if (textIndex < greetText.length) {
            setTimeout(() => {
                setGreet(greet + greetText[textIndex]);
                setTextIndex(textIndex + 1);
            }, delay);
        } else if (textIndex < greetText.length + nameText.length) {
            setTimeout(() => {
                setName(name + nameText[textIndex - greetText.length]);
                setTextIndex(textIndex + 1);
            }, delay);
        } else if (textIndex < greetText.length + nameText.length + professionText.length) {
            setTimeout(() => {
                setProfession(profession + professionText[textIndex - greetText.length - nameText.length]);
                setTextIndex(textIndex + 1);
            }, delay);
        }
    }, [textIndex]);

    useEffect(() => {
        if (cursorBlink) {
            setInterval(() => {
                setCursor((prevCursor) => !prevCursor);
            }, 500);
        }
    }, [cursorBlink]);

    useEffect(() => {
        // Si ya se ha terminado de escribir el saludo y el nombre, el cursor pasará abajo.
        if (textIndex >= greetText.length + nameText.length) {
            setCursorPosition("bot");
        }

        // Si ya se ha terminado de escribir todo, el cursor empezará a parpadear.
        if (textIndex >= greetText.length + nameText.length + professionText.length) {
            setCursorBlink(true);
        }
    }, [textIndex]);

    return (
        <section id="home" className="home">
            <img className="home__photo" src={javierPhoto} alt="Javier Menco's Photo" />
            <div className="home__info">
                <p className="home__title">
                    {greet}
                    <span style={{ color: "var(--main-orange)" }}>{name}</span>
                    {cursor && cursorPosition === "top" && <span className="cursor">|</span>}
                </p>
                <span className="home__subtitle">
                    {profession}
                    {cursor && cursorPosition === "bot" && <span className="cursor">|</span>}
                </span>
            </div>
        </section>
    );
}
