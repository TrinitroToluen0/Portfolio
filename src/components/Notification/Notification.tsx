import { useState } from "react";
import "./Notification.css";

interface NotificationProps {
    type: string;
    text: string;
}

const notificationTypes = {
    success: {
        backgroundColor: "#D4EDDA",
        color: "#155724",
        icon: "done",
    },
    error: {
        backgroundColor: "#FAC7CB",
        color: "#721C24",
        icon: "error",
    },
};

export default function Notification({ type, text }: NotificationProps) {
    const notificationConfig = notificationTypes[type as keyof typeof notificationTypes];

    if (!notificationConfig) return null;

    const { backgroundColor, color, icon } = notificationConfig;

    return (
        <div className={`notification notification--${type}`} style={{ backgroundColor, color }}>
            <span className="material-icons">{icon}</span>
            {text}
        </div>
    );
}

export function useNotification() {
    const [notification, setNotification] = useState({
        isVisible: false,
        text: "",
        type: "",
    });

    const createNotification = (text: string, type: string) => {
        setNotification({
            isVisible: true,
            text,
            type,
        });

        setTimeout(() => {
            setNotification({
                isVisible: false,
                text: "",
                type: "",
            });
        }, 5000);
    };

    return { notification, createNotification };
}
