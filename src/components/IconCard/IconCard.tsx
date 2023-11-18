import "./IconCard.css"

interface IconCardProps {
    icon: string;
    alt: string;
    url?: string;
}

export default function IconCard ({icon, alt, url}: IconCardProps): React.ReactElement {
    if (url) {
        return (
            <a href={url} title={alt} className="iconCard interactive" target="_blank">
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