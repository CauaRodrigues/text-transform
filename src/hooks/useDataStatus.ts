import { useEffect, useState } from "react";
import FetchToolsService from "@/services/FetchTools";
import { CategoriesType, ToolsType } from "@/types/ToolsType";

interface DataStatusType {
  content: CategoriesType[] & ToolsType[];
  error: string | null;
  isLoading: boolean;
}

const srv = new FetchToolsService();

export default function useDataStatus(filter: "all" | "popular" = "all") {
  const [dataStatus, setDataStatus] = useState<DataStatusType>({
    content: [],
    error: null,
    isLoading: true,
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const tools = async () => {
          if (filter === "all") {
            return await srv.listNamesAndCategories();
          } else {
            return await srv.listPopularTools();
          }
        };

        const response = await tools();

        setDataStatus((prevState) => ({
          ...prevState,
          content: filter === "all" ? response.tools.categories : response,
        }));
      } catch (err) {
        setDataStatus((prevState) => ({
          ...prevState,
          error: "Um erro ocorreu",
        }));
      } finally {
        setDataStatus((prevState) => ({
          ...prevState,
          isLoading: false,
        }));
      }
    };

    loadData();
  }, [filter]);

  return { ...dataStatus };
}
