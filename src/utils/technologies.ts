import * as assets from "../assets";

export interface Technology {
    displayName: string;
    color: string;
    icon: string;
}

export const technologies: Record<string, Technology> = {
    php: { displayName: "PHP", color: "#8993be", icon: assets.phpIcon },
    html: { displayName: "HTML", color: "#e44f26", icon: assets.htmlIcon },
    css: { displayName: "CSS", color: "#1572b6", icon: assets.cssIcon },
    javascript: { displayName: "JavaScript", color: "#f7df1e", icon: assets.javascriptIcon },
    mysql: { displayName: "MySQL", color: "#5d87a1", icon: assets.mySqlIcon },
    discord: { displayName: "Discord.js", color: "#5865f2", icon: assets.discordIcon },
    node: { displayName: "Node.js", color: "#79b361", icon: assets.nodeIcon },
    mongodb: { displayName: "MongoDB", color: "#13aa52", icon: assets.mongoIcon },
    aws: { displayName: "AWS", color: "#ff9900", icon: assets.awsIcon },
    express: { displayName: "Express.js", color: "#8c3cff", icon: assets.expressIcon },
    react: { displayName: "React", color: "#00d8ff", icon: assets.reactIcon },
    vite: { displayName: "Vite", color: "#9b60fe", icon: assets.viteIcon },
    typescript: { displayName: "TypeScript", color: "#3178c6", icon: assets.tsIcon },
    github: { displayName: "GitHub", color: "#211F1F", icon: assets.githubIcon },
    markdown: { displayName: "MarkDown", color: "#98ccfd", icon: assets.markdownIcon },
    git: { displayName: "Git", color: "#de4c36", icon: assets.gitIcon },
    npm: { displayName: "NPM", color: "#cb3837", icon: assets.npmIcon },
    azure: { displayName: "Microsoft Azure", color: "#0456a0", icon: assets.azureIcon },
    composer: { displayName: "Composer", color: "#885630", icon: assets.composerIcon },
};
