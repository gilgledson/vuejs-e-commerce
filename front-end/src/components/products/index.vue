<template>
    <div>
        <listProducts :products="products" :orderBy="orderBy" />
    </div>
</template>

<script>
import listProducts from "./list";

export default {
    components:{
        listProducts
    },
    props:['products', 'orderBy']
}
</script>