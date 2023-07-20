import Link from "next/link";
import "./styles.scss";

export default function CardTool() {
  return (
    <div className="box__card-tools">
      <header>
        <h3>Formatação de Textos</h3>
      </header>

      <div className="content__card-tools">
        <h4>Formate textos rapidamente</h4>

        <details>
          <summary>Funções</summary>
        </details>

        <Link href="/ferramentas">Usar ferramenta</Link>
      </div>
    </div>
  );
}
