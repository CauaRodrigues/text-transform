import Image from "next/image";
import Link from "next/link";

import MenuMobile from "./MenuMobile";
import "./styles.scss";

export default function Menu() {
  return (
    <nav className="header--nav">
      <Link href="/">
        <Image
          src="/assets/logo.svg"
          alt="Text Transform Logo"
          width={300}
          height={60}
          className="logo"
        />
      </Link>

      <ul className="list-links">
        <li>
          <Link href="/">Início</Link>
        </li>
        <li>
          <Link href="/sobre">Sobre</Link>
        </li>
        <li>
          <Link href="/ferramentas">Ferramentas</Link>
        </li>
        <li>
          <Link href="/salvos">Salvos</Link>
        </li>
      </ul>

      <button className="btn--main">
        <Link href="/">Apoiar</Link>
      </button>

      <MenuMobile />
    </nav>
  );
}
