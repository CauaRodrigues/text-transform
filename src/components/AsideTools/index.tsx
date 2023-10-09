import SearchField from "../SearchField";
import CategoriesAndTools from "./CategoriesAndTools";
import "./styles.scss";

export default function AsideTools() {
  return (
    <aside className="menu__list--tools">
      <SearchField styleType="integrated" />

      <section>
        <CategoriesAndTools />
      </section>
    </aside>
  );
}
