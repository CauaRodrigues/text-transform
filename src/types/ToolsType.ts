export type CategoriesType = {
  id: number;
  name: string;
  tools: ToolsType[];
};

export type ToolsType = {
  id: number;
  urlName: string;
  title: string;
  description: string;
  functionsList: string[];
};
