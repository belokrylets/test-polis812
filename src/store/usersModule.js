import axios from "axios";
export default {
  state: {
    users: [],
  },
  getters: {
    getAllUsers(state) {
      return state.users;
    },
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    },
  },
  actions: {
    async fetchUsers(context) {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        context.commit("setUsers", response.data);
      } catch (error) {}
    },
  },
};
