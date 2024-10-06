import "./Button.css";

interface ButtonProps {
    variant: "link" | "submit";
    url?: string;
    icon?: string;
    label: string;
    disabled?: boolean;
}

export default function Button({ variant, url, icon, label, disabled }: ButtonProps) {
    if (variant === "link" && !url) {
        throw new Error("The 'url' prop is required when variant is 'link'.");
    }

    if (variant === "link" && disabled) {
        throw new Error("The 'disabled' prop should not be provided when variant is 'link'.");
    }

    if (variant === "submit" && url) {
        throw new Error("The 'url' prop should not be provided when variant is 'submit'.");
    }

    if (variant === "link") {
        return (
            <a href={url} className="button button--link" target="_blank" rel="noopener noreferrer">
                {icon && <img className="button__icon" src={icon} alt={label} title={label} />}
                <p className="button__label">{label}</p>
            </a>
        );
    } else {
        return (
            <button className="button" type="submit" disabled={disabled}>
                {icon && <img className="button__icon" src={icon} alt={label} title={label} />}
                <p className="button__label">{label}</p>
            </button>
        );
    }
}
