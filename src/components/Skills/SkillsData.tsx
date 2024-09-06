import * as icons from "../../assets.ts";
import IconCard from "../IconCard/IconCard.tsx";
import Skill from "./SkillInterface.ts";

const SkillsData: Skill[] = [
    {
        image: icons.codeIcon,
        title: "skills.scalability.title",
        description: "skills.scalability.description",
    },
    {
        image: icons.teamworkIcon,
        title: "skills.teamwork.title",
        description: "skills.teamwork.description",
    },
    {
        image: icons.learningIcon,
        title: "skills.autodidact.title",
        description: "skills.autodidact.description",
    },
    {
        title: "skills.hardSkills.title",
        description: "skills.hardSkills.description",
        children: (
            <>
                <IconCard icon={icons.htmlIcon} alt="HTML5" />
                <IconCard icon={icons.cssIcon} alt="CSS3" />
                <IconCard icon={icons.javascriptIcon} alt="JavaScript" />
                <IconCard icon={icons.mongoIcon} alt="MongoDB" />
                <IconCard icon={icons.expressIcon} alt="Express.js" />
                <IconCard icon={icons.reactIcon} alt="React" />
                <IconCard icon={icons.nodeIcon} alt="Node.js" />
                <IconCard icon={icons.phpIcon} alt="PHP" />
                <IconCard icon={icons.mySqlIcon} alt="MySQL" />
                <IconCard icon={icons.discordIcon} alt="Discord.js" />
                <IconCard icon={icons.viteIcon} alt="Vite" />
                <IconCard icon={icons.tsIcon} alt="TypeScript" />
                <IconCard icon={icons.githubIcon} alt="GitHub" />
                <IconCard icon={icons.markdownIcon} alt="MarkDown" />
                <IconCard icon={icons.awsIcon} alt="Amazon Web Services"></IconCard>
                <IconCard icon={icons.gitIcon} alt="Git"></IconCard>
                <IconCard icon={icons.npmIcon} alt="NPM"></IconCard>
                <IconCard icon={icons.azureIcon} alt="Microsoft Azure"></IconCard>
                <IconCard icon={icons.composerIcon} alt="Composer"></IconCard>
            </>
        ),
    },
];

export default SkillsData;
