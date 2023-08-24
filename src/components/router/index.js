import { getMenu } from "@/api";
import InnerPages from "../views/InnerPages.vue";
import { createRouter, createWebHashHistory } from "vue-router";
const routes = [{
    path: "/",
    name: "home",
    component: () =>
        import ("../views/HomeView.vue"),
}, ];

const createDynamicRoutes = async() => {
    let menu = await getMenu();
    const router = createRouter({
        history: createWebHashHistory(),
        routes,
    });

    menu.forEach((nav) => {
        router.addRoute({
            path: nav.path,
            name: nav.name,
            component: () => InnerPages,
        });
    });
    return { router, menu };
};

export default createDynamicRoutes;