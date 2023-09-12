import Image from "next/image";
import Link from "next/link";

import SearchIcon from "@/assets/icons/utils/magnify-gray.svg";

import "./styles.scss";

export default function AsideTools() {
  return (
    <aside className="menu__list--tools">
      <header className="field__search--tools">
        <input
          type="text"
          id="searchTool"
          name="searchTool"
          placeholder="Procurar"
        />
        <button>
          <Image src={SearchIcon} alt="pesquisar" width={27} height={27.02} />
        </button>
      </header>

      <section>
        <div className="box__category--tools">
          <h3>Manipular Texto</h3>
          <ul>
            <li>
              <Link href={`/ferramentas/${"tool"}`}>Formatação de Texto</Link>
            </li>
            <li>
              <Link href={`/ferramentas/${"tool"}`}>Censurar Textos</Link>
            </li>
            <li>
              <Link href={`/ferramentas/${"tool"}`}>Estilizar Texto</Link>
            </li>
            <li>
              <Link href={`/ferramentas/${"tool"}`}>Ordenar Lista</Link>
            </li>
          </ul>
        </div>

        <div className="box__category--tools">
          <h3>Análise de Texto</h3>
          <ul>
            <li>
              <Link href={`/ferramentas/${"tool"}`}>
                Contador de Caracteres
              </Link>
            </li>
            <li>
              <Link href={`/ferramentas/${"tool"}`}>Comparação de Textos</Link>
            </li>
            <li>
              <Link href={`/ferramentas/${"tool"}`}>Localizar Palavras</Link>
            </li>
            <li>
              <Link href={`/ferramentas/${"tool"}`}>Corretor Ortográfico</Link>
            </li>
          </ul>
        </div>

        <div className="box__category--tools">
          <h3>Aleatório</h3>
          <ul>
            <li>
              <Link href={`/ferramentas/${"tool"}`}>Sortear Números</Link>
            </li>
            <li>
              <Link href={`/ferramentas/${"tool"}`}>
                Sortear Lista de Nomes
              </Link>
            </li>
            <li>
              <Link href={`/ferramentas/${"tool"}`}>Sortear Equipes</Link>
            </li>
            <li>
              <Link href={`/ferramentas/${"tool"}`}>Jogar Dados</Link>
            </li>
            <li>
              <Link href={`/ferramentas/${"tool"}`}>Ordenação Aletória</Link>
            </li>
          </ul>
        </div>

        <div className="box__category--tools">
          <h3>Geradores</h3>
          <ul>
            <li>
              <Link href={`/ferramentas/${"tool"}`}>Gerar Lorem Ispum</Link>
            </li>
            <li>
              <Link href={`/ferramentas/${"tool"}`}>Gerar Nomes</Link>
            </li>
            <li>
              <Link href={`/ferramentas/${"tool"}`}>Gerar Senhas</Link>
            </li>
          </ul>
        </div>

        <div className="box__category--tools">
          <h3>Criptografia e Codificação</h3>
          <ul>
            <li>
              <Link href={`/ferramentas/${"tool"}`}>Código Morse</Link>
            </li>
            <li>
              <Link href={`/ferramentas/${"tool"}`}>Código Binário</Link>
            </li>
            <li>
              <Link href={`/ferramentas/${"tool"}`}>Código Hexadecimal</Link>
            </li>
            <li>
              <Link href={`/ferramentas/${"tool"}`}>Criptografar Textos</Link>
            </li>
          </ul>
        </div>
      </section>
    </aside>
  );
}
