import "./ProjectCard.css";

interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    url: string;
}

export default function ProjectCard({ image, title, description, url}: ProjectCardProps) {
    return (
        <div className="projectCard">
            <img className="projectCard__image" src={image} />
            <h3 className="projectCard__title"><a className="projectCard__url" href={url} target="_blank">{title}</a></h3>
            <p className="projectCard__description description">{description}</p>
        </div>
    );
}