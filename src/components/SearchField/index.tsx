import Image from "next/image";
import IconSearch from "@/assets/icons/search-icon.svg";
import "./styles.scss";

export default function SearchField() {
  return (
    <div className="field--tools-search">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Encontre a ferramenta perfeita aqui!"
        autoComplete="off"
      />

      <Image src={IconSearch} alt="Buscar" />
    </div>
  );
}
