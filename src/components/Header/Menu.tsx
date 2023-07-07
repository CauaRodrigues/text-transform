import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function Menu() {
  return (
    <nav className={styles.nav}>
      <Image
        src="/assets/logo.svg"
        alt="Text Transform Logo"
        width={300}
        height={80}
      />

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
    </nav>
  );
}
