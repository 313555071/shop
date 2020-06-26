import Vue from "vue";
import axios from "axios";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
  { path: "*", redirect: "/login" },
  {
    path: "/index",
    name: "Index",
    component: Index,
    meta: { requiresAuth: true },
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/admin",
    name: "Dashboard",
    component: Dashboard,

    children: [
      {
        path: "products",
        name: "Products",
        component: () =>
          import(/* webpackChunkName: "about" */ "../components/Products.vue"),
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,

    children: [
      {
        path: "customer-order",
        name: "customer-order",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../components/CustomereOrders.vue"
          ),
      },
      {
        path: "cart",
        name: "cart",
        component: () =>
          import(/* webpackChunkName: "about" */ "../components/Cart.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`;
    console.log(api);
    //   console.log(process.env);
    // const vm = this;

    axios.post(api).then((response) => {
      console.log("檢查用戶是否仍持續登入", response.data);
      if (response.data.success) {
        next();
      } else {
        next({
          path: "/login",
        });
      }
    });
  } else {
    next();
  }
});

export default router;
