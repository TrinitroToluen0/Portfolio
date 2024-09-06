import Skill from "../Skills/SkillInterface";
import "./SkillCard.css";
import React from "react";

export default function SkillCard({ image, title, description, children }: Skill) {
    return (
        <div className="skillCard card">
            {image && <img className="skillCard__image" src={image} alt={title} />}
            <h3 className="skillCard__title">{title}</h3>
            {description && <p className="skillCard__description description" dangerouslySetInnerHTML={{ __html: description }}></p>}
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
