const routes = [
    { path: "/", component: HomePage },
    { path: "/progress", component: ProgressPage},
    { path: "/page/:name", component: WikiPage },
    { path: "/search", component: SearchPage }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
});
