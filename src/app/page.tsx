import Link from "next/link";
import Header from "@/components/Header";
import SearchField from "@/components/SearchField";
import SectionTools from "@/components/SectionTools";
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

          <SearchField />

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
          <SectionTools
            titleSection="Ferramentas Populares"
            data={[
              {
                id: 1,
                name: "nome",
                title: "titulo",
                description: "descrição, descrição e descrição",
                functionsList: [
                  "test0",
                  "test1",
                  "test2",
                  "test3",
                  "test4",
                  "test5",
                ],
              },
              {
                id: 2,
                name: "nome",
                title: "titulo",
                description: "descrição, descrição e descrição",
                functionsList: [
                  "test0",
                  "test1",
                  "test2",
                  "test3",
                  "test4",
                  "test5",
                ],
              },
              {
                id: 3,
                name: "nome",
                title: "titulo",
                description: "descrição, descrição e descrição",
                functionsList: [
                  "test0",
                  "test1",
                  "test2",
                  "test3",
                  "test4",
                  "test5",
                ],
              },
              {
                id: 4,
                name: "nome",
                title: "titulo",
                description: "descrição, descrição e descrição",
                functionsList: [
                  "test0",
                  "test1",
                  "test2",
                  "test3",
                  "test4",
                  "test5",
                ],
              },
              {
                id: 4,
                name: "nome",
                title: "titulo",
                description: "descrição, descrição e descrição",
                functionsList: [
                  "test0",
                  "test1",
                  "test2",
                  "test3",
                  "test4",
                  "test5",
                ],
              },
              {
                id: 4,
                name: "nome",
                title: "titulo",
                description: "descrição, descrição e descrição",
                functionsList: [
                  "test0",
                  "test1",
                  "test2",
                  "test3",
                  "test4",
                  "test5",
                ],
              },
            ]}
          />

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
