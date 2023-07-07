import { ReactNode } from "react";
import Menu from "./Menu";
import styles from "./styles.module.scss";

export default function Header({
  withFill,
  children,
}: {
  withFill?: boolean;
  children?: ReactNode;
}) {
  return (
    <header className={withFill ? styles.headerWithBg : styles.header}>
      <Menu />

      {children ? children : null}
    </header>
  );
}
