import axios from "axios";

export default {
  state: {
    albums: [],
  },
  getters: {
    getAllAlbums(state) {
      return state.albums;
    },
  },
  mutations: {
    setAlbums(state, payload) {
      state.albums = payload;
    },
  },
  actions: {
    async fetchAlbums(context, userId) {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/albums?",
          {
            params: {
              userId: userId,
            },
          }
        );
        context.commit("setAlbums", response.data);
      } catch (error) {}
    },
  },
};
