"use client";

import { useState, useEffect, Fragment } from "react";
import Link from "next/link";

import FetchToolsService from "@/services/FetchTools";
import { CategoriesType } from "@/types/ToolsType";

const srv = new FetchToolsService();

export default function CategoriesAndTools() {
  const [dataStatus, setDataStatus] = useState<{
    loading: boolean;
    content: CategoriesType[];
    error: null | string;
  }>({
    loading: true,
    content: [],
    error: null,
  });

  useEffect(() => {
    const loadTools = async () => {
      try {
        const { tools: data } = await srv.listNamesAndCategories();
        setDataStatus((prevState) => ({
          ...prevState,
          content: data.categories,
        }));
      } catch (err) {
        setDataStatus((prevState) => ({
          ...prevState,
          error: "Um erro inesperado ocorreu.",
        }));
      } finally {
        setDataStatus((prevState) => ({
          ...prevState,
          loading: false,
        }));
      }
    };

    loadTools();
  }, []);

  return (
    <>
      {dataStatus.loading
        ? "Carregando..."
        : dataStatus.content.map((category) => {
            return (
              <Fragment key={category.id}>
                <div className="box__category--tools">
                  <h3>{category.name}</h3>
                  <ul>
                    {category.tools.map((tool) => (
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
          })}
    </>
  );
}
