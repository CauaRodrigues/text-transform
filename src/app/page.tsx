import Link from "next/link";
import Header from "@/components/Header";
import SearchField from "./components/SearchField";
import PopularToolsGallery from "./components/PopularToolsGallery";
import "./page.scss";

export default function Home() {
  return (
    <>
      <Header withFill>
        <section className="banner">
          <h1>Text Transform</h1>
          <p>
            Edite e estilize seus textos com um clique usando nossas ferramentas
            inteligentes e práticas.
          </p>

          <SearchField />

          <div className="btn-group">
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
        <section className="container--cards">
          <h2>Ferramentas Populares</h2>

          <PopularToolsGallery />

          <Link
            href="/ferramentas"
            className="btn--primary"
            title="Página de Ferramentas"
          >
            Mais Ferramentas
          </Link>
        </section>

        <section className="container--box-invite">
          <div className="box-invite">
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
