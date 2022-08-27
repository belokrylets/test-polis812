import axios from "axios";
export default {
  state: {
    posts: [],
  },
  getters: {
    getAllPosts(state) {
      return state.posts;
    },
  },
  mutations: {
    setPosts(state, payload) {
      state.posts = payload;
    },
  },
  actions: {
    async fetchPosts(context, userId) {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?",
          {
            params: {
              userId: userId,
            },
          }
        );
        context.commit("setPosts", response.data);
      } catch (error) {}
    },
  },
};
