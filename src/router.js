import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Pdf from "./views/Pdf.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/parties",
      name: "parties",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/Parties.vue")
    },
    {
      path: "/calendar",
      name: "calendar",
      component: Pdf,
      props: { pdfName: "../../public/Documents/calendar.pdf" }
    }
  ]
});
