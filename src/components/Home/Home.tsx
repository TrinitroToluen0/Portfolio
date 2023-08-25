import "./Home.css";
import imagen from "../../assets/javier.png";

export default function Home() {
    return (
        <section id="home" className="home">
            <img className="home__photo" src={imagen} alt="Javier Menco's Photo" />
            <div className="home__info">
                <h1 className="home__title">Hi! i'm <span style={{color: "#f39c12"}}>Javier Menco</span></h1>
                <span className="home__subtitle">Software Developer</span>
            </div>
        </section>
    );
}