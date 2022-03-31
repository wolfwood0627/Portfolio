import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/HomeCom.vue";
import Profile from "../views/ProfileCom.vue";
import Gallery from "../views/GalleryCom.vue";
import Skills from "../views/SkillsCom.vue";
import Contact from "../views/ContactCom.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/Gallery",
    name: "Gallery",
    component: Gallery,
  },
  {
    path: "/Skills",
    name: "Skills",
    component: Skills,
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
