<template>
    <div class="navbar-menu">
        <v-container>
          <ul class="menu-links">
              <li>
                   <router-link to="/home">PÁGINA INICIAL</router-link>
              </li>
              <li>
                   <router-link to="/products/camisetas">CAMISETAS</router-link>
              </li>
              <li>
                   <router-link to="/products/calcas">CALÇAS</router-link>
              </li>
              <li>
                   <router-link to="/products/sapatos">SAPATOS</router-link>
              </li>
              <li>
                   <router-link to="/contact">CONTATOS</router-link>
              </li>
          </ul>
        </v-container>
    </div>
</template>
<script>
import './menu.scss';
export default {
    
}
</script>