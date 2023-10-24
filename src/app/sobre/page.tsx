import Image from "next/image";

import FormContact from "@/components/FormContact";
import Header from "@/components/Header";

import { ButtonsIcons } from "@/shared/Icons";

import "./page.scss";

export default function About() {
  return (
    <>
      <Header />

      <main>
        <section className="hero--about">
          <div className="container__content--about">
            <div className="box__content--text">
              <h1>Sobre Nós</h1>
              <p>
                Desperte seu potencial criativo com nossas ferramentas e
                geradores dedicados à eficiência. Nosso foco em edição,
                manipulação e estilização de textos torna a criação mais ágil.
                Os geradores de lorem ipsum, dados fictícios, senhas e mais
                agilizam tarefas repetitivas. Simplifique sua vida criativa e
                alcance resultados excepcionais em menos tempo!
              </p>
            </div>

            <Image
              alt="Pessoa digitando no notebook"
              className="hero__about--image"
              height={478.67}
              src="/assets/images/hero-about.jpg"
              width={718}
            />
          </div>

          <Image
            alt="Scroll Indicator"
            className="scroll-indicator"
            height={53}
            src={ButtonsIcons.scrollIndicator}
            width={55}
          />
        </section>

        <section className="motivation--about">
          <div className="box__motivation--content">
            <h2>Motivação</h2>

            <p>
              Minha paixão por produtividade e criatividade inspirou a criação
              desta plataforma. Ofereço um “Canivete Suíço” para facilitar a
              criação e edição de textos curtos de forma rápida, dispensando
              aplicações complexas que consomem seu tempo. Impulsionado pelo
              desejo de tornar seu trabalho eficiente, desenvolvi ferramentas
              poderosas e intuitivas. Seja você estudante, designer, criador de
              conteúdo ou alguém que precise editar mensagens e e-mails, essa
              ferramenta é perfeita para você.
            </p>
          </div>
        </section>

        <FormContact />
      </main>
    </>
  );
}
