import Vue from 'vue'
import Router from 'vue-router'

import HomeRoutes from './home'
import UserRouter from './user_router'
import ProductsRouter from './products'

//Imports from Pages
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router);

export default new Router({
 mode: 'history',
    routes: [
        {
            path: '*',
            name: 'PageNotFound',
            component: PageNotFound
        },
        HomeRoutes,
        UserRouter,
        ProductsRouter,
    ]
})
