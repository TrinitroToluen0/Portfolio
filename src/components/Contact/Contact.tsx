import "./Contact.css";
import { useState } from "react";
import IconCard from "../IconCard/IconCard.tsx";
import linkedinIcon from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import instagramIcon from "../../assets/instagram.svg";
import gmailIcon from "../../assets/gmail.svg";
import curriculum from "../../assets/curriculum.pdf";

export default function Contact() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("hello");
    };

    return (
        <section id="contact" className="contact">
            <h2 className="contact__title">Contact me</h2>
            <div className="contact__container">
                <div className="contact__left">
                    <h3 className="contact__left__title">Send me an email</h3>
                    <form className="contact__form" onSubmit={handleSubmit}>
                        <div className="contact__row1">
                            <div className="contact__inputBox">
                                <input type="text" name="fullName" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                                <label htmlFor="fullName">Full name</label>
                            </div>
                            <div className="contact__inputBox">
                                <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                <label htmlFor="email">Email</label>
                            </div>
                            <textarea placeholder="Your message" name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
                        </div>
                        <div className="contact__row2">
                            <button className="contact__submitButton" type="submit">
                                Send message
                            </button>
                        </div>
                    </form>
                </div>
                <div className="contact__right">
                    <h3 className="contact__right__title">Connect with me</h3>
                    <div className="contact__right__content">
                        <div className="contact__row1">
                            <p className="contact__right__description description">I usually respond to requests as soon as I receive them, but you can still contact me via my social networks; I've provided them below for you.</p>
                            <div className="contact__gridContainer">
                                <IconCard icon={linkedinIcon} alt="LinkedIn" />
                                <IconCard icon={githubIcon} alt="GitHub" />
                                <IconCard icon={instagramIcon} alt="Instagram" />
                                <IconCard icon={gmailIcon} alt="Email" />
                            </div>
                        </div>
                        <div className="contact__row2">
                            <a className="contact__curriculumButton" href="a.pdf" download>
                                Download my CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
