import "./IconCard.css"

interface IconCardProps {
    icon: string;
    label: string;
    url?: string;
}

export default function IconCard ({icon, label, url}: IconCardProps): React.ReactElement {
    if (url) {
        return (
            <a href={url} data-social={label} className="iconCard interactive" target="_blank">
                <img className="iconCard__image" src={icon} alt={label}/>
            </a>
        );
    } else {
        return (
            <div data-social={label} className="iconCard">
                <img className="iconCard__image" src={icon} alt={label} />
            </div>
        );
    }
}