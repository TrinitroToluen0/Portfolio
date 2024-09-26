import "./Projects.css";
import ProjectCard from "./ProjectCard.tsx";
import Project from "./ProjectInterface.ts";
import { useTranslation } from "react-i18next";

interface ProjectsProps {
    projectsData: Project[];
}

export default function Projects({ projectsData }: ProjectsProps) {
    const { t } = useTranslation();
    return (
        <section id="projects" className="projects">
            <h2 className="projects__title">
                {t("projects.sectionTitle")}
                <span className="section-separator"></span>
            </h2>
            <div className="projects__container">
                {projectsData.map((project: Project, index: number) => (
                    <ProjectCard
                        key={index}
                        image={project.image}
                        title={project.title}
                        startDate={project.startDate}
                        endDate={project.endDate}
                        techStack={project.techStack}
                        description={project.description}
                        repoUrl={project.repoUrl}
                        demoUrl={project.demoUrl}
                    />
                ))}
            </div>
        </section>
    );
}
