import Vue from 'vue'
import App from './App.vue'
import { library } from '../node_modules/@fortawesome/fontawesome-svg-core';
import { faChevronRight, faMagnifyingGlass } from '../node_modules/@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faMagnifyingGlass);
library.add(faChevronRight);
Vue.component('FontAwesomeIcon', FontAwesomeIcon);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
