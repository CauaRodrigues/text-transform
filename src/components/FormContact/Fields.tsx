export default function Fields() {
  return (
    <form method="POST" action="">
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
  );
}
