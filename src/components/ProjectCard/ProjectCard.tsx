import "./ProjectCard.css";

interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    url: string;
}

export default function ProjectCard({ image, title, description, url}: ProjectCardProps) {
    return (
        <a className="projectCard" href={url} target="_blank">
            <img className="projectCard__image" src={image} alt={title}/>
            <h3 className="projectCard__title">{title}</h3>
            <p className="projectCard__description description">{description}</p>
        </a>
    );
}