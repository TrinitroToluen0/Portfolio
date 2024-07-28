import "./Contact.css";
import React, { useEffect, useState } from "react";
import * as icons from "../../assets/icons.ts";
import IconCard from "../IconCard/IconCard.tsx";
import Notification, { useNotification } from "../Notification/Notification";

import curriculum from "../../assets/curriculum.pdf";

const RECAPTCHA_SITE_KEY = "6LcUff8oAAAAAPtdKUjmSMbJs0b0j5GLz9bi_Swb";

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
    const { notification, createNotification } = useNotification();

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
        const token = await grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: "contact" });

        // Validar el formulario
        if (emailValid && messageValid && fullName) {
            const formData = {
                fullName,
                email,
                message,
                token,
            };

            try {
                const response = await fetch("/api/portfolio/contact", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });

                const data = await response.json();

                if (data.success) {
                    createNotification("Mail successfully sent.", "success");
                    setMessage("");
                    setCharCount(-50);
                } else {
                    createNotification(data.error, "error");
                    setFormStatus(FORM_STATUSES.VALID);
                }
            } catch (error) {
                setFormStatus(FORM_STATUSES.VALID);
                createNotification("Network error", "error");
            }
        }
    };

    return (
        <section id="contact" className="contact">
            <h2 className="contact__title">
                Contact <span className="orange-text">me</span>
            </h2>
            <div className="contact__container">
                <div className="contact__left">
                    <h3 className="contact__left__title">Send me an email</h3>
                    {notification.isVisible ? <Notification text={notification.text} type={notification.type}></Notification> : null}
                    <form className={`contact__form ${formStatus}`} onSubmit={handleSubmit} noValidate>
                        <div className="contact__row1">
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
                        </div>
                        <div className="contact__row2">
                            <button className="contact__submitButton button" disabled={formStatus !== FORM_STATUSES.VALID}>
                                {formStatus === FORM_STATUSES.SUBMITTING ? <img className="loading-icon" src={icons.loadingIcon} alt="" /> : null}
                                {formStatus === FORM_STATUSES.SUBMITTING ? "Sending..." : "Send Email"}
                            </button>
                        </div>
                    </form>
                </div>
                <div className="contact__right">
                    <h3 className="contact__right__title">Connect with me</h3>
                    <div className="contact__right__content">
                        <div className="contact__row1">
                            <p className="contact__right__description description">
                                I usually respond to emails as soon as I receive them, but you can still contact me via my social networks, also you can see my work and career
                                there; I've provided them below for you.
                            </p>
                            <div className="contact__gridContainer">
                                <IconCard icon={icons.linkedinIcon} alt="LinkedIn" />
                                <IconCard icon={icons.githubIcon} alt="GitHub" url="https://github.com/TrinitroToluen0" />
                                <IconCard icon={icons.instagramIcon} alt="Instagram" url="https://www.instagram.com/mencoooh/" />
                                <IconCard icon={icons.gmailIcon} alt="Email" url="mailto:javiermenco404@gmail.com" />
                            </div>
                        </div>
                        <div className="contact__row2">
                            <a className="contact__curriculumButton button link-button" href={curriculum} download>
                                Download my curriculum
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
