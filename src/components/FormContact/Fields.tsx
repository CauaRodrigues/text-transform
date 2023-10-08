"use client";

import RobotVerificationService from "@/services/VerifyRobots";
import EmailTemplateParams from "@/templates/EmailTemplate";
import emailjs from "@emailjs/browser";
import React, { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const [SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY, SITE_KEY] = [
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
];

const srv = new RobotVerificationService();

export default function Fields() {
  const captchaRef = useRef<ReCAPTCHA>(null);
  const [alertMessage, setAlertMessage] = useState({
    message: "",
    status: "",
  });

  const [isFieldsFilled, setIsFieldsFilled] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    isHuman: false,
    message: "",
    name: "",
    topic: "",
  });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = event.target;

    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const verifyRobots = () => {
    const token = captchaRef.current?.getValue();

    srv.verifyToken(token).then((data) => {
      if (data.error) {
        captchaRef.current?.reset();
        setAlertMessage({
          message: data.error,
          status: "error",
        });
      } else {
        setFormData((prevState) => {
          return { ...prevState, isHuman: data.isHuman };
        });
        setAlertMessage({
          message: "",
          status: "",
        });
      }
    });
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const ContactData = new EmailTemplateParams(formData).params;

    emailjs.send(SERVICE_ID, TEMPLATE_ID, ContactData, PUBLIC_KEY).then(
      (result) => {
        if (result.text === "OK") {
          setFormData({
            email: "",
            isHuman: false,
            message: "",
            name: "",
            topic: "",
          });

          setAlertMessage({
            message: "Mensagem enviada com sucesso!",
            status: "success",
          });

          captchaRef.current?.reset();
        }
      },
      (error) => {
        if (error) {
          setAlertMessage({
            message: "Ocorreu um erro. Tente de novo mais tarde.",
            status: "error",
          });
        }
      },
    );
  };

  useEffect(() => {
    !Object.values(formData).includes("") && formData.isHuman
      ? setIsFieldsFilled(false)
      : setIsFieldsFilled(true);
  }, [formData]);

  return (
    <form method="POST" onSubmit={submitForm}>
      {alertMessage.status ? (
        <div className={`alert__about-form alert--${alertMessage.status}`}>
          {alertMessage.message}
        </div>
      ) : null}

      <div className="field">
        <label htmlFor="topic">tópico *</label>

        <select
          id="topic"
          name="topic"
          onChange={handleChange}
          required
          value={formData.topic}
        >
          <option disabled label="Qual o assunto?" value="" />
          <option label="Feedback" value="Feedback" />
          <option label="Sugestões" value="Sugestões" />
          <option label="Dúvidas" value="Dúvidas" />
          <option label="Apoiar" value="Apoiar" />
          <option
            label="Contactar Desenvolvedor"
            value="Contactar Desenvolvedor"
          />
        </select>
      </div>

      <div className="field">
        <label htmlFor="name">Nome *</label>
        <input
          id="name"
          name="name"
          onChange={handleChange}
          placeholder="Seu Nome"
          required
          type="text"
          value={formData.name}
        />
      </div>

      <div className="field">
        <label htmlFor="email">E-mail *</label>
        <input
          id="email"
          name="email"
          onChange={handleChange}
          placeholder="Seu Melhor E-mail"
          required
          type="email"
          value={formData.email}
        />
      </div>

      <div className="field">
        <label htmlFor="message">Mensagem *</label>
        <textarea
          placeholder={`Escrevra o que você pensando sobre "${
            formData.topic || "Tópico"
          }"`}
          id="message"
          name="message"
          onChange={handleChange}
          required
          value={formData.message}
        />
      </div>

      <ReCAPTCHA
        onChange={verifyRobots}
        ref={captchaRef}
        sitekey={SITE_KEY}
        size="normal"
        theme="light"
      />

      <button className="btn--send" disabled={isFieldsFilled} type="submit">
        Enviar
      </button>
    </form>
  );
}
