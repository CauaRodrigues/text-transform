import Link from "next/link";
import "./styles.scss";

export default function FormContact() {
  return (
    <section className="container__contact">
      <div className="form--container__content--text">
        <div className="box__about--feedback">
          <h2>Seu feedback nos ajuda a melhorar!</h2>

          <p>
            Nosso objetivo é construir uma plataforma perfeita para você e
            poupar o máximo do seu tempo. Mas para isso precisamos de sua
            opinião. Há algo que podemos melhorar para sua experiência? Vamos
            lá! <span id="text--primary">Queremos ouvir você!</span>
          </p>
        </div>

        <div className="box__about--contribute">
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

        <label htmlFor="notrobot" className="field--check">
          Eu não sou um robô
          <input type="checkbox" id="notrobot" name="notrobot" />
          <span className="checkmark"></span>
        </label>

        <button type="button" className="btn--send" disabled>
          Enviar
        </button>
      </form>
    </section>
  );
}
