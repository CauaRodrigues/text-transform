import Image from "next/image";

import { ButtonsIcons } from "@/shared/Icons";

import "./styles.scss";

export default function SearchField({
  styleType,
}: {
  styleType: "integrated" | "box";
}) {
  return (
    <div className={`field__search-tools--${styleType}`}>
      <input
        type="text"
        id="searchTool"
        name="searchTool"
        placeholder="Buscar ferramentas"
      />

      <button>
        <Image src={ButtonsIcons.magnifyBlack} alt="Buscar" title="Buscar" />
      </button>
    </div>
  );
}
