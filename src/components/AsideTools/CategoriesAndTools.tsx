"use client";

import { Fragment } from "react";
import Link from "next/link";

import { SkeletonLoadingLine } from "../SkeletonLoadingAnimation";
import useDataStatus from "@/hooks/useDataStatus";

export default function CategoriesAndTools() {
  const { content, isLoading } = useDataStatus();

  return (
    <>
      {isLoading ? (
        <SkeletonLoadingLine />
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
