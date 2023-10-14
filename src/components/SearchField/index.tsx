"use client";

import Image from "next/image";
import React from "react";

import { ButtonsIcons } from "@/shared/Icons";

import "./styles.scss";

export default function SearchField({
  styleType,
  search,
  text,
}: {
  styleType: "integrated" | "box";
  search: (textFromField: string) => void;
  text: string;
}) {
  const handlerSearchText = (event: React.ChangeEvent<HTMLInputElement>) => {
    search(event.currentTarget.value);
  };

  return (
    <div className={`field__search-tools--${styleType}`}>
      <input
        type="text"
        id="searchTool"
        name="searchTool"
        placeholder="Buscar ferramentas"
        autoComplete="off"
        value={text}
        onChange={handlerSearchText}
      />

      <button>
        <Image src={ButtonsIcons.magnifyBlack} alt="Buscar" title="Buscar" />
      </button>
    </div>
  );
}
