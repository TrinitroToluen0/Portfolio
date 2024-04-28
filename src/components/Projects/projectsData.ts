import Project from "./ProjectInterface";

const ProjectsData: Project[] = [
    {
        image: "https://previews.123rf.com/images/patterndesign/patterndesign1706/patterndesign170601028/80050485-resumen-de-fondo-de-imagen-16-9-relaci%C3%B3n-de-aspecto-en-el-estilo-de-arte-de-p%C3%ADxeles.jpg",
        title: "🤖 Discord bot",
        description: "Discord bot for tracking invitations and growing Discord communities. Featuring a referral system with economy, interchat, bump reminder and more.",
        achievements: [
            "With my previous experience with OOP, i had no problems when reading the official documentation provided by Discord.js",
            "I learned how to persist cron jobs even if the process stops or restarts.",
            "I automatized the process of deploying to production with GitHub Actions.",
            "I deepened my knowledge about the cloud using AWS as a hosting service.",
            "I learned how to use PM2 to start processes on boot and automatically resurrect them if they stop working.",
        ],
        techStack: [{ displayName: "Discord.js", backgroundColor: "#999", icon: "src/assets/discord.svg" }],
    },
];

export default ProjectsData;
