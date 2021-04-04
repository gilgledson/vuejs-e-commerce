<template>
    <div>
        <h3 class="title-filter">Tipos</h3>
        <ul class="filter-menus">
            <li v-for="gender in genders" :key="gender.code">
                <a :class="{'active': activeGender == gender.code}" @click="setType(gender.code)">{{gender.name}}</a>
            </li>
        </ul>
    </div>
</template>
<script>
import './types.css';
export default {
    
    async mounted(){
        await  this.$store.dispatch('getGender'); 
        this.fetchGender();
    },
    watch: {
        '$route': 'fetchGender'
    },
    methods:{
        fetchGender(){
            this.activeGender = null;
            if(this.$route.query && this.$route.query.gender){
                let color  = this.genders.findIndex(
                        (e) => e.code == this.$route.query.gender
                )
                if(color >= 0){
                    this.activeGender = this.genders[color].code;
                }
            }

        },
        setType(code){
           if(this.activeGender != code){
                this.activeGender = code;
                this.$router.push({ query: Object.assign({}, this.$route.query, { gender: code }) });
            }else{
                this.activeGender = null;
                this.activeColor = null;
                let query = Object.assign({}, this.$route.query);
                delete query.gender;
                this.$router.replace({ query });
            }
        }
    },
    computed:{
        'genders': (state) => state.$store.getters.getGender,
        'activeGender': {
            get () {
               return this.$store.getters.getActiveGender
            },
            set(payload){
                this.$store.commit('setActiveGender', payload)
            } 
        } 
    },
}
</script>