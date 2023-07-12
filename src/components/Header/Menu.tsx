import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function Menu() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image
          src="/assets/logo.svg"
          alt="Text Transform Logo"
          width={300}
          height={60}
          className={styles.logo}
        />
      </Link>

      <ul className={styles.links}>
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
          <Link href="/">Salvos</Link>
        </li>
        <li>
          <Link href="/">Apoiar</Link>
        </li>
      </ul>

      <button className={styles.menuMobile}>
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
