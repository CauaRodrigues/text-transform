"use client";

import { Fragment } from "react";

import { SkeletonLoadingCards } from "@/components/SkeletonLoadingAnimation";
import SectionTools from "@/components/SectionTools";
import useDataStatus from "@/hooks/useDataStatus";

export default function RenderPageContent() {
  const { content, isLoading } = useDataStatus();

  return (
    <>
      {isLoading ? (
        <SkeletonLoadingCards />
      ) : (
        content.map((category) => (
          <Fragment key={category.id}>
            <SectionTools titleSection={category.name} data={category.tools} />
          </Fragment>
        ))
      )}
    </>
  );
}
