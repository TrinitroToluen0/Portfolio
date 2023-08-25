import "./SkillCard.css";
import React from "react";

interface SkillCardProps {
    image?: string;
    title: string;
    description?: string;
    children?: React.ReactNode;
}

export default function SkillCard({ image, title, description, children }: SkillCardProps) {
    return (
        <div className="skillCard">
            {image && <img className="skillCard__image" src={image} alt={title} />}
            <h3 className="skillCard__title">{title}</h3>
            {description && <p className="skillCard__description description">{description}</p>}
            <div className="skillCard__children">
                {React.Children.map(children, (child) => (
                    <>
                        {child}
                    </>
                ))}
            </div>
        </div>
    );
}