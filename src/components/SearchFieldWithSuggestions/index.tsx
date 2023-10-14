"use client";

import { useState } from "react";

import SearchField from "@/components/SearchField";

import "./styles.scss";

export default function SearchFieldWithSuggestions() {
  const [searchFieldValue, setSearchFieldValue] = useState("");

  const getSearchFieldValue = (text: string) => {
    setSearchFieldValue(text);
  };

  return (
    <div className="container__search-field--with-suggest">
      <SearchField
        styleType="box"
        search={getSearchFieldValue}
        text={searchFieldValue}
      />

      <ul>
        <li>Texto</li>
        <li>Texto</li>
        <li>Texto</li>
        <li>Texto</li>
        <li>Texto</li>
        <li>Texto</li>
        <li>Texto</li>
        <li>Texto</li>
        <li>Texto</li>
        <li>Texto</li>
      </ul>
    </div>
  );
}
