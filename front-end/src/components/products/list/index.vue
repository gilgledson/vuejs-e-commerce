<template>
    <div>
        <div class="box-products">
            <v-row v-if="products.length">
                <v-col cols="6" sm="6" md="4" v-for="(product, key) in getProductsPage" :key="key">
                    <CardProduct :product="product" />
                </v-col>
            </v-row>
            <v-row v-else>
                <v-col cols="12" class="box-not-found">
                   <p class="text-center">Nenhum produto encontrado :~(</p>
                </v-col>
            </v-row>
        </div>
         <div class="text-center">
            <v-pagination
                v-model="page"
                :length="totalPages"
            ></v-pagination>
        </div>
    </div>
</template>

<script>
import CardProduct from "../card";
import "./list.scss";

export default {
    props:['orderBy'],
    components:{
        CardProduct
    },
    watch:{

    },
    computed:{
       getProductsPage(){
           const indece = this.page - 1;
           let start = indece * this.perPage;
           let end = this.perPage + start;
           let data =  this.getProducts.slice(start, end);
           return data;
       },
       totalPages(){
           return  Math.ceil(this.products.length / this.perPage) ?? 1;
       },
       products: (state) =>state.$store.getters.getProducts,
       getProducts(){
            const productsSort = this.products;
            if(this.orderBy != ""){
                return productsSort.sort((a,b) => {
                    switch (this.orderBy) {
                        case "maior-preco":
                            return a.price > b.price ? -1 : a.price < b.price ? 1 : 0;
                        case "menor-preco":
                            return a.price < b.price ? -1 : a.price > b.price ? 1 : 0;
                        case "ordem-alfabetica":
                            return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
                        default:
                            return 1;
                    }
                });
            }
            return this.$store.getters.getProducts;
            
       }
    },
    data(){
        return {
            perPage: 6,
            page: 1
        }
    }
}
</script>
