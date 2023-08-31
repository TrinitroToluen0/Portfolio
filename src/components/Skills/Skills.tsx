import "./Skills.css";
import SkillCard from "../SkillCard/SkillCard.tsx";
import IconCard from "../IconCard/IconCard.tsx";
import * as icons from '../../assets/icons.ts'

export default function Skills() {
    const skillCardData = [
        {
            image: icons.codeIcon,
            title: "Scalable and Robust Code",
            description: "Possessing a strong foundation in writing code capable of handling increasing demands and complexities while maintaining high performance. Prioritizing coding practices that emphasize scalability and robustness, ensuring software that can adapt and withstand various challenges.",
        },
        {
            image: icons.teamworkIcon,
            title: "Teamwork",
            description: "Excelling in collaborative environments and contributing effectively to achieve common goals. Communicating openly, sharing ideas, and actively participating in team discussions to foster a positive and productive team dynamic.",
        },
        {
            image: icons.learningIcon,
            title: "Rapid and Continuous Learning",
            description: "Demonstrating a remarkable ability to rapidly grasp and consistently acquire new knowledge and skills. Adapting swiftly to any internal technology within an organization, enabling seamless integration and valuable contributions.",
        },
        {
            title: "Hard skills",
            description: "These are my technical skills",
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