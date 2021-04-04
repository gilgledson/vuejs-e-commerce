<template>
    <div>
        <h3 class="title-filter">Cores</h3>
        <v-row class="colors-filters">
                <v-col cols="6"  md="4" v-for="(color) in colors" :key="color.name">
                  
                    <v-card class="box-color" :color="color.code" :class="{
                       'active-color': activeColor == color.name
                    }" @click="setActiveColor(color.name)">
                        <v-btn height="20"	width="20"
 class="remove-selection" icon  v-if="activeColor == color.name">
                           <v-icon size="12">mdi-close</v-icon>
                        </v-btn>
                    </v-card>     
                </v-col>
        </v-row>

    </div>
</template>
<script>
import './colors.scss';
export default {
    async mounted(){
        await this.$store.dispatch('getColors');
        this.fetchColor();
    },
    computed:{
        'colors': (state) => state.$store.getters.getColors,
        'activeColor': {
            get () {
               return this.$store.getters.getActiveColor
            },
            set(payload){
                this.$store.commit('setActiveColor', payload)
            } 
        } 
    },
    methods:{
        setActiveColor(name){
            if(this.activeColor != name){
                this.activeColor = name;
                this.$router.push({ query: Object.assign({}, this.$route.query, { color: name }) });
            }else{
                this.activeColor = null;
                let query = Object.assign({}, this.$route.query);
                delete query.color;
                this.$router.replace({ query });
            }
        },
        fetchColor(){
            this.activeColor = null;
            if(this.$route.query && this.$route.query.color){
                let color  = this.colors.findIndex(
                        (e) => e.name == this.$route.query.color
                )
                if(color >= 0){
                    this.activeColor = this.colors[color].name;
                }
            }

        }
    },
    watch: {
        // call again the method if the route changes
        '$route': 'fetchColor'
    }
}
</script>
<style scoped>
.active{
    border: 2px solid #9cceeb;
    box-shadow: none !important;
}
</style>