import Image from "next/image";

import SearchIcon from "@/assets/icons/utils/magnify-gray.svg";

import CategoriesAndTools from "./CategoriesAndTools";
import "./styles.scss";

export default function AsideTools() {
  return (
    <aside className="menu__list--tools">
      <header className="field__search--tools">
        <input
          id="searchTool"
          name="searchTool"
          placeholder="Procurar"
          type="text"
        />
        <button>
          <Image src={SearchIcon} alt="pesquisar" title="Pesquisar" />
        </button>
      </header>

      <section>
        <CategoriesAndTools />
      </section>
    </aside>
  );
}
