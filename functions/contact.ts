export interface Env {
    CAPTCHA_SECRET_KEY: string;
    PORTFOLIO_CONTACT_EMAIL: string;
}

export async function onRequestPost(context: { request: Request; env: Env; }) {
    const { request, env } = context;

    console.log("ENV keys:", Object.keys(env)); // para verificar que sí llegan
    const { fullName, email, message, token } = await request.json();

    const recaptchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${env.CAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const data = await recaptchaRes.json();

    if (!data.success || data.score <= 0.5) {
        return new Response(JSON.stringify({ ok: false, error: "Captcha validation failed" }), {
            headers: { "Content-Type": "application/json" },
            status: 403,
        });
    }

    // MailChannels email
    const response = await fetch("https://api.mailchannels.net/tx/v1/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            personalizations: [
                {
                    to: [{ email: env.PORTFOLIO_CONTACT_EMAIL }],
                },
            ],
            from: { email, name: fullName },
            subject: "Contacto a través del portfolio",
            content: [
                {
                    type: "text/plain",
                    value: `Nombre: ${fullName}\nCorreo electrónico: ${email}\n\n${message}`,
                },
            ],
        }),
    });

    if (response.ok) {
        return new Response(JSON.stringify({ ok: true }), { headers: { "Content-Type": "application/json" }, status: 200 });
    } else {
        const error = await response.text();
        return new Response(JSON.stringify({ ok: false, error }), { headers: { "Content-Type": "application/json" }, status: 500 });
    }
}
