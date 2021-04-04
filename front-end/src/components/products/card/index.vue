<template>
   <div>
       <v-container>
            <v-card>
                    <img
                        height="150"
                        :src="baseUrl+'/'+product.image"
                        position="10px 10px 0px 10px"
                        class="img-card-product"
                    >
                    <v-card-subtitle class="card-product-title">{{product.name}}</v-card-subtitle>
                    <v-card-text>
                        <h3 class="product-price"> {{product.price | toCurrency}} </h3>
                        <br>
                        <v-btn class="btn-add-card" block color="teal lighten-1">COMPRAR</v-btn>
                    </v-card-text>
            </v-card>
        </v-container>
   </div>
</template>
<script>
import "./card.scss";

export default {
    props:[
        "product"
    ],
    data(){
        return {
            "baseUrl": "http://localhost:8888"
        }
    }
}
</script>