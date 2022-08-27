import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/styles/index.scss";
import components from "@/components";

const app = createApp(App);

components.forEach((component) => app.component(component.name, component));

app.use(store).use(router).mount("#app");
