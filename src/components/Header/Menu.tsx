import Image from "next/image";
import Link from "next/link";
import MenuMobile from "./MenuMobile";

export default function Menu() {
  return (
    <nav className="header__nav">
      <Link href="/">
        <Image
          src="/assets/logo.svg"
          alt="Text Transform Logo"
          className="nav__logo"
          width={300}
          height={60}
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

      <button className="btn--support">
        <Link href="/">Apoiar</Link>
      </button>

      <MenuMobile />
    </nav>
  );
}
