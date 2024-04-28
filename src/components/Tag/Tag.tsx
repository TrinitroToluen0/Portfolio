import "./Tag.css";
import Tag from "./TagInterface.ts";

export default function Tag({ color, label, icon }: Tag) {
    return (
        <div style={{ backgroundColor: color }} className="tag">
            <img src={icon} alt={label} className="tag__icon" />
            {label}
        </div>
    );
}
