import { reqCategoryList } from "@/api";

const state = {
  categoryList: [],
};
const mutations = {
  RECEIVECATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
};
const actions = {
  async getCategoryList(context) {
    const result = await reqCategoryList();
    if (result.code === 200) {
      context.commit("RECEIVECATEGORYLIST", result.data);
    }
  },
};

export default {
  state,
  mutations,
  actions,
};
