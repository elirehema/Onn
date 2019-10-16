import Vue from 'vue'
import Router from 'vue-router'

import LoginRouter from './login'
import RegistrationRouter from './registration'
import NavDrawerRouter from './navigation_drawers'

//Imports from Pages
import PageNotFound from '@/components/PageNotFound'


Vue.use(Router);

const router = new Router({
    mode: 'hash',
    routes: [
        {
            path: '*',
            name: 'PageNotFound',
            component: PageNotFound,
            meta: {
                guest: true
            }
        },
        LoginRouter,
        RegistrationRouter,
        NavDrawerRouter

    ]
});

/**
 * Run this condition for Each routing 
 * Commented for development purpose
**/
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('qAccessToken') == null){
            next('/');
        } else {
            next();
        }

    }else {
        next();
    }

});


export default router;
