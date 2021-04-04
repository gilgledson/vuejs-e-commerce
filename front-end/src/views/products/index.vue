<template>
  <transition name="fade">
    <v-container transition="scroll-x-transition">
      <v-row>
        <v-col>
          <Breadcrumbs :items="pages" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3" sm="4">
          <filters />
        </v-col>
        <v-col cols="12" md="9" sm="8">
          <h1 class="title-page">{{ this.pages[1].text }}</h1>
          <v-divider></v-divider>
          <v-row>
            <v-col cols="4">
              <div class="list-types">
                <v-btn
                  icon
                  @click="setActive(1)"
                  :class="{
                    active: active == 1,
                  }"
                >
                  <v-icon>mdi-view-comfy</v-icon>
                </v-btn>
                <v-btn
                  icon
                  @click="setActive(2)"
                  :class="{
                    active: active == 2,
                  }"
                >
                  <v-icon>mdi-view-list</v-icon>
                </v-btn>
              </div>
            </v-col>
            <v-col cols="8">
               <div class="box-orderBy">
                    <v-row>
                        <v-col cols="5">
                            <p class="select-orderby-label">Ordenar por:</p>
                        </v-col>
                        <v-col cols="7">
                                <select v-model="orderBy"  class="select-orderby">
                                    <option value="">Selecione a opção</option>
                                    <option value="ordem-alfabetica">
                                      Ordem alfabetica
                                    </option>
                                    <option value="menor-preco">Menor Preço</option>
                                    <option value="maior-preco">Maior Preço</option>
                                </select>
                        </v-col>
                    </v-row>
                </div>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <productGrid :products="products" :orderBy="orderBy" />
        </v-col>
      </v-row>
    </v-container>
  </transition>
</template>
<script>
import Breadcrumbs from "../../components/breadcrumbs";
import filters from "../../components/filters";
import productGrid from "../../components/products";
import "./products.css";

export default {
  components: {
    Breadcrumbs,
    filters,
    productGrid
  },
  async mounted() {
    await this.$store.dispatch("getCategories");
    this.fetchData();
  },
  watch: {
    $route: "fetchData",
  },
  methods: {
    setActive(list) {
      this.active = list;
    },
    fetchData() {
      let category = this.$route.params["category"];
      let categoryIndex = this.categories.findIndex((e) => e.path === category);
      if (categoryIndex >= 0) {
        this.category = this.categories[categoryIndex].name;
        this.pages[1].text = this.categories[categoryIndex].name;
        this.pages[1].href = this.categories[categoryIndex].href;
        this.$store.dispatch("getProducts", this.categories[categoryIndex].id);
        this.$forceUpdate();
      }
    },
  },
  computed: {
    categories: (state) => state.$store.getters.getCategories,
    products: (state) =>state.$store.getters.getProducts,
    totalPages(){
      return this.products / this.perPage;
    }
  },
  data() {
    return {
      category: "",
      active: 1,
      orderBy: "",
      pages: [
        {
          text: "Home",
          disabled: false,
          href: "/",
        },
        {
          text: "Categoria",
          disabled: true,
          href: "/products/",
        },
      ],
    };
  },
};
</script>
