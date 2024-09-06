import "./ProjectCard.css";
import Project from "../Projects/ProjectInterface.ts";
import Tag from "../Tag/Tag.tsx";
import { useTranslation } from "react-i18next";

export default function ProjectCard({ image, title, techStack, description, repoUrl, demoUrl }: Project) {
    const {t} = useTranslation();
    return (
        <article className="projectCard card">
            <div className="projectCard__information">
                <h3 className="projectCard__title">{title}</h3>
                {techStack.length > 0 && (
                    <div className="projectCard__techStack">
                        {techStack.map((technology, index) => (
                            <Tag key={index} color={technology.backgroundColor} label={technology.displayName} icon={technology.icon} />
                        ))}
                    </div>
                )}
                <p className="projectCard__description description" dangerouslySetInnerHTML={{ __html: Array.isArray(description) ? description.join(" ") : description }}></p>
                <div className="projectCard__buttons">
                    <a className="projectCard__button button link-button" href={repoUrl} target="_blank">
                        {t("projects.repositoryButtonLabel")}
                    </a>
                    {demoUrl && (
                        <a className="projectCard__button button link-button" href={demoUrl} target="_blank">
                            {t("projects.demoButtonLabel")}
                        </a>
                    )}
                </div>
            </div>
            <div className="projectCard__image-container">
                <img className="projectCard__image" src={image} alt={title} />
            </div>
        </article>
    );
}