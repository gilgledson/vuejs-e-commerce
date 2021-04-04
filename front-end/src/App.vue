<template>
  <div id="app">
    <v-app  v-resize="onResize">
      <v-navigation-drawer 
        clipped 
        v-model="drawer"
        overlay-color="primary"
        disable-resize-watcher	
        app>
        <v-list nav dense>
          <v-list-item-group>
            <v-list-item  to="/">
              <v-list-item-title class="title-mobile-menu">PÁGINA INICIAL</v-list-item-title>
            </v-list-item>
            <v-list-item v-for="(category, key) in categories" :key="key" :to="'/products/'+category.path">
              <v-list-item-title class="title-mobile-menu" >{{category.name}}</v-list-item-title>
            </v-list-item>
            <v-list-item  to="/contact">
              <v-list-item-title class="title-mobile-menu">CONTATOS</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <headerComponent />
        <transition :name="transitionName">
            <router-view/>
        </transition>
        <footerComponent />
      </v-main>
    </v-app>
  </div>
</template>
<script>
import headerComponent from './components/layout/header';
import footerComponent from './components/layout/footer';
import "./assets/css/theme.scss";
import {mapActions} from 'vuex';

export default {
    components:{
      headerComponent,
      footerComponent
    },
    created(){
      this.$store.dispatch("setWindowSize");
      this.$store.dispatch("getCategories");
    },
    methods:{
      ...mapActions({
        'onResize': 'setWindowSize'
      })
    },
    computed:{
      mini() {
        return this.$vuetify.breakpoint.mdAndDown;
      },

      'categories': (state) => state.$store.getters.getCategories ,
      'drawer':{
        get () {
          return this.$store.getters.getDrawer
        },
        set(payload){
          this.$store.commit('setDrawer', payload)
        } 
      },
      'windowSize':{
        get () {
          return this.$store.getters.getWindowSize
        },
        set(payload){
          this.$store.commit('setWindowSize', payload)
        } 
      }
    },
    watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    },
    data(){
        return {
            transitionName: ''
        }
    }
}
</script>
<style lang="scss">
@import "./assets/css/theme.scss";
@import url("//fonts.googleapis.com/css?family=Open+Sans");
//open-sans-extrabold.ttf
@font-face {
    font-family: 'OpenSansBold';
    src: url('./assets/fonts/open-sans-extrabold.ttf');
}
.title-mobile-menu{
  text-align: left;
  text-transform: uppercase;
}
#app {
  font-family: "OpenSansBold";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
