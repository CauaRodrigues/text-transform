import Image from "next/image";
import Link from "next/link";

import { SocialIcons, SymbolsIcons } from "@/shared/Icons";
import { CopyButton, ShareButton } from "@/shared/Buttons";

import "./styles.scss";

const URL_SITE = process.env.NEXT_PUBLIC_BASE_URL;

export default function Footer() {
  const ICON_WIDTH = 26;
  const ICON_HEIGHT = 42;

  const CurrentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container__section-links">
        <section className="links_about">
          <Image
            src="/assets/logo.svg"
            alt="Text Transform Logo"
            width={200}
            height={60}
          />

          <p className="description_about">
            Nossas ferramentas e geradores são projetados para impulsionar sua
            criatividade e tornar o processo de criação mais eficiente.
            Simplifique seu trabalho e alcance resultados excepcionais com nossa
            ajuda!
          </p>

          <div className="share-friends">
            <h3>Compartilhe com seus amigos</h3>

            <div className="social-media--icons">
              <a
                rel="noreferrer"
                target="_blank"
                href={`https://www.facebook.com/sharer/sharer.php?u=${URL_SITE}`}
              >
                <Image
                  src={SocialIcons.facebook}
                  alt="Facebook"
                  className="icon"
                  width={ICON_WIDTH}
                  height={ICON_HEIGHT}
                />
              </a>

              <a
                rel="noreferrer"
                target="_blank"
                href={`https://twitter.com/intent/tweet?url=${URL_SITE}`}
              >
                <Image
                  src={SocialIcons.twitter}
                  alt="Compartilhar no Twitter"
                  className="icon"
                  width={ICON_WIDTH}
                  height={ICON_HEIGHT}
                />
              </a>

              <a
                rel="noreferrer"
                target="_blank"
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${URL_SITE}`}
              >
                <Image
                  src={SocialIcons.linkedin}
                  alt="LinkedIn"
                  className="icon"
                  width={ICON_WIDTH}
                  height={ICON_HEIGHT}
                />
              </a>

              <CopyButton contentToCopy={URL_SITE} />

              <ShareButton />
            </div>
          </div>

          <button className="btn--support" id="btn__icon">
            <Image
              src={SymbolsIcons.heart}
              alt="heart icon"
              className="icon"
              width={23}
              height={21.1}
            />
            Compre-me um café
          </button>
        </section>

        <section>
          <h2>Menu</h2>

          <ul>
            <li>
              <Link href="/">Início</Link>
            </li>
            <li>
              <Link href="/sobre">Sobre</Link>
            </li>
            <li>
              <Link href="/ferramentas">Ferramentas para textos</Link>
            </li>
            <li>
              <Link href="/ferramentas">Geradores de Dados</Link>
            </li>
            <li>
              <Link href="/salvos">Conteúdos Salvos</Link>
            </li>
            <li>
              <Link href="/sitemap">Sitemap</Link>
            </li>
          </ul>
        </section>

        <section>
          <h2>Outras Páginas</h2>

          <ul>
            <li>
              <Link href="/ferramentas/formatar-texto">
                formatação de textos
              </Link>
            </li>
            <li>
              <Link href="/ferramentas/estilizar-texto">
                personalizar textos
              </Link>
            </li>
            <li>
              <Link href="/ferramentas/ordenar-listas">ordenar listas</Link>
            </li>
            <li>
              <Link href="/ferramentas/corretor-ortografico">
                Corretor ortográfico
              </Link>
            </li>
            <li>
              <Link href="/ferramentas/comparar-textos">comparar textos</Link>
            </li>
            <li>
              <Link href="/ferramentas/gerar-lorem-ispum">
                gerador de lorem ispum
              </Link>
            </li>
            <li>
              <Link href="/ferramentas/gerar-nomes">gerador de nomes</Link>
            </li>
            <li>
              <Link href="/ferramentas/gerar-senhas">gerador de senhas</Link>
            </li>
            <li>
              <Link href="/ferramentas/sorteio">sortear nomes</Link>
            </li>
            <li>
              <Link href="/ferramentas/simular-dados">jogar dados</Link>
            </li>
          </ul>
        </section>

        <section>
          <h2>Contato</h2>

          <ul>
            <li>
              <Link href="/sobre">Página Sobre</Link>
            </li>

            <li>
              <a
                href="https://assisdev.netlify.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Portfólio Pessoal
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/cauaassis"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>

            <li>
              <a
                href="mailto:assis.developer@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
                className="no-capitalize"
              >
                assis.developer@gmail.com
              </a>
            </li>
          </ul>
        </section>
      </div>

      <div className="box--copyright">
        <p>
          © 2023 {CurrentYear === 2023 ? null : `- ${CurrentYear}`}{" "}
          <span>texttransform.com</span> - Todos os direitos reservados.
        </p>

        <span className="message-to-users">
          Feito com{" "}
          <Image
            src={SymbolsIcons.heart}
            alt="heart icon"
            className="icon"
            width={20.71}
            height={19}
          />{" "}
          e{" "}
          <Image
            src={SymbolsIcons.coffee}
            alt="coffee icon"
            className="icon"
            width={18.98}
            height={19}
          />
        </span>
      </div>
    </footer>
  );
}
