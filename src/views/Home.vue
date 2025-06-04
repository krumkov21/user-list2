<template>
  <v-container class="py-10">
    <v-row justify="center">
      <v-col cols="12" md="8" class="text-center">
        <HelloWorld msg="Welcome to Your Vuetify 3 App" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
