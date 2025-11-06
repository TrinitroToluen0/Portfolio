export interface Env {
    CAPTCHA_SECRET_KEY: string;
    PORTFOLIO_CONTACT_EMAIL: string;
}

export async function onRequestPost({ request, env }: { request: Request; env: Env }) {
    try {
        console.log("ENV keys:", Object.keys(env));

        const body = await request.json();
        console.log("Body recibido:", body);

        // ejemplo: si haces un fetch al captcha o a otro servicio, ponlo dentro del try
        const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            body: new URLSearchParams({
                secret: env.CAPTCHA_SECRET_KEY,
                response: body.token,
            }),
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        });

        const data = await res.json();
        console.log("Respuesta reCAPTCHA:", data);

        if (!data.success) {
            return new Response(JSON.stringify({ success: false, error: "Captcha inválido" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        return new Response(JSON.stringify({ success: true }), {
            headers: { "Content-Type": "application/json" },
        });

    } catch (err: any) {
        console.error("ERROR en Worker:", err.message || err);
        return new Response(JSON.stringify({ error: err.message || "Error interno" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
