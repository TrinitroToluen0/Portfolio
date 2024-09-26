import { useTranslation } from "react-i18next";
import CustomMarkdown from "../../utils/CustomMarkdown";
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
                <div className="home__details">
                    <CustomMarkdown>{t("home.description")}</CustomMarkdown>
                </div>
            </div>
        </section>
    );
}
