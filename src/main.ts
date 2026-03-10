import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronUp, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'
import App from './App.vue'
import './assets/style.css'
import { revealDirective } from './directives/reveal'

library.add(faChevronUp, faLocationDot, faInstagram)

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.directive('reveal', revealDirective)
app.use(createPinia())
app.use(router)
app.mount('#app')
