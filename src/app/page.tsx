import Header from "@/components/Header";
import SearchField from "./SearchField";
import Link from "next/link";
import "./page.scss";
import CardTool from "@/components/CardTool";

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
        <section className="section__container-cards">
          <h2>Ferramentas Populares</h2>

          <div className="container-cards">
            <CardTool />
            <CardTool />
            <CardTool />
            <CardTool />
            <CardTool />
            <CardTool />
          </div>

          <Link
            href="/ferramentas"
            className="btn--primary"
            title="Página de Ferramentas"
          >
            Mais Ferramentas
          </Link>
        </section>

        <section></section>
      </main>
    </>
  );
}
