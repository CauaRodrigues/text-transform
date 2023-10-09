import Image from "next/image";
import IconSearch from "@/assets/icons/utils/magnify-black.svg";
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

      <button>
        <Image src={IconSearch} alt="Buscar" title="Buscar" />
      </button>
    </div>
  );
}
