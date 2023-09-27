import { useEffect, useState } from "react";
import FetchToolsService from "@/services/FetchTools";
import { CategoriesType } from "@/types/ToolsType";

interface DataStatusType {
  content: CategoriesType[];
  error: string | null;
  isLoading: boolean;
}

const srv = new FetchToolsService();

export default function useDataStatus(format: "list" | "card") {
  const [dataStatus, setDataStatus] = useState<DataStatusType>({
    content: [],
    error: null,
    isLoading: true,
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        if (format === "list") {
          const { tools: response } = await srv.listNamesAndCategories();
          setDataStatus((prevState) => ({
            ...prevState,
            content: response.categories,
          }));
        }
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
  }, [format]);

  return { ...dataStatus };
}
