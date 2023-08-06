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
          <header className="field__search-tools">
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
          </header>

          <section>
            <div>
              <h3>Manipular Texto</h3>
              <ul>
                <li>Formatação de Texto</li>
                <li>Censurar Textos</li>
                <li>Estilizar Texto</li>
                <li>Ordenar Lista</li>
              </ul>
            </div>

            <div>
              <h3>Análise de Texto</h3>
              <ul>
                <li>Contador de Caracteres</li>
                <li>Comparação de Textos</li>
                <li>Localizar Palavras</li>
                <li>Corretor Ortográfico</li>
              </ul>
            </div>

            <div>
              <h3>Aleatório</h3>
              <ul>
                <li>Sortear Números</li>
                <li>Sortear Lista de Nomes</li>
                <li>Sortear Equipes</li>
                <li>Jogar Dados</li>
                <li>Ordenação Aletória</li>
              </ul>
            </div>

            <div>
              <h3>Geradores</h3>
              <ul>
                <li>Gerar Lorem Ispum</li>
                <li>Gerar Nomes</li>
                <li>Gerar Senhas</li>
              </ul>
            </div>

            <div>
              <h3>Criptografia e Codificação</h3>
              <ul>
                <li>Código Morse</li>
                <li>Código Binário</li>
                <li>Código Hexadecimal</li>
                <li>Criptografar Textos</li>
              </ul>
            </div>
          </section>
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
