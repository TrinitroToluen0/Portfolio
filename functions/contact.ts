import { Resend } from 'resend';

export interface Env {
    CAPTCHA_SECRET_KEY: string;
    PORTFOLIO_CONTACT_EMAIL: string;
    RESEND_API_KEY: string;
}

export interface ContactBody {
    fullName: string;
    email: string;
    message: string;
    token: string;
}

export interface RecaptchaResponse {
    success: boolean;
    score: number;
    action: string;
    challenge_ts: string;
    hostname: string;
    "error-codes"?: string[];
}

export async function onRequestPost({ request, env }: { request: Request; env: Env }) {
    try {
        const body: ContactBody = await request.json();
        const { fullName, email: senderEmail, message, token } = body;

        if (!fullName || !senderEmail || !message || !token) {
            return new Response(JSON.stringify({ success: false, error: "Missing fields" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        // --- reCAPTCHA verification ---
        const recaptchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            body: `secret=${env.CAPTCHA_SECRET_KEY}&response=${token}`,
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        });

        const data: RecaptchaResponse = await recaptchaRes.json();
        if (!data.success || data.score < 0.5) {
            return new Response(JSON.stringify({ success: false, error: "Invalid captcha." }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        // --- Send email with Resend ---
        const resend = new Resend(env.RESEND_API_KEY);

        const result = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>", // puedes usar tu remitente verificado o genérico
            to: [env.PORTFOLIO_CONTACT_EMAIL],
            subject: "📬 New message from your portfolio",
            text: `Name: ${fullName}\nEmail: ${senderEmail}\n\n${message}`,
        });

        if (result.error) {
            console.error("Resend error:", result.error);
            return new Response(JSON.stringify({ success: false, error: result.error }), {
                status: 500,
                headers: { "Content-Type": "application/json" },
            });
        }

        return new Response(JSON.stringify({ success: true }), {
            headers: { "Content-Type": "application/json" },
        });
    } catch (err: any) {
        console.error("Unexpected ERROR in Worker:", err);
        return new Response(JSON.stringify({ error: err.message || "Internal server error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}