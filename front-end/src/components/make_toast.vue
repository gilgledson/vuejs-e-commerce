<template>
    <v-snackbar
      v-model="toastStatus"
      :multi-line="true"
      :color="toastColor"
    >
      {{ toastMessage }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="toastStatus = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
</template>
<script>
import {mapGetters} from "vuex";

export default {
    computed:{
      toastStatus:{
            get() {
                return this.$store.state.toastStatus;
            },
            set(val) {
                this.$store.commit("SET_TOAST_STATUS", val);
            }
      },
      ... mapGetters({
          toastColor: "getToastColor",
          toastMessage: "getToastMessage",
      })
    }
}
</script>