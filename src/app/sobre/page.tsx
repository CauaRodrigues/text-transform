import Image from "next/image";
import Header from "@/components/Header";
import ScrollIndicatorIcon from "@/assets/icons/scroll-indicator.svg";
import "./page.scss";

export default function About() {
  return (
    <>
      <Header />

      <main>
        <section className="hero_about">
          <div className="container--content_about">
            <div className="box--content_text">
              <h1>Sobre Nós</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit dictumst
                mollis, taciti fermentum posuere venenatis aliquet velit purus
                malesuada penatibus, maecenas potenti condimentum sociosqu
                tempus aptent magna primis, id felis enim tristique aliquam
                suspendisse vulputate curae.
              </p>
            </div>

            <Image
              src="/assets/images/hero-about.jpg"
              alt="Pessoa digitando no notebook"
              className="hero-about"
              width={718}
              height={478.67}
            />
          </div>

          <Image
            src={ScrollIndicatorIcon}
            alt="Scroll Indicator"
            className="scroll_indicator"
            width={55}
            height={53}
          />
        </section>

        <section className="motivation_about">
          <div className="box--motivation">
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
      </main>
    </>
  );
}
