import { ReactNode } from "react";
import Menu from "./Menu";
import "./styles.scss";

export default function Header({
  withFill,
  children,
}: {
  withFill?: boolean;
  children?: ReactNode;
}) {
  return (
    <header className={withFill ? "header--fill" : "header"}>
      <Menu />

      {children ? children : null}
    </header>
  );
}
