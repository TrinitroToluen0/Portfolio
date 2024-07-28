import "./Tag.css";
import TagInterface from "./TagInterface";

export default function Tag({ color, label, icon }: TagInterface) {
    return (
        <div style={{ borderColor: color }} className="tag">
            <img src={icon} alt={label} className="tag__icon" />
            <p className="tag__label">{label}</p>
        </div>
    );
}
