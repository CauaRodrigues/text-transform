import Link from "next/link";
import styles from "./styles.module.scss";

export const NavigateButton = ({
  title,
  to,
  transparent,
  colorText,
  bgColor,
}: {
  title: string;
  to: string;
  transparent?: boolean;
  colorText: string;
  bgColor?: string;
}) => {
  return (
    <Link
      href={to}
      className={transparent ? styles.btnTransparent : styles.btn}
      style={{
        color: colorText,
        borderColor: colorText,
        background: transparent ? "transparent" : bgColor,
      }}
    >
      {title}
    </Link>
  );
};
