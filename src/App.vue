/* eslint-disable */
// ./src/App
<template>
    <div id="app">

        <!--<div class="overlay" v-products="showLoader">
             <div class="loading-spinner">
                 <div class="dot dotOne"></div>
                 <div class="dot dotTwo"></div>
                 <div class="dot dotThree"></div>
             </div>
         </div>-->
        <router-view></router-view>
    </div>
</template>

<script>
    import TopNavigation from '@/pages/LoginPage/index'

    export default {
        name: 'app',
        data() {
            return {}
        },
    /*created: function () {
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
        },*/
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
