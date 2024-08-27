import "./Home.css";

export default function Home() {
    return (
        <section id="home" className="home">
            <div className="home__inner">
                <div className="home__info">
                    <p className="home__title">Javier Menco's Portfolio</p>
                    <p className="home__subtitle">Software Developer</p>
                </div>
                <p className="home__details description">
                    Specialized in <span className="highlighted">backend development</span>, with <span className="highlighted">+3 years of programming experience</span> and a
                    solid understanding of frontend technologies. I have developed a strong foundation in creating efficient and scalable web applications, with{" "}
                    <b>expertise in server-side technologies, databases, and RESTful API design</b>.
                </p>
            </div>
        </section>
    );
}
