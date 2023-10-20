"use client";

import Image from "next/image";
import React, { useCallback, useState } from "react";
import debounce from "lodash.debounce";

import { ButtonsIcons } from "@/shared/Icons";

import "./styles.scss";

export default function SearchField({
  styleType,
  search,
}: {
  styleType: "integrated" | "box";
  search: (textFromField: string) => void;
}) {
  const [fieldValue, setFieldValue] = useState("");

  const debouncedSave = useCallback(
    debounce((nextValue: string) => search(nextValue), 1000),
    [],
  );

  const handlerSearchText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: nextValue } = event.target;
    setFieldValue(nextValue);
    debouncedSave(nextValue);
  };

  return (
    <div className={`field__search-tools--${styleType}`}>
      <input
        type="text"
        id="searchTool"
        name="searchTool"
        placeholder="Buscar ferramentas"
        autoComplete="off"
        value={fieldValue}
        onChange={handlerSearchText}
      />

      <button>
        <Image src={ButtonsIcons.magnifyBlack} alt="Buscar" title="Buscar" />
      </button>
    </div>
  );
}
