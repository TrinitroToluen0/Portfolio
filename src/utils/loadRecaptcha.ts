export function loadRecaptcha(siteKey: string) {
    return new Promise<void>((resolve, reject) => {
        if (document.querySelector(`script[src*="recaptcha/api.js"]`)) {
            return resolve();
        }

        const script = document.createElement("script");
        script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("Failed to load reCAPTCHA"));
        document.head.appendChild(script);
    });
}