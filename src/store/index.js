import { createStore } from "vuex";
import albumsModule from "./albumsModule";
import photosModule from "./photosModule";
import postsModule from "./postsModule";
import usersModule from "./usersModule";

export default createStore({
  modules: {
    albumsModule,
    photosModule,
    postsModule,
    usersModule,
  },
});
