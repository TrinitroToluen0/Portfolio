import { Technology } from "../../interfaces/Technology";

export default interface Project {
    image: string;
    title: string;
    techStack: Technology[];
    description: string;
    achievements: string[];
    repoUrl?: string;
    demoUrl?: string;
}
