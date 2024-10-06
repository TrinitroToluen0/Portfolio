import "./ProjectCard.css";
import Project from "./ProjectInterface.ts";
import Tag from "../Tag/Tag.tsx";
import { useTranslation } from "react-i18next";
import CustomMarkdown from "../../utils/CustomMarkdown.tsx";
import { Technology } from "../../utils/technologies.ts";
import { i18n } from "../../i18n.ts";
import { formatDuration } from "../../utils/dateUtils.ts";
import Button from "../Button/Button.tsx";

export default function ProjectCard({ image, title, startDate, endDate, techStack, description, repoUrl, demoUrl }: Project) {
    const { t } = useTranslation();
    const formattedDuration = formatDuration(startDate, endDate, t);

    return (
        <article className="projectCard card">
            <div className="projectCard__information">
                <h3 className="projectCard__title">{t(title)}</h3>
                <div className="projectCard__date">
                    <time dateTime={startDate.toISOString()}>{startDate.toLocaleDateString(i18n.language, { year: "numeric", month: "long" })}</time> -{" "}
                    <time dateTime={endDate.toISOString()}>{endDate.toLocaleDateString(i18n.language, { year: "numeric", month: "long" })}</time>
                    {formattedDuration !== "" ? ` (${formattedDuration})` : ""}
                </div>
                {techStack.length > 0 && (
                    <div className="projectCard__techStack">
                        {techStack.map((technology: Technology, index) => (
                            <Tag key={index} color={technology.color} label={technology.displayName} icon={technology.icon} />
                        ))}
                    </div>
                )}
                <div className="projectCard__description">
                    <CustomMarkdown>{t(description)}</CustomMarkdown>
                </div>
                <div className="projectCard__buttons">
                    {repoUrl && <Button variant="link" label={t("projects.repositoryButtonLabel")} url={repoUrl}></Button>}
                    {demoUrl && <Button variant="link" label={t("projects.demoButtonLabel")} url={demoUrl}></Button>}
                </div>
            </div>
            <img className="projectCard__image" src={image} alt={title} />
        </article>
    );
}
