import axios from "axios";
export default {
  state: {
    photos: [],
  },
  getters: {
    getAllPhotos(state) {
      return state.photos;
    },
  },
  mutations: {
    setPhotos(state, payload) {
      state.photos = payload;
    },
  },
  actions: {
    async fetchPhotos(context, albumId) {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos?",
          {
            params: {
              albumId: albumId,
              _limit: 5,
            },
          }
        );
        context.commit("setPhotos", response.data);
      } catch (error) {}
    },
  },
};
