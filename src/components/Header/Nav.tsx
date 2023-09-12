import Image from "next/image";
import Link from "next/link";

import NavMobile from "./NavMobile";

export default function Nav() {
  return (
    <nav className="header__nav">
      <Link href="/">
        <Image
          alt="Text Transform Logo"
          className="nav__logo"
          height={60}
          src="/assets/logo.svg"
          width={300}
        />
      </Link>

      <ul className="nav__links">
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

      <button className="btn--support" id="no-mobile">
        <Link href="/">Apoiar</Link>
      </button>

      <NavMobile />
    </nav>
  );
}
