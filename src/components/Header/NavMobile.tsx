"use client";

import Link from "next/link";
import { useState } from "react";

export default function NavMobile() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <button
        className="btn--burger"
        onClick={() => setOpenNav((prevState) => !prevState)}
      >
        <span />
        <span />
        <span />
      </button>

      {openNav ? (
        <div className="container__nav" id="mobile">
          <ul className="nav__links" id="mobile">
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
        </div>
      ) : null}
    </>
  );
}
