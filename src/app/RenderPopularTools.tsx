"use client";

import SectionTools from "@/components/SectionTools";
import { SkeletonLoadingCards } from "@/components/SkeletonLoadingAnimation";
import useDataStatus from "@/hooks/useDataStatus";

export default function RenderPopularTools() {
  const { content, isLoading } = useDataStatus("popular");

  return isLoading ? (
    <SkeletonLoadingCards />
  ) : (
    <SectionTools titleSection="Ferramentas Populares" data={content} />
  );
}
