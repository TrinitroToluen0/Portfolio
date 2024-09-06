import "./Contact.css";
import React, { useEffect, useState } from "react";
import * as assets from "../../assets.ts";
import IconCard from "../IconCard/IconCard.tsx";
import config from "../../config.ts";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

enum FORM_STATUSES {
    VALID,
    SUBMITTING,
    INVALID,
};

const minLength: number = 50;
const maxLength: number = 5000 + minLength;

export default function Contact() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [emailValid, setEmailValid] = useState(false);
    const [messageValid, setMessageValid] = useState(false);
    const [formStatus, setFormStatus] = useState(FORM_STATUSES.INVALID);
    const [charCount, setCharCount] = useState(-50);
    const { t } = useTranslation();

    // Validación de email y mensaje
    useEffect(() => {
        setMessageValid(message.length > minLength && message.length <= maxLength);
        setEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
    }, [email, message]);

    // Cálculo del estado del formulario
    useEffect(() => {
        if (fullName.length > 0 && emailValid && messageValid) {
            setFormStatus(FORM_STATUSES.VALID);
        } else {
            setFormStatus(FORM_STATUSES.INVALID);
        }
    }, [fullName, emailValid, messageValid]);

    const handleMessageInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const newMessage = e.target.value;
        if (newMessage.length <= maxLength) {
            // Verifica si no se ha alcanzado el límite
            const textAreaLength = newMessage.length;
            setCharCount(textAreaLength - minLength);
            setMessage(newMessage);
        }
    };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formStatus !== FORM_STATUSES.VALID) return;
    setFormStatus(FORM_STATUSES.SUBMITTING);

    // Obtener el token de reCAPTCHA
    // const token = await grecaptcha.execute(config.RECAPTCHA_SITE_KEY, { action: "contact" });

    // Validar el formulario
    if (emailValid && messageValid && fullName) {
        const formData = {
            fullName,
            email,
            message,
            _captcha: "false",
            // token,
        };

        const sendMailPromise = fetch(config.CONTACT_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        toast.promise(sendMailPromise, {
            pending: t("contact.notifications.sending"),
            success: t("contact.notifications.success"),
            error: t("contact.notifications.error"),
        });

        try {
            const response = await sendMailPromise;

            if (response.ok) {
                setMessage("");
                setCharCount(-50);
                setFormStatus(FORM_STATUSES.INVALID);
            } else {
                setFormStatus(FORM_STATUSES.VALID);
            }
        } catch (error) {
            setFormStatus(FORM_STATUSES.VALID);
        }
    }
};


    return (
        <section id="contact" className="contact">
            <h2 className="projects__title">
                {t("contact.sectionTitle")}
                <span className="section-separator"></span>
            </h2>
            <div className="contact__container">
                <div className="contact__left card">
                    <h3 className="contact__left__title">{t("contact.form.title")}</h3>
                    <form className={`contact__form ${formStatus === FORM_STATUSES.VALID ? "valid" : ""}`} onSubmit={handleSubmit} noValidate>
                        <div className="contact__inputBox">
                            <input
                                type="text"
                                name="fullName"
                                id="fullName"
                                maxLength={50}
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                                disabled={formStatus === FORM_STATUSES.SUBMITTING}
                            />
                            <label htmlFor="fullName">{t("contact.form.nameLabel")}</label>
                            <span translate="no" className="material-icons contact__inputBox__icon" style={{ opacity: fullName.length > 0 ? 1 : 0 }}>
                                check_circle
                            </span>
                        </div>
                        <div className="contact__inputBox">
                            <input
                                type="text"
                                name="email"
                                id="email"
                                maxLength={70}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                disabled={formStatus === FORM_STATUSES.SUBMITTING}
                            />
                            <label htmlFor="email">{t("contact.form.emailLabel")}</label>
                            <span translate="no" className="material-icons contact__inputBox__icon" style={{ opacity: emailValid ? 1 : 0 }}>
                                check_circle
                            </span>
                        </div>
                        <div className="contact__inputBox textareaBox">
                            <p id="charLimit" title={`Max ${maxLength} characters and at least ${minLength}`} className={`charLimit ${messageValid ? "valid" : ""}`}>
                                {charCount}/{maxLength - minLength}
                            </p>
                            <textarea
                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleMessageInput(e)}
                                placeholder={t("contact.form.messageLabel")}
                                name="message"
                                id="message"
                                value={message}
                                required
                                disabled={formStatus === FORM_STATUSES.SUBMITTING}
                            />
                        </div>

                        <button type="submit" className="contact__submitButton button" disabled={formStatus !== FORM_STATUSES.VALID}>
                            {t("contact.form.sendLabel")}
                        </button>
                    </form>
                </div>
                <div className="contact__right card">
                    <h3 className="contact__right__title">{t("contact.connections.title")}</h3>
                    <p className="contact__right__description description">{t("contact.connections.description")}</p>
                    <div className="contact__socials">
                        <IconCard icon={assets.linkedinIcon} alt="LinkedIn" url={config.LINKEDIN_PROFILE} />
                        <IconCard icon={assets.githubIcon} alt="GitHub" url={config.GITHUB_PROFILE} />
                        <IconCard icon={assets.pdfIcon} alt="Curriculum" url={assets.curriculum}></IconCard>
                    </div>
                </div>
            </div>
        </section>
    );
}
