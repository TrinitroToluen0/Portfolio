import "./Skills.css";
import SkillCard from "../SkillCard/SkillCard.tsx";
import { skillCardData } from './skillsData.tsx';

export default function Skills() {
    return (
        <section id="skills" className="skills">
            <h2 className="skills__title"><span className="orange-text">My </span> skills</h2>
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