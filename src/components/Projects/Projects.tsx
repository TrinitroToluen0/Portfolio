import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard.tsx";
import ProjectCardData from "./projectsData.ts";

export default function Projects() {
    return (
        <section id="projects" className="projects">
                <h2 className="projects__title"><span className="orange-text">My </span>projects</h2>
                <div className="projects__container">
                    {ProjectCardData.map((project, index) => (
                        <ProjectCard key={index} image={project.image} title={project.title} description={project.description} url={project.url}></ProjectCard>
                    ))}
                </div>
        </section>
    );
}