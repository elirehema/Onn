/* eslint-disable */
// ./src/App
<template>
    <div id="app">
        <nav>
            <div class="container">
                <ul class="nav__left">
                    <li><router-link to="/"><i class="fa fa-home"></i>Home</router-link></li>
                    <li><router-link to="/products"><i class="fa fa-user"></i>Products</router-link></li>
                </ul>
                <!--<ul class="nav__right">
                  <li><router-link to="/cart"><i class="fa fa-shopping-cart"></i> Cart ({{cartItemsCount}})</router-link></li>
                </ul>-->
            </div>
        </nav>
        <router-view></router-view>
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
    /*import toastr from 'toastr'*/

    import {
        ALL_PRODUCTS,
        ALL_PRODUCTS_SUCCESS
    } from './store/mutation-types'
    export default {
        name: 'app',
        data () {
            return {
            }
        },
    created () {
            // Subscriptions for mutation
            this.$store.subscribe((mutation) => {
                if (mutation.payload) {
                    switch (mutation.type) {
                        case ALL_PRODUCTS:
                            //toastr.success('Product created.', 'Success!')
                            break
                        case ALL_PRODUCTS_SUCCESS:
                            // toastr.success('Product updated.', 'Success!')
                            break

                    }
                }
            })
        },
    computed: {

            showLoader () {
                // Loading spinner
                return this.$store.state.showLoader
            }
        }
    }
</script>
