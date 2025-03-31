import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Header/RouterLinks/Home.vue";
import Projects from "./components/Header/RouterLinks/Projects.vue";
import Testimonials from "./components/Header/RouterLinks/Testimonials.vue";
import Contact from "./components/Header/RouterLinks/Contact.vue";
import Skills from "./components/Header/RouterLinks/Skills.vue";

const routes = [
    {path : "/", component : Home},
    {path : "/projects", component : Projects},
    {path : "/testimonials", component : Testimonials},
    {path : "/contact", component : Contact},
    {path : "/skills", component : Skills},
]

const router = createRouter({
    history : createWebHistory(),
    routes
})
export default router