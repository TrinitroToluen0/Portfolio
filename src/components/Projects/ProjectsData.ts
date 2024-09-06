import Project from "./ProjectInterface";
import * as assets from "../../assets.ts";

const ProjectsData: Project[] = [
    {
        image: assets.CiesePreview,
        title: "projects.ciese.title",
        description: "projects.ciese.description",
        repoUrl: "https://github.com/TrinitroToluen0/CIESE",
        techStack: [
            { displayName: "PHP", backgroundColor: "#8993be", icon: assets.phpIcon },
            { displayName: "HTML", backgroundColor: "#e44f26", icon: assets.htmlIcon },
            { displayName: "CSS", backgroundColor: "#1572b6", icon: assets.cssIcon },
            { displayName: "JavaScript", backgroundColor: "#f7df1e", icon: assets.javascriptIcon },
            { displayName: "MySQL", backgroundColor: "#5d87a1", icon: assets.mySqlIcon },
        ],
    },
    {
        image: assets.GrowyPreview,
        title: "projects.growy.title",
        description: "projects.growy.description",
        repoUrl: "https://github.com/TrinitroToluen0/GrowyBot",
        techStack: [
            { displayName: "JavaScript", backgroundColor: "#f7df1e", icon: assets.javascriptIcon },
            { displayName: "Discord.js", backgroundColor: "#5865f2", icon: assets.discordIcon },
            { displayName: "Node.js", backgroundColor: "#79b361", icon: assets.nodeIcon },
            { displayName: "MongoDB", backgroundColor: "#13aa52", icon: assets.mongoIcon },
            { displayName: "AWS", backgroundColor: "#ff9900", icon: assets.awsIcon },
        ],
    },
    {
        image: assets.ChatAppPreview,
        title: "projects.chatApp.title",
        description: "projects.chatApp.description",
        repoUrl: "https://github.com/TrinitroToluen0/ChatApp",
        techStack: [
            { displayName: "HTML", backgroundColor: "#e44f26", icon: assets.htmlIcon },
            { displayName: "CSS", backgroundColor: "#1572b6", icon: assets.cssIcon },
            { displayName: "JavaScript", backgroundColor: "#f7df1e", icon: assets.javascriptIcon },
            { displayName: "Node.js", backgroundColor: "#79b361", icon: assets.nodeIcon },
            { displayName: "MongoDB", backgroundColor: "#13aa52", icon: assets.mongoIcon },
            { displayName: "Express.js", backgroundColor: "#8c3cff", icon: assets.expressIcon },
        ],
    },
];

export default ProjectsData;
