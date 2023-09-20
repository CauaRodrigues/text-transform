import { InstanceAPI } from "@/lib/InstanceAPI";

export default class FetchToolsService {
  async listNamesAndCategories() {
    const { data: res } = await InstanceAPI.get("/ferramentas");
    console.log(res.tools.categories.map((category) => category.name));
    return res;
  }

  async toolsList() {
    const res = await InstanceAPI.get("/ferramentas");
    return res.data;
  }
}
