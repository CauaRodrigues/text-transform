export type CategoriesType = {
  id: number;
  name: string;
  tools: ToolsType[];
};

export type ToolsType = {
  id: string;
  urlName: string;
  title: string;
  description: string;
  functionsList: string[];
};
