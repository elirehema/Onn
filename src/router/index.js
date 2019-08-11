import Vue from 'vue'
import Router from 'vue-router'

import HomeRoutes from './home'
import UserRouter from './user_router'
import ProductsRouter from './products'
import LoginRouter from './login'
import RegistrationRouter from './registration'
import UserDetailRouter from './user_details'
import AddUserRouter from './add_user'

//Imports from Pages
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router);

const router = new Router({
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
        LoginRouter,
        RegistrationRouter,
        UserDetailRouter,
        AddUserRouter

    ]
});
router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next()
            return
        }
        next('/login')
    } else {
        next()
    }

});


export default router;
