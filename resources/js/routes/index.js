import Root from "../layout/Root.vue";

const routes = [
  {
    path: "/",
    component: Root,
    children: [
      { path: "/", component: () => import("../pages/index.vue") },
      { path: "/counter", component: () => import("../pages/counter/index.vue") }
    ]
  }
];

export default routes;
