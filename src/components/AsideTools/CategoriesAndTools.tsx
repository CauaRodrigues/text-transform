"use client";

import Link from "next/link";

import useDataStatus from "@/hooks/useDataStatus";
import { CategoriesType } from "@/types/ToolsType";
import { SkeletonLoadingLine } from "../SkeletonLoadingAnimation";

export default function CategoriesAndTools({
  fetchTool,
}: {
  fetchTool: string;
}) {
  const { content, isLoading } = useDataStatus();

  const filteredTools = (obj: CategoriesType) =>
    obj.tools.filter(
      (tool) =>
        tool.urlName.toLowerCase().includes(fetchTool.toLowerCase()) ||
        tool.title.toLowerCase().includes(fetchTool.toLowerCase()),
    );

  const categoriesWithFilteredTools = content
    .map((category) => {
      const filteredToolsInCategory = filteredTools(category);
      return {
        ...category,
        hasFilteredTools: filteredToolsInCategory.length > 0,
        filteredTools: filteredToolsInCategory,
      };
    })
    .sort((a, b) => {
      if (a.hasFilteredTools && !b.hasFilteredTools) {
        return -1;
      } else if (!a.hasFilteredTools && b.hasFilteredTools) {
        return 1;
      }
      return 0;
    });

  return (
    <>
      {isLoading ? (
        <SkeletonLoadingLine />
      ) : (
        categoriesWithFilteredTools.map((category) => (
          <div className="box__category--tools" key={category.id}>
            <h3>
              {category.name} ({filteredTools(category).length})
            </h3>
            <ul>
              {filteredTools(category).map((tool) => (
                <li key={tool.id}>
                  <Link href={`/ferramentas/${tool.urlName}`}>
                    {tool.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </>
  );
}
