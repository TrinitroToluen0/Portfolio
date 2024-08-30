import Project from "./ProjectInterface";
import * as icons from "../../assets/icons.ts";

const ProjectsData: Project[] = [
    {
        image: "src/assets/ciese-1.webp",
        title: "🌐 CIESE",
        description: `
        Website designed to manage the <b>attendance</b> of speakers and attendees at an <a class='hyperlink' href='https://ciese.co' target='_blank' rel='nofollow'>international educational event</a>.<br><br> 
        I made this project for the university where I studied and graduated as a web developer. They needed a more convenient and reliable way to <span class='highlighted'>track attendees</span> to their event, and attendees a <span class='highlighted'>faster way to register and pay</span>, since they previously did it manually. <span class='highlighted'>I Implemented a payment gateway</span>, a table with FIFO sorting algorithm with all the registered users and a view with detailed statistics to improve the process efficiency.`,
        repoUrl: "https://github.com/TrinitroToluen0/CIESE",
        techStack: [
            { displayName: "PHP", backgroundColor: "#8993be", icon: icons.phpIcon },
            { displayName: "HTML", backgroundColor: "#e44f26", icon: icons.htmlIcon },
            { displayName: "CSS", backgroundColor: "#1572b6", icon: icons.cssIcon },
            { displayName: "JavaScript", backgroundColor: "#f7df1e", icon: icons.javascriptIcon },
            { displayName: "MySQL", backgroundColor: "#5d87a1", icon: icons.mySqlIcon },
        ],
    },
    {
        image: "src/assets/Growy-1.webp",
        title: "🤖 Growy Discord bot",
        description: `<a class='hyperlink' href='https://top.gg/bot/1195233538115637308' target='_blank' rel='nofollow'>Growy</a> is a <b>Discord bot</b> for tracking invitations and <b>growing</b> Discord communities. Featuring a <b>referral system</b> with economy, interchat, bump reminder and more.<br><br>
            This was a large project that marked a stage in my career, it was the first application that I developed from scratch that reached deployment, which helped me learn about <span class='highlighted'>CI/CD</span>, <span class='highlighted'>IAAS</span>, <span class='highlighted'>SSH</span>, etc. I designed the bot <span class='highlighted'>modularly</span>, which made it easier to mantain, scale, and also to use.
            `,
        repoUrl: "https://github.com/TrinitroToluen0/GrowyBot",
        techStack: [
            { displayName: "JavaScript", backgroundColor: "#f7df1e", icon: icons.javascriptIcon },
            { displayName: "Discord.js", backgroundColor: "#5865f2", icon: icons.discordIcon },
            { displayName: "Node.js", backgroundColor: "#79b361", icon: icons.nodeIcon },
            { displayName: "MongoDB", backgroundColor: "#13aa52", icon: icons.mongoIcon },
            { displayName: "AWS", backgroundColor: "#ff9900", icon: icons.awsIcon },
        ],
    },
    {
        image: "src/assets/ChatApp-1.webp",
        title: "💬 ChatApp",
        description:
            "Real time chat application made with <span class='highlighted'>Socket.io</span>, supports channels (groups) and profile pictures. <br><br> I started this project when I was in the second semester of university with the goal of practicing what I learned at university and <span class='highlighted'>learning something new</span>. With very little knowledge of frontend development, I managed to develop a large part of the application. I learned a lot about <span class='highlighted'>sockets</span> and the multiple uses they have, and I developed the entire frontend <span class='highlighted'>without frameworks</span>.",
        repoUrl: "https://github.com/TrinitroToluen0/ChatApp",
        techStack: [
            { displayName: "HTML", backgroundColor: "#e44f26", icon: icons.htmlIcon },
            { displayName: "CSS", backgroundColor: "#1572b6", icon: icons.cssIcon },
            { displayName: "JavaScript", backgroundColor: "#f7df1e", icon: icons.javascriptIcon },
            { displayName: "Node.js", backgroundColor: "#79b361", icon: icons.nodeIcon },
            { displayName: "MongoDB", backgroundColor: "#13aa52", icon: icons.mongoIcon },
            { displayName: "Express.js", backgroundColor: "#8c3cff", icon: icons.expressIcon },
        ],
    },
];

export default ProjectsData;
