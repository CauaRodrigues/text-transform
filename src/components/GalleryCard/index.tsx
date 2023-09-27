import { Fragment } from "react";
import CardTool from "@/components/CardTool";

import { ToolsType } from "@/types/ToolsType";

import "./styles.scss";

export default function GalleryCard({ dataTools }: { dataTools: ToolsType[] }) {
  return (
    <div className="gallery__cards">
      {dataTools.map((tool) => (
        <Fragment key={tool.id}>
          <CardTool
            name={tool.urlName}
            title={tool.title}
            description={tool.description}
            functionsList={tool.functionsList}
          />
        </Fragment>
      ))}
    </div>
  );
}
