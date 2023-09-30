"use client";

import { Fragment, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

import SectionTools from "@/components/SectionTools";
import useDataStatus from "@/hooks/useDataStatus";

export default function RenderPageContent() {
  const [loadingSkeleton, setLoadingSkeleton] = useState(true);
  const { content, isLoading } = useDataStatus();

  useEffect(() => {
    if (!isLoading) setLoadingSkeleton(false);
  }, [isLoading]);

  return (
    <>
      {loadingSkeleton ? (
        <section className="skeleton__container">
          <div className="skeleton-loading__title">
            <Skeleton count={1} height={40} />
          </div>

          <div className="gallery__cards">
            <Skeleton height={200} />
            <Skeleton height={200} />
            <Skeleton height={200} />
            <Skeleton height={200} />
            <Skeleton height={200} />
            <Skeleton height={200} />
          </div>
        </section>
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
