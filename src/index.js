import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'

import State from './state'
import Inherit from './plugins/Inherit'

Vue.use(VueRouter)
Vue.use(Inherit('$state'))

new Vue({
  el: document.getElementById('app'),
  render: h => h(App),
  $state: new State({
    // @todo
  }),
})
