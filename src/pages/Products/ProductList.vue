// ./src/components/product/ProductList
/* eslint-disable */
<template>
    <div class="text-center">
        <h3>Product Lists</h3>
        <div class="product">
            <div class="container">
                <template v-for="product in products">
                    <product-item :product ="product" v-bind:key="product._id"></product-item>
                </template>
            </div>
        </div>
        <div class="text-center">
            <v-pagination
                    v-model="page"
                    :length="6"
            ></v-pagination>
        </div>
    </div>

</template>

<script>
    import ProductItem from '@/components/products/ProductItem.vue'
    export default{
        name: 'products-list',
        data () {
            return {
                page: 1,
            }
        },
        created() {
            if (this.products.length === 0) {
                this.$store.dispatch('allProducts')
            }
        },
        computed: {
            products() {
                return this.$store.getters.allProducts;
            }
        },
        components: {
            'product-item': ProductItem
        }
    }
</script>

<style>
    .product {
        background: #FAFAFA;
        padding: 30px 0;
    }
</style>
