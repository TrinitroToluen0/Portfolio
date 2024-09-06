import { useTranslation } from "react-i18next";
import "./Home.css";

export default function Home() {
    const { t } = useTranslation();
    return (
        <section id="home" className="home">
            <div className="home__inner">
                <div className="home__info">
                    <h1 className="home__title">{t("home.sectionTitle")}</h1>
                    <p className="home__subtitle">{t("home.subtitle")}</p>
                </div>
                <p className="home__details description" dangerouslySetInnerHTML={{ __html: t("home.description") }}>
                </p>
            </div>
        </section>
    );
}