import "./ProjectCard.css";
import Project from "../Projects/ProjectInterface.ts";
import Tag from "../Tag/Tag.tsx";

export default function ProjectCard({ image, title, techStack, description, repoUrl, demoUrl }: Project) {
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
                        See repository
                    </a>
                    {demoUrl && (
                        <a className="projectCard__button button link-button" href={demoUrl} target="_blank">
                            Live demo
                        </a>
                    )}
                </div>
            </div>
            <img className="projectCard__image" src={image} alt={title} />
        </article>
    );
}