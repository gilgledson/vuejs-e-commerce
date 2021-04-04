import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      colors:[],
      gender:[],
      links:[],
      categories:[],
      products:[],
      activeColor: null,
      activeGender: null, 
      currentPage: 1,
      perPage: 4,
      drawer: false,
      windowSize: {
        x:0,
        y:0
      }
    },
    actions:{
      setDrawer({commit}, payload){
        commit('setDrawer', payload)
      },
      setWindowSize({commit}){
        let payload = { x: window.innerWidth, y: window.innerHeight }
        commit('setWindowSize', payload);
      },
      async getProducts({commit}, payload){
        let {data} = await Vue.axios.get(`/V1/categories/${payload}`);
        commit('setProducts', data.items);
      },
      async getColors({commit}){
        let {data} = await Vue.axios.get('/V1/colors');
        commit('setColors', data);
      },
      async getCategories({commit}){
        let {data} = await Vue.axios.get('/V1/categories/all');
        commit('setCategories', data.items);
      },
      async getGender({commit}){
        let {data} = await Vue.axios.get('V1/gender');
        commit('setGender', data);
      },

    },
    getters:{
      getColors(state){
        return state.colors;
      },
      getDrawer(state){
        return state.drawer;
      },
      getCategories(state){
        return state.categories;
      },
      getGender(state){
        return state.gender;
      },
      getProducts(state){
        let products = state.products.filter(product  =>{
          let filter = true;
          //filtrando a cor
          if(state.activeColor != null){
            filter = product['filter'].find(e => {
              if(e.color == undefined) return false;
              if(e.color.toUpperCase() == state.activeColor.toUpperCase()) return true;
            });
          }
          //filtrando o tipo
          if(state.activeGender != null && filter){
            filter = product['filter'].find(e => {
              if(e.gender == undefined) return false;
              console.log(state.activeGender.toUpperCase()+':',e.gender.toUpperCase())
              if(e.gender.toUpperCase() == state.activeGender.toUpperCase()) return true;
            });
          }
          return filter ? product : null;
        });

        return products;
      },
      getActiveColor(state){
        return state.activeColor;
      },
      getActiveGender(state){
        return state.activeGender;
      },
      getWindowSize(state, payload){
        state.windowSize = payload;
      },
    },
    mutations:{
      setWindowSize(state, payload){
        state.windowSize = payload;
      },
      setProducts(state, payload){
        state.products = payload;
      },
      setColors(state, payload){
        state.colors = payload;
      },
      setCategories(state, payload){
        state.categories = payload;
      },
      setActiveColor(state, payload){
        state.activeColor = payload;
      },
      setDrawer(state, payload){
        state.drawer = payload;
      },
      setActiveGender(state, payload){
        state.activeGender = payload;
      },
      setGender(state, payload){
        state.gender = payload;
      }
    }
})