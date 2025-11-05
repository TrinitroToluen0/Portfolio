import CustomMarkdown from "../../utils/CustomMarkdown";
import Skill from "../Skills/SkillInterface";
import "./SkillCard.css";
import React from "react";

export default function SkillCard({ image, title, description, children }: Skill) {
    return (
        <div className="skillCard card">
            {image && <img className="skillCard__image" src={image} alt={title} />}
            <h3 className="skillCard__title">{title}</h3>
            {description && <div className="skillCard__description"><CustomMarkdown>{description}</CustomMarkdown></div>}
            {children && (
                <div className="skillCard__children">
                    {React.Children.map(children, (child) => (
                        <>{child}</>
                    ))}
                </div>
            )}
        </div>
    );
}
