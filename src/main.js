// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import firebase from 'firebase'
import * as VueGoogleMaps from 'vue2-google-maps'
import App from './App'
import router from './router'

let app = null

Vue.config.productionTip = false

// wait for firebase auth to init before creating the app

firebase.auth().onAuthStateChanged(() => {
  /* eslint-disable no-new */
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>',
    })
  }
})

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDkee2d7wb8w4pg4aFzcXvQgYM6yLe6i70',
    libraries: 'places',
  },
})
