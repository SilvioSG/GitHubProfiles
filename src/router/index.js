import { createRouter, createWebHistory } from "vue-router";

import Home from "../view/Home.vue";
import ReposList from "../view/ReposList.vue";
import Starred from "../view/StarredList.vue";

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    props: true,
},
{
    path: '/repos',
    name: 'ReposList',
    component: ReposList,
    props: true,
},
{
    path: '/starred',
    name: 'StarredList',
    component: Starred,
    props: true,
},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router