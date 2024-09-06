import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard.tsx";
import ProjectsData from "./ProjectsData.ts";
import Project from "./ProjectInterface.ts";
import { useTranslation } from "react-i18next";

export default function Projects() {
    const {t} = useTranslation();
    return (
        <section id="projects" className="projects">
            <h2 className="projects__title">
                {t("projects.sectionTitle")}
                <span className="section-separator"></span>
            </h2>
            <div className="projects__container">
                {ProjectsData.map((project: Project, index: number) => (
                    <ProjectCard
                        key={index}
                        image={project.image}
                        title={t(project.title)}
                        techStack={project.techStack}
                        description={t(project.description)}
                        repoUrl={project.repoUrl}
                        demoUrl={project.demoUrl}></ProjectCard>
                ))}
            </div>
        </section>
    );
}