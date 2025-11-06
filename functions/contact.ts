export interface Env {
    CAPTCHA_SECRET_KEY: string;
    PORTFOLIO_CONTACT_EMAIL: string;
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

        // Send reCAPTCHA token
        const recaptchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            body: `secret=${env.CAPTCHA_SECRET_KEY}&response=${token}`,
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        });

        const data: RecaptchaResponse = await recaptchaRes.json();

        // Verify reCAPTCHA response
        if (!data.success || data.score < 0.5) {
            return new Response(JSON.stringify({ success: false, error: "Invalid captcha." }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        // Send email using Mailchannels
        const mailResponse = await fetch("https://api.mailchannels.net/tx/v1/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                personalizations: [
                    {
                        to: [{ email: env.PORTFOLIO_CONTACT_EMAIL }],
                    },
                ],
                from: {
                    email: "jmencobusiness@gmail.com",
                    name: "Portfolio Contact Form",
                },
                subject: "📬 New message from the portfolio",
                content: [
                    {
                        type: "text/plain",
                        value: `Name: ${fullName}\nEmail: ${senderEmail}\n\n${message}`,
                    },
                ],
            }),
        });

        if (!mailResponse.ok) {
            const errorText = await mailResponse.text();
            return new Response(JSON.stringify({ ok: false, error: errorText }), { status: 500, headers: { "Content-Type": "application/json" } });
        }

        return new Response(JSON.stringify({ success: true }), {
            headers: { "Content-Type": "application/json" },
        });
    } catch (err: any) {
        console.error("ERROR en Worker:", err.message || err);
        return new Response(JSON.stringify({ error: err.message || "Internal server error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
