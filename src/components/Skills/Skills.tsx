import "./Skills.css";
import SkillCard from "../SkillCard/SkillCard.tsx";

export default function Skills() {
    return (
        <div className="skills">
            <h2 className="skills__title">My skills</h2>
            <div className="skills__container">
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
            </div>
        </div>
    );
}