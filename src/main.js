/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import App from './App.vue'
import { createPinia } from "pinia";
import { createApp } from 'vue'

const app = createApp(App)
app.use(createPinia()) //

registerPlugins(app)

app.mount('#app')
