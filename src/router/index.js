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

export default router;
