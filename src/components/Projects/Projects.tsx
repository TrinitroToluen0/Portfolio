import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard.tsx";
import ProjectsData from "./ProjectsData";
import Project from "./ProjectInterface.ts";

export default function Projects() {
    return (
        <section id="projects" className="projects">
            <h2 className="projects__title">
                My projects
                <span className="section-separator"></span>
            </h2>
            <div className="projects__container">
                {ProjectsData.map((project: Project, index: number) => (
                    <ProjectCard
                        key={index}
                        image={project.image}
                        title={project.title}
                        techStack={project.techStack}
                        description={project.description}
                        repoUrl={project.repoUrl}
                        demoUrl={project.demoUrl}></ProjectCard>
                ))}
            </div>
        </section>
    );
}
