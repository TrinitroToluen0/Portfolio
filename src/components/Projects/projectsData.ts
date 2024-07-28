import Project from "./ProjectInterface";

const ProjectsData: Project[] = [
    {
        image: "https://previews.123rf.com/images/patterndesign/patterndesign1706/patterndesign170601028/80050485-resumen-de-fondo-de-imagen-16-9-relaci%C3%B3n-de-aspecto-en-el-estilo-de-arte-de-p%C3%ADxeles.jpg",
        title: "CIESE (International Congress)",
        description: "Website to manage the attendance of speakers and attendees at an international educational event.",
        achievements: [
            "This was my first zero to deploy web project.",
            "I learned the MVC model to design sustainable web projects.",
            "I designed a system to assure persistance across all the views of the website.",
            "I mastered PHP.",
        ],
        repoUrl: "https://github.com/TrinitroToluen0/CIESE",
        demoUrl: "https://ciese.000webhostapp.com/login",
        techStack: [
            { displayName: "PHP", backgroundColor: "#8993be", icon: "src/assets/php.svg" },
            { displayName: "Node.js", backgroundColor: "#79b361", icon: "src/assets/node.svg" },
            { displayName: "MongoDB", backgroundColor: "#13aa52", icon: "src/assets/mongodb.svg" },
        ],
    },
    {
        image: "https://previews.123rf.com/images/patterndesign/patterndesign1706/patterndesign170601028/80050485-resumen-de-fondo-de-imagen-16-9-relaci%C3%B3n-de-aspecto-en-el-estilo-de-arte-de-p%C3%ADxeles.jpg",
        title: "🤖 Growy Discord bot",
        description: "Discord bot for tracking invitations and growing Discord communities. Featuring a referral system with economy, interchat, bump reminder and more.",
        achievements: [
            "I learned how to persist cron jobs even if the process stops or restarts.",
            "I automatized the process of deploying to production with GitHub Actions (CI/CD).",
            "I deepened my knowledge about the cloud using AWS as a hosting service.",
            "I learned how to use PM2 to start processes on boot and automatically resurrect them if they stop working.",
        ],
        repoUrl: "https://github.com/TrinitroToluen0/GrowyBot",
        techStack: [
            { displayName: "Discord.js", backgroundColor: "#5865f2", icon: "src/assets/discord.svg" },
            { displayName: "Node.js", backgroundColor: "#79b361", icon: "src/assets/node.svg" },
            { displayName: "MongoDB", backgroundColor: "#13aa52", icon: "src/assets/mongodb.svg" },
        ],
    },
];

export default ProjectsData;
