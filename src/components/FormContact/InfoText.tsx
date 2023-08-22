import Link from "next/link";

export default function InfoText() {
  return (
    <div className="form--container__content--text">
      <div className="box__about--feedback">
        <h2>Seu feedback nos ajuda a melhorar!</h2>

        <p>
          Nosso objetivo é construir uma plataforma perfeita para você e poupar
          o máximo do seu tempo. Mas para isso precisamos de sua opinião. Há
          algo que podemos melhorar para sua experiência? Vamos lá!{" "}
          <span id="text--primary">Queremos ouvir você!</span>
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
  );
}
