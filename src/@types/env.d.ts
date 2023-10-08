declare namespace NodeJS {
  interface ProcessEnv {
    // Emailjs
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: string;
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: string;
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: string;

    // reCAPTCHA
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: string;
    RECAPTCHA_SECRET_KEY: string;

    // TextTransform
    NEXT_PUBLIC_BASE_URL: string;
    NEXT_PUBLIC_API_BASE_URL: string;
  }
}
