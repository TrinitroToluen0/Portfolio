import { Technology } from "../../utils/technologies";

export default interface Project {
    image: string;
    title: string;
    startDate: Date;
    endDate: Date;
    techStack: Technology[];
    description: string;
    repoUrl?: string;
    demoUrl?: string;
}
