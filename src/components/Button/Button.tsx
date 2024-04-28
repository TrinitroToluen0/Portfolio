import "./Button.css";
import { Button } from "./ButtonInterface.ts";

export default function Button({ label, style }: Button) {
    return (
        <div style={{ backgroundColor: color }} className="tag">
            <img src={icon} alt={label} className="tag__icon" />
            {label}
        </div>
    );
}
