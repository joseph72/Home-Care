import { createApp } from "vue";
import createDynamicRoutes from "./components/router";
import App from "./App.vue";
import "./style.css";

let app = createApp(App);

createDynamicRoutes().then(({ router }) => {
  console.log(router);
  // const createdMenu = createdMenu(menu);
  return app.use(router).mount("#app");
});
