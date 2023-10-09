import Link from "next/link";

import Header from "@/components/Header";
import SearchField from "@/components/SearchField";
import RenderPopularTools from "./RenderPopularTools";

import "./page.scss";

export default function Home() {
  return (
    <>
      <Header withFill>
        <section className="header__banner">
          <h1>Text Transform</h1>
          <p>
            Edite e estilize seus textos com um clique usando nossas ferramentas
            inteligentes e práticas.
          </p>

          <SearchField styleType="box" />

          <div className="btn__group">
            <Link
              href="/ferramentas"
              className="btn--primary"
              title="Página de Ferramentas"
            >
              Ferramentas
            </Link>

            <Link href="/sobre" className="btn--transparent" title="Sobre nós">
              Saiba Mais
            </Link>
          </div>
        </section>
      </Header>

      <main>
        <section className="container__popular-tools" id="container__info">
          <RenderPopularTools />

          <Link
            href="/ferramentas"
            className="btn--primary"
            title="Página de Ferramentas"
          >
            Mais Ferramentas
          </Link>
        </section>

        <section className="container__box-invite" id="container__info">
          <div className="box__invite">
            <h2>
              Quer saber mais sobre alguma coisa? Ou deseja entrar em contato
              com o desenvolvedor desse site? Visite a página Sobre!
            </h2>

            <Link href="/sobre" className="btn--black" title="Sobre este site">
              Veja Mais
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
