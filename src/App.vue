<template>
  <v-app>
    <!-- App Bar -->
    <v-app-bar color="primary" dark>
      <v-toolbar-title>Vuetify Dashboard</v-toolbar-title>
      <v-spacer />
      <v-btn
        v-for="link in links"
        :key="`${link.label}-header-link`"
        variant="text"
        rounded
        :to="link.url"
      >
        {{ link.label }}
      </v-btn>
    </v-app-bar>

    <!-- Main Content -->
    <v-main>
      <router-view />
    </v-main>

    <!-- Footer -->
    <v-footer color="primary" class="d-flex flex-column align-center pa-4">
      <div class="d-flex flex-wrap justify-center">
        <v-btn
          v-for="link in links"
          :key="`${link.label}-footer-link`"
          color="white"
          variant="text"
          rounded
          class="ma-2"
          :to="link.url"
        >
          {{ link.label }}
        </v-btn>
      </div>
      <div class="text-white text-center mt-2">
        {{ new Date().getFullYear() }} — <strong>Vuetify Tables</strong>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      links: [
        { label: 'Home', url: '/' },
        { label: 'Login', url: '/login' },
        { label: 'Signup', url: '/signup' },
        { label: 'Table 1', url: '/table1' }
      ]
    }
  }
}
</script>
