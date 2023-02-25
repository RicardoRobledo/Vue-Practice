import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

// Create a new store instance.
const store = createStore({
  state: {
    numc: '',
    nomc: '',
    ed: '',
    sem: '',
    ca: '',
    matagr: '',
    matesp: '',
    actext: '',
  },
  mutations: {
    enviarNomc(state, nomc) {
        state.nomc = nomc
    },
    enviarNumc(state, numc) {
        state.numc = numc
    },
    enviarEd(state, ed) {
        state.ed = ed
    },
    enviarSem(state, sem) {
        state.sem = sem
    },
    enviarCa(state, ca) {
        state.ca = ca
    },
    enviarMatagr(state, matagr) {
        state.matagr = matagr
    },
    enviarMatesp(state, matesp) {
        state.matesp = matesp
    },
    enviarActexp(state, actext) {
        state.actext = actext
    }
  }
  
})

app.use(router)
app.use(store)

app.mount('#app')
