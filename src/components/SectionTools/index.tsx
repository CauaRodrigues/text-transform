import GalleryCard from "@/components/GalleryCard";

import { ToolsType } from "@/types/ToolsType";

import "./styles.scss";

export default function SectionTools({
  titleSection,
  data,
}: {
  titleSection: string;
  data: ToolsType[];
}) {
  return (
    <section className="wrapper__tool-category">
      <h2>{titleSection}</h2>

      <GalleryCard dataTools={data} />
    </section>
  );
}
