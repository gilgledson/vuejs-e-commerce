<template>
     <v-container class="header-content">
           <v-row v-resize="onResize">
                <v-col   class="d-flex align-center justify-center"
                    v-if="this.windowSize.x <= 680"
                >
                    <v-btn icon class="btn-search" @click="openDrawer()">
                        <v-icon size="30">mdi-menu</v-icon>
                    </v-btn>
                </v-col>
               <v-col   class="d-flex align-self-center justify-center">
                   <img src="@/assets/imgs/logo-webjump-footer.png" class="img-logo" />
               </v-col>
               <v-col  class="d-flex align-center justify-center">
                    <v-btn icon class="btn-search mobile-input-search">
                        <v-icon size="30" color="primary">mdi-magnify</v-icon>
                    </v-btn>
                   <v-row   v-if="this.windowSize.x >= 680">
                       <v-col cols="12" sm="10" md="10" class="d-flex align-self-end col-input-search">
                          
                           <v-text-field
                                required
                                dense	
                                outlined
                                clearable
                                :placeholder="'O que você procura ?'"
                            >
                            <template slot="append">
                              <v-row >
                                  <v-col>
                                    <v-btn icon class="btn-search">
                                        <v-icon>mdi-magnify</v-icon>
                                    </v-btn>
                                  </v-col>
                              </v-row>
                            </template>
                            </v-text-field>
                       </v-col>
                     
                   </v-row>
               </v-col>
           </v-row>
       </v-container>
</template>
<script>
import './content.scss';
export default {
    mounted () {
      this.onResize()
    },
    computed:{
        'drawer':{
            get () {
                return this.$store.getters.getDrawer
            },
            set(payload){
                this.$store.commit('setDrawer', payload)
            } 
        }
    },
    methods: {
      onResize () {
        this.windowSize = { x: window.innerWidth, y: window.innerHeight }
      },
      openDrawer(){
          this.drawer = true;
      }
    },
    data(){
        return {
            windowSize: {
                x: 0,
                y: 0,
            }
        }
    }
}
</script>