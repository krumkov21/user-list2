<template>
  <v-container class="text-center py-10">
    <v-row justify="center">
      <v-col cols="12">
        <v-img src="@/assets/logo.svg" height="200" class="my-6" contain />
      </v-col>

      <v-col cols="12" md="8">
        <h1 class="text-h4 font-weight-bold mb-3">Welcome to Vuetify</h1>
        <p class="text-body-1">
          For help and collaboration with other Vuetify developers,<br />
          please join our online
          <a href="https://community.vuetifyjs.com" target="_blank"
            >Discord Community</a
          >
        </p>
      </v-col>

      <!-- What's Next -->
      <v-col cols="12" class="mt-10">
        <h2 class="text-h5 font-weight-bold mb-3">What's next?</h2>
        <div class="d-flex flex-wrap justify-center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="mx-3 text-body-2"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </div>
      </v-col>

      <!-- Important Links -->
      <v-col cols="12" class="mt-10">
        <h2 class="text-h5 font-weight-bold mb-3">Important Links</h2>
        <div class="d-flex flex-wrap justify-center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="mx-3 text-body-2"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </div>
      </v-col>

      <!-- Ecosystem -->
      <v-col cols="12" class="mt-10">
        <h2 class="text-h5 font-weight-bold mb-3">Ecosystem</h2>
        <div class="d-flex flex-wrap justify-center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="mx-3 text-body-2"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      { text: "github", href: "https://github.com/vuetifyjs/vuetify" },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      { text: "Documentation", href: "https://vuetifyjs.com" },
      { text: "Chat", href: "https://community.vuetifyjs.com" },
      { text: "Made with Vuetify", href: "https://madewithvuejs.com/vuetify" },
      { text: "Twitter", href: "https://twitter.com/vuetifyjs" },
      { text: "Articles", href: "https://medium.com/vuetify" },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/layout/pre-defined",
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
};
</script>
