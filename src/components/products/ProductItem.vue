/* eslint-disable */
<template>
    <v-card
            class="mx-auto"
            max-width="400"
            tile>
        <v-list-item two-line>
            <v-list-item-content>
                <v-list-item-title>{{product.name}}</v-list-item-title>
                <v-list-item-subtitle>Phone: {{product.phone}}</v-list-item-subtitle>

                <v-list-item-subtitle>Date: {{product.create_date |formatDate}}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
    </v-card>
    <!--<div class="col-md-2 col-sm-2 col-lg-3">
        <div>
            <div slot="header">
                <h3>
                    {{product.price}}
                </h3>
            </div>

            <div class="product__price-cart">{{product.phone}}</div>
            <div slot="footer">
            </div>
        </div>
    </div>-->

</template>
<style>
    .product {
        background: #FFF;
        margin-bottom: 30px;
        position: relative;
        overflow: hidden;
    }

    .product .product__description,
    .product .product__action {
        transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) transform;
    }

    .product:hover .product__description {
        transform: translateY(-40px);
    }

    .product:hover .product__action {
        transform: none;
    }

    .product-link {
        display: block;
        color: #3D3D3D;
    }

    .product-link:hover {
        color: #3D3D3D;
        text-decoration: none;
    }

    .product .product__image {
        width: 100%;
        height: 100%;
    }

    .product__image img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        height: 235px;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    .product__description {
        width: 100%;
        display: flex;
        padding: 20px 20px 15px;
        background: #FFF;
    }

    .product__info {
        flex: 2;
    }

    .product__description small {
        color: #808080;
    }

    .product__description h4 {
        margin: 3px 0 5px 0;
    }

    .product__price-cart {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 12px;
        font-weight: bold;
        color: #51D2B7;
    }

    .product__price-cart p {
        flex-grow: 2;
        font-size: 20px;
        font-weight: bold;
    }

    .product__action {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        transform: translateY(100%);
    }

    .product__action button {
        border-radius: 0;
        width: 100%;
        display: block;
    }
</style>


<script>
    export default {
        name: 'product-item',
        props: ['product']

    }
</script>

