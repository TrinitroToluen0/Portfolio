import "./Skills.css";
import SkillCard from "./SkillCard.tsx";
import Skill from "./SkillInterface.ts";
import { useTranslation } from "react-i18next";

interface SkillProps {
    skillsData: Skill[]
}

export default function Skills({skillsData}: SkillProps) {
    const { t } = useTranslation();
    return (
        <section id="skills" className="skills">
            <h2 className="projects__title">
                {t("skills.sectionTitle")}
                <span className="section-separator"></span>
            </h2>
            <div className="skills__container">
                {skillsData.map((skill: Skill, index: number) => (
                    <SkillCard key={index} image={skill.image} title={t(skill.title)} description={t(skill.description)}>
                        {skill.children}
                    </SkillCard>
                ))}
            </div>
        </section>
    );
}
