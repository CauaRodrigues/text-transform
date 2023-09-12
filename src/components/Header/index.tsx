import { ReactNode } from "react";

import Nav from "./Nav";
import "./styles.scss";

export default function Header({
  children,
  withFill,
}: {
  children?: ReactNode;
  withFill?: boolean;
}) {
  return (
    <header className={withFill ? "header--fill" : "header--main"}>
      <Nav />

      {children ? children : null}
    </header>
  );
}
