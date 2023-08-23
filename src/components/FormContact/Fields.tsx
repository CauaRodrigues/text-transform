"use client";

import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import EmailTemplateParams from "@/utils/EmailTemplate";

const [SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY] = [
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
];

export default function Fields() {
  const [isFieldsFilled, setIsFieldsFilled] = useState(true);
  const [formData, setFormData] = useState({
    topic: "",
    name: "",
    email: "",
    message: "",
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

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const ContactData = new EmailTemplateParams(formData).params;

    emailjs.send(SERVICE_ID, TEMPLATE_ID, ContactData, PUBLIC_KEY).then(
      (result) => {
        setFormData({
          name: "",
          email: "",
          message: "",
          topic: "",
        });
      },
      (error) => {
        console.log(error);
      },
    );
  };

  useEffect(() => {
    !Object.values(formData).includes("")
      ? setIsFieldsFilled(false)
      : setIsFieldsFilled(true);
  }, [formData]);

  return (
    <form method="POST" action="/api/contact" onSubmit={submitForm}>
      <div className="field">
        <label htmlFor="topic">tópico</label>

        <select
          id="topic"
          name="topic"
          value={formData.topic}
          onChange={handleChange}
        >
          <option label="Qual o assunto?" value="" disabled />
          <option label="Feedback" value="feedback" />
          <option label="Sugestões" value="sugestoes" />
          <option label="Dúvidas" value="duvidas" />
          <option label="Apoiar" value="apoiar" />
          <option label="Contactar Desenvolvedor" value="contato" />
        </select>
      </div>

      <div className="field">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Seu Nome"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Seu Melhor E-mail"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label htmlFor="message">Mensagem</label>
        <textarea
          name="message"
          id="message"
          placeholder={'Escrevra o que você pensando sobre "Tópico"'}
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <label htmlFor="notrobot" className="field--check">
        Eu não sou um robô
        <input type="checkbox" id="notrobot" name="notrobot" />
        <span className="checkmark"></span>
      </label>

      <button type="submit" className="btn--send" disabled={isFieldsFilled}>
        Enviar
      </button>
    </form>
  );
}
