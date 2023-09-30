import { InstanceAPI } from "@/lib/InstanceAPI";

export default class FetchToolsService {
  async listNamesAndCategories() {
    const { data: res } = await InstanceAPI.get("/ferramentas");
    return res;
  }

  async listPopularTools() {
    const { data: res } = await InstanceAPI.get("/ferramentas/popular");
    return res.popularTools;
  }
}
