import "./IconCard.css"

interface IconCardProps {
    icon: string;
    alt: string;
}

export default function IconCard ({icon, alt}: IconCardProps) {
    return (
        <div title={alt} className="iconCard">
            <img className="iconCard__image" src={icon} alt={alt} title={alt}/>
        </div>
    );
}