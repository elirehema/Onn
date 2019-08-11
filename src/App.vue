/* eslint-disable */
// ./src/App
<template>
    <div id="app">
        <top-navigations></top-navigations>

        <!--<div class="overlay" v-products="showLoader">
             <div class="loading-spinner">
                 <div class="dot dotOne"></div>
                 <div class="dot dotTwo"></div>
                 <div class="dot dotThree"></div>
             </div>
         </div>-->
    </div>
</template>

<script>
    import TopNavigation from '@/components/TopNavigationDrawer/index'

    import {
        ALL_PRODUCTS,
        ALL_PRODUCTS_SUCCESS
    } from './store/mutation-types'

    export default {
        name: 'app',
        data() {
            return {}
        },
        created: function () {
            this.$http.interceptors.response.use(undefined, function (err) {
                return new Promise(function (resolve, reject) {
                    if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
                        this.$store.dispatch(logout)
                    }
                    throw err;
                });
            });
        },
        computed: {

            showLoader() {
                // Loading spinner
                return this.$store.state.showLoader
            }
        },
        components: {
            'top-navigations': TopNavigation,
        }
    }
</script>
<style>
    #app {
        font-family: 'Lato', sans-serif;
    }
</style>
