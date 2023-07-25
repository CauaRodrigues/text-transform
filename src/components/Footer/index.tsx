import Image from "next/image";

import FacebookIcon from "@/assets/icons/facebook.svg";
import TwitterIcon from "@/assets/icons/twitter.svg";
import LinkedInIcon from "@/assets/icons/linkedin.svg";
import CopyLinkIcon from "@/assets/icons/link.svg";
import OthersIcon from "@/assets/icons/others.svg";
import HeartIcon from "@/assets/icons/heart.svg";
import CoffeeIcon from "@/assets/icons/coffee.svg";

import "./styles.scss";
import Link from "next/link";

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

          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipiscing elit tortor urna
            aptent, non congue justo varius lectus odio ut in suspendisse.
          </p>

          <div className="share-friends">
            <h3>Compartilhe com seus amigos</h3>

            <div className="social-media--icons">
              <Image
                src={FacebookIcon}
                alt="Facebook"
                width={ICON_WIDTH}
                height={ICON_HEIGHT}
              />
              <Image
                src={TwitterIcon}
                alt="Compartilhar no Twitter"
                width={ICON_WIDTH}
                height={ICON_HEIGHT}
              />
              <Image
                src={LinkedInIcon}
                alt="LinkedIn"
                width={ICON_WIDTH}
                height={ICON_HEIGHT}
              />
              <Image
                src={CopyLinkIcon}
                alt="Copiar Link"
                width={ICON_WIDTH}
                height={ICON_HEIGHT}
              />
              <Image
                src={OthersIcon}
                alt="Outras Opções"
                width={ICON_WIDTH}
                height={ICON_HEIGHT}
              />
            </div>
          </div>

          <button className="btn--support" id="btn__icon">
            <Image src={HeartIcon} alt="heart icon" width={23} height={21.1} />
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
              <Link href="/ferramentas">formatação de textos</Link>
            </li>
            <li>
              <Link href="/ferramentas">personalizar textos</Link>
            </li>
            <li>
              <Link href="/ferramentas">criação de listas</Link>
            </li>
            <li>
              <Link href="/ferramentas">texto para código morse</Link>
            </li>
            <li>
              <Link href="/ferramentas">texto para binário</Link>
            </li>
            <li>
              <Link href="/ferramentas">gerador de lorem ispum</Link>
            </li>
            <li>
              <Link href="/ferramentas">gerador de nomes</Link>
            </li>
            <li>
              <Link href="/ferramentas">gerador de senhas</Link>
            </li>
            <li>
              <Link href="/ferramentas">sortear nomes</Link>
            </li>
            <li>
              <Link href="/ferramentas">jogar dados</Link>
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
              >
                dev.akamatu@gmail.com
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
          <Image src={HeartIcon} alt="heart icon" width={20.71} height={19} /> e{" "}
          <Image src={CoffeeIcon} alt="coffee icon" width={18.98} height={19} />
        </span>
      </div>
    </footer>
  );
}
