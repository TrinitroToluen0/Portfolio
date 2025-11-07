export interface Env {
    CAPTCHA_SECRET_KEY: string;
    PORTFOLIO_CONTACT_EMAIL: string;
    MAILCHANNELS_API_KEY: string;
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
            console.error("Missing fields:", { fullName, senderEmail, message, token });
            return new Response(JSON.stringify({ success: false, error: "Missing fields" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        // Send reCAPTCHA token
        let recaptchaRes: Response;
        try {
            recaptchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
                method: "POST",
                body: `secret=${env.CAPTCHA_SECRET_KEY}&response=${token}`,
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
            });
        } catch (fetchError) {
            console.error("Error fetching reCAPTCHA:", fetchError);
            return new Response(JSON.stringify({ success: false, error: "Failed to verify captcha" }), { status: 500, headers: { "Content-Type": "application/json" } });
        }

        let data: RecaptchaResponse;
        try {
            data = await recaptchaRes.json();
        } catch (jsonError) {
            console.error("Error parsing reCAPTCHA response:", jsonError);
            return new Response(JSON.stringify({ success: false, error: "Invalid captcha response" }), { status: 500, headers: { "Content-Type": "application/json" } });
        }

        if (!data.success || data.score < 0.5) {
            console.error("Invalid reCAPTCHA:", data);
            return new Response(JSON.stringify({ success: false, error: "Invalid captcha." }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        // Send email using Mailchannels
        let mailResponse: Response;
        try {
            mailResponse = await fetch("https://api.mailchannels.net/tx/v1/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    personalizations: [{ to: [{ email: env.PORTFOLIO_CONTACT_EMAIL }] }],
                    from: { email: "no-reply@portfolio-2av.pages.dev", name: "Portfolio Contact Form" },
                    subject: "📬 New message from the portfolio",
                    content: [{ type: "text/plain", value: `Name: ${fullName}\nEmail: ${senderEmail}\n\n${message}` }],
                }),
            });
        } catch (mailFetchError) {
            console.error("Error sending mail:", mailFetchError);
            return new Response(JSON.stringify({ success: false, error: "Failed to send email" }), { status: 500, headers: { "Content-Type": "application/json" } });
        }

        if (!mailResponse.ok) {
            const errorText = await mailResponse.text();
            console.error("Mailchannels returned an error:", errorText);
            return new Response(JSON.stringify({ ok: false, error: errorText }), { status: 500, headers: { "Content-Type": "application/json" } });
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