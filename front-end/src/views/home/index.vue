<template>
  <div class="home-content">
     <v-row>
              <v-col cols="3" class="sidemenu-home">
                  <sidebar />
              </v-col>
              <v-col cols="12" sm="8" md="8" class="col-content">
                  <v-row>
                      <v-col>
                          <div class="slide-home">

                          </div>
                      </v-col>
                  </v-row>
                  <v-row>
                      <v-col>
                          <div class="content-text">
                              <h2 class="title-content">Seja Bem-vindo</h2>
                              <p class="text-content-home">
                                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                              </p>
                              <p class="text-content-home">
                                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                              </p>
                          </div>
                      </v-col>
                  </v-row>
              </v-col>
          </v-row>
  </div>
</template>

<script>

import sidebar from '../../components/sidebar';
import './home.css';
export default {
  name: 'Home',
  components:{
      sidebar
  }
}
</script>
