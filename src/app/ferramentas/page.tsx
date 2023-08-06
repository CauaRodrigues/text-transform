import Image from "next/image";
import Header from "@/components/Header";
import SectionTools from "@/components/SectionTools";
import SearchIcon from "@/assets/icons/magnify-gray.svg";
import "./page.scss";

export default function Tools() {
  return (
    <>
      <Header />

      <main className="page-tools">
        <aside>
          <div className="field__search-tools">
            <input
              type="text"
              id="searchTool"
              name="searchTool"
              placeholder="Procurar"
            />
            <button>
              <Image
                src={SearchIcon}
                alt="pesquisar"
                width={27}
                height={27.02}
              />
            </button>
          </div>
        </aside>

        <article>
          <h1>As melhores ferramentas em um só lugar.</h1>

          <SectionTools
            titleSection="Manipular Texto"
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
            ]}
          />

          <SectionTools
            titleSection="Análise de Texto"
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
            ]}
          />

          <SectionTools
            titleSection="Aleatório"
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
            ]}
          />

          <SectionTools
            titleSection="Geradores"
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
            ]}
          />

          <SectionTools
            titleSection="Criptografia e Codificação"
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
            ]}
          />
        </article>
      </main>
    </>
  );
}
