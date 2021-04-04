<template>
    <div>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-text>
                        <ul class="filter-menus">
                            <li>
                                <router-link 
                                to="/home"
                                >PÁGINA INICIAL</router-link>
                            </li>
                            <li v-for="(category, key) in categories" :key="key">
                                <router-link 
                                :to="'/products/'+category.path"
                                >{{category.name}}</router-link>
                            </li>
                            <li>
                                <router-link 
                                to="/contact"
                                >CONTATOS</router-link>
                            </li>
                        </ul>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import './sidebar.scss';
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