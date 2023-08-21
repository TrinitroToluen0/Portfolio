import "./Skills.css";
import SkillCard from "../SkillCard/SkillCard.tsx";
import IconCard from "../IconCard/IconCard.tsx";

export default function Skills() {
    const skillCardData = [
        {
            image: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
            title: "Teamwork",
            description: "Excelling in collaborative environments and contributing effectively to achieve common goals. Communicating openly, sharing ideas, and actively participating in team discussions to foster a positive and productive team dynamic.",
        },
        {
            image: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
            title: "Scalable and Robust Code",
            description: "Possessing a strong foundation in writing code capable of handling increasing demands and complexities while maintaining high performance. Prioritizing coding practices that emphasize scalability and robustness, ensuring software that can adapt and withstand various challenges.",
        },
        {
            image: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
            title: "Rapid and Continuous Learning",
            description: "Demonstrating a remarkable ability to rapidly grasp and consistently acquire new knowledge and skills. Adapting swiftly to any internal technology within an organization, enabling seamless integration and valuable contributions.",
        },
        {
            title: "Hard skills",
            description: "These are my technical skills", 
            children: (
                <>
                    <IconCard icon="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="HTML5" />
                    <IconCard icon="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="CSS3" />
                    <IconCard icon="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="JavaScript" />
                    <IconCard icon="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="MongoDB" />
                    <IconCard icon="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Express.js" />
                    <IconCard icon="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="React" />
                    <IconCard icon="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Node.js" />
                    <IconCard icon="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="PHP" />
                    <IconCard icon="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="MySQL" />
                    <IconCard icon="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Discord.js" />
                    <IconCard icon="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Vite" />
                    <IconCard icon="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="TypeScript" />
                    <IconCard icon="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
                    <IconCard icon="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="MarkDown" />
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