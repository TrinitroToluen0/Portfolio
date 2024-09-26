import { useTranslation } from "react-i18next";
import "./Career.css";
import { Experience } from "./ExperienceInterface";
import { i18n } from "../../i18n";
import { formatDuration } from "../../utils/dateUtils.ts";

type CareerProps = {
    careerData: Experience[];
};

export default function Career({ careerData }: CareerProps) {
    const { t } = useTranslation();

    return (
        <section id="career" className="career">
            <h2 className="career__title">
                {t("career.sectionTitle")}
                <span className="section-separator"></span>
            </h2>
            <ul className="career__list">
                {careerData.map((experience: Experience, index: number) => {
                    const { title, company, startDate, endDate, description } = experience;
                    const formattedDuration = formatDuration(startDate, endDate, t);
                    return (
                        <li key={index} className="career__experience-item">
                            <h3 className="career__experience-title">
                                {t(title)} {t("words.at").toLowerCase()} {t(company)}
                            </h3>
                            <p className="career__experience-date">
                                <time dateTime={startDate.toISOString()}>{startDate.toLocaleDateString(i18n.language, { year: "numeric", month: "long" })}</time> -{" "}
                                <time dateTime={endDate.toISOString()}>{endDate.toLocaleDateString(i18n.language, { year: "numeric", month: "long" })}</time>
                                {formattedDuration !== "" ? ` (${formattedDuration})` : ""}
                            </p>
                            <p className="career__experience-description">{t(description)}</p>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
