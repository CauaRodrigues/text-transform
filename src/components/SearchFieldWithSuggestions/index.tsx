"use client";

import { useState } from "react";

import useDataStatus from "@/hooks/useDataStatus";
import SearchField from "@/components/SearchField";
import { CategoriesType } from "@/types/ToolsType";

import "./styles.scss";

export default function SearchFieldWithSuggestions() {
  const { content } = useDataStatus();

  const [searchFieldValue, setSearchFieldValue] = useState("");

  const getSearchFieldValue = (text: string) => {
    setSearchFieldValue(text);
  };

  const filteredTools = (obj: CategoriesType) =>
    obj.tools.filter(
      (tool) =>
        tool.urlName.toLowerCase().includes(searchFieldValue.toLowerCase()) ||
        tool.title.toLowerCase().includes(searchFieldValue.toLowerCase()),
    );

  return (
    <div className="container__search-field--with-suggest">
      <SearchField
        styleType="box"
        search={getSearchFieldValue}
        text={searchFieldValue}
      />

      {searchFieldValue.trim() ? (
        <ul>
          {content.map((category) =>
            filteredTools(category).map((tool) => (
              <li key={tool.id}>{tool.title}</li>
            )),
          )}
        </ul>
      ) : null}
    </div>
  );
}
