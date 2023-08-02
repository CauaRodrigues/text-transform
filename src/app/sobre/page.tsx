import Image from "next/image";
import Header from "@/components/Header";
import ScrollIndicatorIcon from "@/assets/icons/scroll-indicator.svg";
import "./page.scss";
import Link from "next/link";

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

        <section className="contact">
          <div className="text-content_form">
            <div className="about-feedback">
              <h2>Seu feedback nos ajuda a melhorar!</h2>

              <p>
                Nosso objetivo é construir uma plataforma perfeita para você e
                poupar o máximo do seu tempo. Mas para isso precisamos de sua
                opinião. Há algo que podemos melhorar para sua experiência?
                Vamos lá! <span id="text--primary">Queremos ouvir você!</span>
              </p>
            </div>

            <div className="box--contribute">
              <h3>
                <span id="text--primary">Contribua</span> com a nossa missão!
              </h3>

              <p>
                Contribua para o desenvolvimento de mais ferramentas e novas
                funcionalidades, fortacelendo cada vez mais o Text Transform.
              </p>

              <Link href="/apoiar" className="btn--support">
                Apoiar
              </Link>
            </div>
          </div>

          <form action="">
            <div className="field">
              <label htmlFor="topic">tópico</label>

              <select id="topic" name="topic" defaultValue="none">
                <option label="Qual o assunto?" value="none" disabled />
                <option label="Feedback" value="feedback" />
                <option label="Sugestões" value="sugestoes" />
                <option label="Dúvidas" value="duvidas" />
                <option label="Apoiar" value="apoiar" />
                <option label="Contactar Desenvolvedor" value="contato" />
              </select>
            </div>

            <div className="field">
              <label htmlFor="name">Nome</label>
              <input type="text" name="name" id="name" placeholder="Seu Nome" />
            </div>

            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Seu Melhor E-mail"
              />
            </div>

            <div className="field">
              <label htmlFor="message">Mensagem</label>
              <textarea
                name="message"
                id="message"
                placeholder={'Escrevra o que você pensando sobre "Tópico"'}
              />
            </div>

            <label htmlFor="notrobot" className="field-check">
              Eu não sou um robô
              <input type="checkbox" id="notrobot" name="notrobot" />
              <span className="checkmark"></span>
            </label>

            <button type="button" className="btn--send" disabled>
              Enviar
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
