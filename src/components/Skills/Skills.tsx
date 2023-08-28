import "./Skills.css";
import SkillCard from "../SkillCard/SkillCard.tsx";
import IconCard from "../IconCard/IconCard.tsx";
import htmlIcon from "../../assets/html.svg";
import cssIcon from "../../assets/css.svg";
import javascriptIcon from "../../assets/javascript.svg";
import mongoIcon from "../../assets/mongodb.svg";
import expressIcon from "../../assets/express.svg";
import reactIcon from "../../assets/react.svg";
import nodeIcon from "../../assets/node.svg";
import phpIcon from "../../assets/php.svg";
import mySqlIcon from "../../assets/mysql.svg";
import discordIcon from "../../assets/discord.svg";
import viteIcon from "../../assets/vite.svg";
import tsIcon from "../../assets/ts.svg";
import githubIcon from "../../assets/github.svg";
import markdownIcon from "../../assets/markdown.svg";
import codeIcon from "../../assets/code.svg";
import teamworkIcon from "../../assets/teamwork.svg";
import learningIcon from "../../assets/learning.svg";

export default function Skills() {
    const skillCardData = [
        {
            image: codeIcon,
            title: "Scalable and Robust Code",
            description: "Possessing a strong foundation in writing code capable of handling increasing demands and complexities while maintaining high performance. Prioritizing coding practices that emphasize scalability and robustness, ensuring software that can adapt and withstand various challenges.",
        },
        {
            image: teamworkIcon,
            title: "Teamwork",
            description: "Excelling in collaborative environments and contributing effectively to achieve common goals. Communicating openly, sharing ideas, and actively participating in team discussions to foster a positive and productive team dynamic.",
        },
        {
            image: learningIcon,
            title: "Rapid and Continuous Learning",
            description: "Demonstrating a remarkable ability to rapidly grasp and consistently acquire new knowledge and skills. Adapting swiftly to any internal technology within an organization, enabling seamless integration and valuable contributions.",
        },
        {
            title: "Hard skills",
            description: "These are my technical skills",
            children: (
                <>
                    <IconCard icon={htmlIcon} alt="HTML5" />
                    <IconCard icon={cssIcon} alt="CSS3" />
                    <IconCard icon={javascriptIcon} alt="JavaScript" />
                    <IconCard icon={mongoIcon} alt="MongoDB" />
                    <IconCard icon={expressIcon} alt="Express.js" />
                    <IconCard icon={reactIcon} alt="React" />
                    <IconCard icon={nodeIcon} alt="Node.js" />
                    <IconCard icon={phpIcon} alt="PHP" />
                    <IconCard icon={mySqlIcon} alt="MySQL" />
                    <IconCard icon={discordIcon} alt="Discord.js" />
                    <IconCard icon={viteIcon} alt="Vite" />
                    <IconCard icon={tsIcon} alt="TypeScript" />
                    <IconCard icon={githubIcon} alt="GitHub" />
                    <IconCard icon={markdownIcon} alt="MarkDown" />
                </>
            ),
        },
    ];

    return (
        <section id="skills" className="skills">
            <h2 className="skills__title">My skills</h2>
            <div className="skills__container">
                {skillCardData.map((skill, index) => (
                    <SkillCard key={index} image={skill.image} title={skill.title} description={skill.description}>
                        {skill.children}
                    </SkillCard>
                ))}
            </div>
        </section>
    );
}