"use client";

import { useState } from "react";

import useDataStatus from "@/hooks/useDataStatus";
import { CategoriesType } from "@/types/ToolsType";
import SearchField from "./SearchField";

import "./styles.scss";

export default function SearchFieldWithSuggestions() {
  const { content } = useDataStatus();

  const [searchFieldValue, setSearchFieldValue] = useState("");

  const getSearchFieldValue = (text: string) => {
    setSearchFieldValue(text);
  };

  const filteredTools = (obj: CategoriesType) =>
    obj.tools.filter((tool) => {
      const filterByTitle = tool.title
        .toLowerCase()
        .includes(searchFieldValue.toLowerCase());

      return filterByTitle;
    });

  return (
    <div className="container__search-field--with-suggest">
      <SearchField styleType="box" search={getSearchFieldValue} />

      {searchFieldValue.trim() ? (
        <ul>
          {content.map((category) =>
            filteredTools(category).map((tool) => (
              <li key={tool.id}>
                <a href={`/ferramentas/${tool.urlName}`}>{tool.title}</a>
              </li>
            )),
          )}
        </ul>
      ) : null}
    </div>
  );
}
