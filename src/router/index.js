import { createWebHistory, createRouter } from "vue-router";

import Home from "@/views/Home.vue"
import About from "@/views/About.vue"
import Submit from "@/views/Submit.vue"
import NotFound from "@/views/NotFound.vue"



const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound,
    },
    {
        path: "/about",
        component: About,
    },
    {
        path: "/submit",
        component: Submit,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;