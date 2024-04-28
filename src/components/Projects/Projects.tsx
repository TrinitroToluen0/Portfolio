import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard.tsx";
import ProjectsData from "./ProjectsData.ts";

export default function Projects() {
    return (
        <section id="projects" className="projects">
            <h2 className="projects__title">
                <span className="orange-text">My</span> projects
            </h2>
            <div className="projects__container">
                {ProjectsData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        image={project.image}
                        title={project.title}
                        techStack={project.techStack}
                        description={project.description}
                        achievements={project.achievements}
                        index={index}
                        repoUrl={project.repoUrl}
                        demoUrl={project.demoUrl}></ProjectCard>
                ))}
            </div>
        </section>
    );
}
