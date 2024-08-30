import "./Contact.css";
import React, { useEffect, useState } from "react";
import * as icons from "../../assets/icons.ts";
import IconCard from "../IconCard/IconCard.tsx";
import config from "../../config.ts";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import curriculum from "../../assets/curriculum.pdf";

const FORM_STATUSES = {
    VALID: "valid",
    SUBMITTING: "submitting",
    INVALID: "invalid",
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

            try {
                const response = await fetch(config.CONTACT_ENDPOINT, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });

                // const data = await response.json();

                if (response.ok) {
                    setMessage("");
                    setCharCount(-50);
                    toast.success("Mail successfully sent", { position: "bottom-right", style: { color: "#FFF", backgroundColor: "#33b864" } });
                    setFormStatus(FORM_STATUSES.INVALID);
                } else {
                    toast.error("Network error", { position: "bottom-right" });
                    setFormStatus(FORM_STATUSES.VALID);
                }
            } catch (error) {
                toast.error("Network error", { position: "bottom-right", style: { color: "#FFF", backgroundColor: "#d63447" } });
                setFormStatus(FORM_STATUSES.VALID);
            }
        }
    };

    return (
        <section id="contact" className="contact">
            <h2 className="projects__title">
                Contact me
                <span className="section-separator"></span>
            </h2>
            <div className="contact__container">
                <div className="contact__left card">
                    <h3 className="contact__left__title">Send me an email</h3>
                    <form className={`contact__form ${formStatus}`} onSubmit={handleSubmit} noValidate>
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
                            <label htmlFor="fullName">name or company</label>
                            <span className="material-icons contact__inputBox__icon" style={{ opacity: fullName.length > 0 ? 1 : 0 }}>
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
                            <label htmlFor="email">email address</label>
                            <span className="material-icons contact__inputBox__icon" style={{ opacity: emailValid ? 1 : 0 }}>
                                check_circle
                            </span>
                        </div>
                        <div className="contact__inputBox textareaBox">
                            <p id="charLimit" title={`Max ${maxLength} characters and at least ${minLength}`} className={`charLimit ${messageValid ? "valid" : ""}`}>
                                {charCount}/{maxLength - minLength}
                            </p>
                            <textarea
                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleMessageInput(e)}
                                placeholder="MESSAGE"
                                name="message"
                                id="message"
                                value={message}
                                required
                                disabled={formStatus === FORM_STATUSES.SUBMITTING}
                            />
                        </div>

                        <button type="submit" className="contact__submitButton button" disabled={formStatus !== FORM_STATUSES.VALID}>
                            {formStatus === FORM_STATUSES.SUBMITTING ? <img className="loading-icon" src={icons.loadingIcon} alt="" /> : null}
                            {formStatus === FORM_STATUSES.SUBMITTING ? "Sending..." : "Send Email"}
                        </button>
                    </form>
                </div>
                <div className="contact__right card">
                    <h3 className="contact__right__title">Connect with me</h3>
                    <div className="contact__right__content">
                        <p className="contact__right__description description">
                            I usually respond to emails as soon as I receive them, but you can also contact me through my social networks, you can also check my work and career
                            there; I've provided them below for you.
                        </p>
                        <div className="contact__gridContainer">
                            <IconCard icon={icons.linkedinIcon} alt="LinkedIn" url={config.LINKEDIN_PROFILE} />
                            <IconCard icon={icons.githubIcon} alt="GitHub" url={config.GITHUB_PROFILE} />
                            <IconCard icon={icons.pdfIcon} alt="Curriculum" url={curriculum}></IconCard>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
