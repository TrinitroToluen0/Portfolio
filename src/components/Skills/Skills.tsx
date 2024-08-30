import "./Skills.css";
import SkillCard from "../SkillCard/SkillCard.tsx";
import SkillsData from "./SkillsData.tsx";
import Skill from "./SkillInterface.ts";

export default function Skills() {
    return (
        <section id="skills" className="skills">
            <h2 className="projects__title">
                My skills
                <span className="section-separator"></span>
            </h2>
            <div className="skills__container">
                {SkillsData.map((skill: Skill, index: number) => (
                    <SkillCard key={index} image={skill.image} title={skill.title} description={skill.description}>
                        {skill.children}
                    </SkillCard>
                ))}
            </div>
        </section>
    );
}
