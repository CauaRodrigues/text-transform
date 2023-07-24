"use client";
import Link from "next/link";
import "./styles.scss";

export default function CardTool({
  name,
  title,
  description,
  functionsList,
}: {
  name: string;
  title: string;
  description: string;
  functionsList: string[];
}) {
  return (
    <div className="box__card-tools">
      <header>
        <h3>{title}</h3>
      </header>

      <div className="content__card-tools">
        <h4>{description}</h4>

        <details>
          <summary>Funções</summary>

          <ul>
            {functionsList.map((functions, index) => (
              <li key={index}>{functions}</li>
            ))}
          </ul>
        </details>

        <Link href={`/ferramentas/${name}`}>Usar ferramenta</Link>
      </div>
    </div>
  );
}
