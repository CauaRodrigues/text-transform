import Image from "next/image";
import IconSearch from "@/assets/icons/search-icon.svg";
import styles from "./page.module.scss";

export default function SearchField() {
  return (
    <div className={styles.searchField}>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Busque pela ferramenta que você precisa"
        autoComplete="off"
      />

      <Image src={IconSearch} alt="Buscar" />
    </div>
  );
}
