"use client";

import { Fragment } from "react";
import Link from "next/link";
import useDataStatus from "@/hooks/useDataStatus";

import Skeleton from "react-loading-skeleton";

const SkeletonLoadingAnimation = () => {
  return (
    <div
      className="box__category--tools"
      style={{ display: "flex", gap: "0.4rem", flexDirection: "column" }}
    >
      <Skeleton height={30} width={"80%"} />
      <ul>
        <Skeleton count={4} height={30} width={"85%"} />
      </ul>

      <Skeleton height={30} width={"80%"} />
      <ul>
        <Skeleton count={4} height={30} width={"85%"} />
      </ul>

      <Skeleton height={30} width={"80%"} />
      <ul>
        <Skeleton count={4} height={30} width={"85%"} />
      </ul>
    </div>
  );
};

export default function CategoriesAndTools() {
  const { content, error, isLoading } = useDataStatus();

  return (
    <>
      {isLoading ? (
        <SkeletonLoadingAnimation />
      ) : (
        content.map((category) => (
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
        ))
      )}
    </>
  );
}
