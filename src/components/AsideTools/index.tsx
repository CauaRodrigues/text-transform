"use client";

import { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import SearchIcon from "@/assets/icons/utils/magnify-gray.svg";
import FetchToolsService from "@/services/FetchTools";

import "./styles.scss";

const srv = new FetchToolsService();

interface ToolsListType {
  id: number;
  name: string;
  list: {
    id: number;
    urlName: string;
    title: string;
    description: string;
  }[];
}

export default function AsideTools() {
  const [toolsList, setToolsList] = useState<ToolsListType[]>([]);

  const loadTools = async () => {
    const data = await srv.listNamesAndCategories();
    setToolsList(data.tools.categories);
  };

  useEffect(() => {
    loadTools();
  }, []);

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
          <Image alt="pesquisar" height={27.02} src={SearchIcon} width={27} />
        </button>
      </header>

      <section>
        {toolsList
          ? toolsList.map((category) => {
              return (
                <Fragment key={category.id}>
                  <div className="box__category--tools">
                    <h3>{category.name}</h3>
                    <ul>
                      {category.list.map((tool) => (
                        <li key={tool.id}>
                          <Link href={`/ferramentas/${tool.urlName}`}>
                            {tool.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Fragment>
              );
            })
          : null}
      </section>
    </aside>
  );
}
