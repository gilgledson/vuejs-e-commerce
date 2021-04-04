<template>
    <div>
        <h3 class="title-filter">Categorias</h3>
        <ul class="filter-menus">
            <li v-for="(category, key) in categories" :key="key">
                <router-link 
                :to="'/products/'+category.path"
                >{{category.name}}</router-link>
            </li>
        </ul>

    </div>
</template>
<script>
import './categories.scss';
export default {
    computed:{
        'categories': (state) => state.$store.getters.getCategories       
    },
    mounted(){
        this.activePath = this.$route.path;
        console.log(this.activePath);
    },
    methods: {
        setActvieCategory(val){
            this.activePath = val.path;
            console.log(this.activePath);
        }
    },
    data(){
        return {
            'activePath': ''
        }
    },
    watch:{
        '$route':'setActvieCategory'
    }
}
</script>