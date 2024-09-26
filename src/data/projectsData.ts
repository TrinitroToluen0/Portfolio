import * as assets from "../assets";
import Project from "../components/Projects/ProjectInterface";
import { technologies } from "../utils/technologies";

const projectsData: Project[] = [
    {
        image: assets.CiesePreview,
        title: "projects.ciese.title",
        description: "projects.ciese.description",
        demoUrl: "https://ciese.co",
        startDate: new Date(2023, 7, 31),
        endDate: new Date(2024, 9, 1),
        techStack: [technologies.php, technologies.html, technologies.css, technologies.javascript, technologies.mysql],
    },
    {
        image: assets.GrowyPreview,
        title: "projects.growy.title",
        description: "projects.growy.description",
        repoUrl: "https://github.com/TrinitroToluen0/GrowyBot",
        startDate: new Date(2024, 0, 14),
        endDate: new Date(2024, 3, 21),
        techStack: [technologies.javascript, technologies.discord, technologies.node, technologies.mongodb, technologies.aws],
    },
    {
        image: assets.ChatAppPreview,
        title: "projects.chatApp.title",
        description: "projects.chatApp.description",
        repoUrl: "https://github.com/TrinitroToluen0/ChatApp",
        startDate: new Date(2023, 3, 21),
        endDate: new Date(2023, 5, 10),
        techStack: [technologies.html, technologies.css, technologies.javascript, technologies.node, technologies.mongodb, technologies.express],
    },
];

export default projectsData;
