export interface CategoriesType {
  id: number;
  name: string;
  tools: ToolsType[];
}

export interface ToolsType {
  id: number;
  urlName: string;
  title: string;
  description: string;
  functionsList: string[];
}
