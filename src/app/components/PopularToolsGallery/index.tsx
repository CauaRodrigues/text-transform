import { Fragment } from "react";
import CardTool from "@/components/CardTool";
import Data from "./data.json";

export default function PopularToolsGallery() {
  const Tools = Data.ToolList;

  return (
    <div className="container-cards">
      {Tools.map((tool) => {
        return (
          <Fragment key={tool.id}>
            <CardTool
              name={tool.name}
              title={tool.title}
              description={tool.description}
              functionsList={tool.functionsList}
            />
          </Fragment>
        );
      })}
    </div>
  );
}
