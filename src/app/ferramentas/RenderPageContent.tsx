"use client";

import SectionTools from "@/components/SectionTools";
import useDataStatus from "@/hooks/useDataStatus";
import { Fragment } from "react";

export default function RenderPageContent() {
  const { content, isLoading } = useDataStatus();

  return (
    <>
      {isLoading
        ? "Carregando"
        : content.map((category) => (
            <Fragment key={category.id}>
              <SectionTools
                titleSection={category.name}
                data={category.tools}
              />
            </Fragment>
          ))}
    </>
  );
}
