import * as icons from "../assets.ts";
import IconCard from "../components/IconCard/IconCard.tsx";
import Skill from "../components/Skills/SkillInterface.ts";
import { technologies, Technology } from "../utils/technologies.ts";

const skillsData: Skill[] = [
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
                {Object.keys(technologies).map((key) => {
                    const technology: Technology = technologies[key];
                    return <IconCard key={key} alt={technology.displayName} icon={technology.icon} />;
                })}
            </>
        ),
    },
];

export default skillsData;
