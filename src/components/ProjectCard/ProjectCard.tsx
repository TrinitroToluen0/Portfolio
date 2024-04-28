import "./ProjectCard.css";
import Project from "../Projects/ProjectInterface.ts";
import Tag from "../Tag/Tag.tsx";

export default function ProjectCard({ image, title, techStack, description, achievements, index }: Project & { index: number }) {
    return (
        <article className={`projectCard ${index % 2 === 0 ? "projectCard--even" : ""}`}>
            <img className="projectCard__image" src={image} alt={title} />
            <div className="projectCard__information">
                <h3 className="projectCard__title">{title}</h3>
                {techStack.length > 0 && (
                    <div className="projectCard__techStack">
                        {techStack.map((technology, index) => (
                            <Tag key={index} color={technology.backgroundColor} label={technology.displayName} icon={technology.icon} />
                        ))}
                    </div>
                )}
                <div className="techStack"></div>
                <p className="projectCard__description description">{description}</p>
                {achievements.length > 0 && (
                    <div className="projectCard__techStack">
                        <h4>My achievements with this project</h4>
                        <ul className="projectCard__achievementList">
                            {achievements.map((technology, index) => (
                                <li key={index} className="projectCard__achievement">
                                    {technology}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </article>
    );
}
