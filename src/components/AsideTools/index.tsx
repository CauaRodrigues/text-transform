"use client";

import { useState } from "react";

import { SearchField } from "@/components/Search";
import CategoriesAndTools from "./CategoriesAndTools";

import "./styles.scss";

export default function AsideTools() {
  const [searchText, setSearchText] = useState("");

  const getSearchText = (textFromField: string) => {
    setSearchText(textFromField);
  };

  return (
    <aside className="menu__list--tools">
      <SearchField styleType="integrated" search={getSearchText} />

      <section>
        <CategoriesAndTools fetchTool={searchText} />
      </section>
    </aside>
  );
}
