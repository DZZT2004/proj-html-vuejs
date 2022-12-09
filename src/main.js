import Vue from 'vue'
import App from './App.vue'
import { library } from '../node_modules/@fortawesome/fontawesome-svg-core';
import { faChevronRight, faMagnifyingGlass, faArrowRight, faFile, faMugSaucer, faCubes, faLaptop, faWrench } from '../node_modules/@fortawesome/free-solid-svg-icons';
import { faApple, faWindows, faAndroid, } from '../node_modules/@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faMagnifyingGlass);
library.add(faChevronRight);
library.add(faArrowRight);
library.add(faFile);
library.add(faMugSaucer);
library.add(faCubes);
library.add(faLaptop);
library.add(faWrench);
library.add(faApple);
library.add(faWindows);
library.add(faAndroid);


Vue.component('FontAwesomeIcon', FontAwesomeIcon);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
