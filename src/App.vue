<template>
  <div id="app">
    <HeaderPage :arrayNav="arrNav"/>
    <MainPage/>
    <FooterPage :arrayTopics="arrTopics" :arraySottoTopics="arrSottoTopics"/>
  </div>
</template>

<script>
import HeaderPage from './components/HeaderPage.vue'
import MainPage from './components/MainPage.vue'
import FooterPage from './components/FooterPage.vue'

export default {
  name: 'App',
  components: {
    HeaderPage,
    MainPage,
    FooterPage
  },
  data() {
       return {
          arrNav: ['Home','Apple','Microsoft','Android','Forums','Contact us','JOIN US'],
          arrTopics: ['AVADA TECH FORUM', 'POPULAR TOPICS', 'RECENT TOPICS', 'LATEST REPLIES'],
          arrSottoTopics: ['Lorem ipsum dolor sit amet consectetur adipisicing elit','Voluptates omnis soluta consequatur beatae modi.', 'Eligendi atque magni quod, aspernatur similique ipsum', 'repellendus exercitationem minima est voluptates, ad fugiat assumenda vero']

       }
   },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
