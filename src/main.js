// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRx from 'vue-rx'
import * as VueGoogleMaps from 'vue2-google-maps'
import { $authState, $user } from '@/firebase/init'
import App from './App'
import router from './router'

let app = null

Vue.config.productionTip = true

Vue.use(VueRx)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDkee2d7wb8w4pg4aFzcXvQgYM6yLe6i70',
    libraries: 'places',
  },
})

// wait for firebase auth to init before creating the app

function init() {
  console.debug('initialising bumpmap')
  $authState.subscribe((user) => {
    console.info('$authState change:', user)
  })

  $user.subscribe((user) => {
    console.info('$user change:', user)
  })

  $authState.subscribe(() => {
    /* eslint-disable no-new */
    if (!app) {
      console.debug('authState updated. rendering bumpmap')
      app = new Vue({
        el: '#app',
        router,
        components: { App },
        template: '<App/>',
      })
    }
  })
}

init()
