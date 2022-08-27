import { createRouter, createWebHistory } from "vue-router";
import UsersListPage from "@/components/Pages/userListPage/UsersListPage";
import AboutPage from "@/components/Pages/aboutPage/AboutPage";
import PostsPage from "@/components/Pages/postsPage/PostsPage";
import AlbumsPage from "@/components/Pages/albumsPage/AlbumsPage";

const routes = [
  { path: "/", component: UsersListPage },
  { path: "/about", component: AboutPage },
  { path: "/:id/posts", component: PostsPage },
  { path: "/:id/albums", component: AlbumsPage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
