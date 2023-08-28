import "./IconCard.css"

interface IconCardProps {
    icon: string;
    alt: string;
    url?: string;
}

export default function IconCard ({icon, alt, url}: IconCardProps) {
    if (url) {
        return (
            <a href={url} title={alt} className="iconCard" target="_blank">
                <img className="iconCard__image" src={icon} alt={alt} title={alt}/>
            </a>
        );
    } else {
        return (
            <div title={alt} className="iconCard">
                <img className="iconCard__image" src={icon} alt={alt} title={alt}/>
            </div>
        );
    }
}