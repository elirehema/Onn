/* eslint-disable */
<template>
  <!--<v-card
            class="mx-auto"
            max-width="400"
            white
            tile>
        <v-list-item two-line>
            <v-list-item-content>
                <v-list-item-title>{{product.name}}</v-list-item-title>
                <v-list-item-subtitle>Phone: {{product.phone}}</v-list-item-subtitle>

                <v-list-item-subtitle>Date: {{product.create_date |formatDate}}</v-list-item-subtitle>
            </v-list-item-content>
  </v-list-item>-->
  <v-card class="mx-auto" outlined>
    <v-list-item three-line>
      <v-list-item-avatar tile size="125" color="transparent">
        <v-img src="../../assets/img/videoblocks.png"></v-img>
      </v-list-item-avatar>
      <v-card-text>
        <div class="headline text-left">Drama Korea Melting Me Softly Episode 11 Subtitle Indonesia</div>
        <div class="mx-auto">
          <div class="d-inline pa-2 deep-purple accent-4 white--text">
            <v-icon>mdi-clock-outline</v-icon>
            &nbsp; {{product.create_date |formatDate}}
          </div>
          <div class="d-inline pa-2 red white--text">
            <v-icon>mdi-account</v-icon>&nbsp;&nbsp; droidcom
          </div>
          <div class="d-inline pa-2 deep-purple accent-4 white--text">
            <v-icon>mdi-chat-outline</v-icon>&nbsp;&nbsp; product.comments.size
          </div>
        </div>
          <v-divider class="mx-4"></v-divider>
        <div class="text-left">{{text}}</div>
      </v-card-text>
      
    </v-list-item>
  </v-card>
</template>


<script>
export default {
  name: "product-item",
  props: ["product"],
  data() {
    return {
      text:
        "Sinopsis Drama Korea Melting Me Softly Melting Me Softly menceritakan kisah seorang produser film yang terkenal dengan julukan “spesimen jantan dari kejantanan”, yakni Ma Dong Chan (Ji Chang Wook) dengan seorang wanita yang terlibat hutang […] Sinopsis Drama Korea Melting Me Softly Melting Me Softly menceritakan kisah seorang produser film yang terkenal dengan julukan “spesimen jantan dari kejantanan”, yakni Ma Dong Chan (Ji Chang Wook) dengan seorang wanita yang terlibat hutang "
    };
  }
};
</script>

