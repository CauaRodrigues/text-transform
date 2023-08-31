"use client";

import React, { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import axios from "axios";

import EmailTemplateParams from "@/utils/EmailTemplate";

const [SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY, SITE_KEY] = [
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
];

export default function Fields() {
  const captchaRef = useRef<ReCAPTCHA>(null);
  const [alertMessage, setAlertMessage] = useState({
    status: "",
    message: "",
  });

  const [isFieldsFilled, setIsFieldsFilled] = useState(true);
  const [formData, setFormData] = useState({
    topic: "",
    name: "",
    email: "",
    message: "",
    isHuman: false,
  });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
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

    axios.post("/api/verifyRobot", { token }).then(({ data }) => {
      if (data.error) {
        captchaRef.current?.reset();
        setAlertMessage({
          status: "error",
          message: data.error,
        });
      } else {
        setFormData((prevState) => {
          return { ...prevState, isHuman: data.isHuman };
        });

        setAlertMessage({
          status: "",
          message: "",
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
            name: "",
            email: "",
            message: "",
            topic: "",
            isHuman: false,
          });

          setAlertMessage({
            status: "success",
            message: "Mensagem enviada com sucesso!",
          });

          captchaRef.current?.reset();
        }
      },
      (error) => {
        if (error) {
          setAlertMessage({
            status: "error",
            message: "Ocorreu um erro. Tente de novo mais tarde.",
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
          value={formData.topic}
          onChange={handleChange}
          required
        >
          <option label="Qual o assunto?" value="" disabled />
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
          type="text"
          name="name"
          id="name"
          placeholder="Seu Nome"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="field">
        <label htmlFor="email">E-mail *</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Seu Melhor E-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="field">
        <label htmlFor="message">Mensagem *</label>
        <textarea
          name="message"
          id="message"
          placeholder={`Escrevra o que você pensando sobre "${
            formData.topic || "Tópico"
          }"`}
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <ReCAPTCHA
        sitekey={SITE_KEY}
        onChange={verifyRobots}
        ref={captchaRef}
        size="normal"
        theme="light"
      />

      <button type="submit" className="btn--send" disabled={isFieldsFilled}>
        Enviar
      </button>
    </form>
  );
}
