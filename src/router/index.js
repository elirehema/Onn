import Vue from 'vue'
import Router from 'vue-router'

import LoginRouter from './login'
import RegistrationRouter from './registration'
import NavDrawerRouter  from './navigation_drawers'

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
        LoginRouter,
        RegistrationRouter,
        NavDrawerRouter

    ]
});
router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('qAccessToken') == null) {
            next({
                path: '/',
                params: { nextUrl: to.fullPath }
            })
        } else {
            next();

        }
    } else if(to.matched.some(record => record.meta.guest)) {
        if(localStorage.getItem('qAccessToken') == null){
            next()
        }
        else{
            next({ path: '/reg'})
        }
    }else {
        next()
    }
});

export default router;
