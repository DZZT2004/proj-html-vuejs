<template>
  <div id="app">
    <HeaderPage :arrayNav="arrNav"/>
    <MainPage/>
    <FooterPage/>
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
          arrNav: ['Home','Apple','Microsoft','Android','Forums','Contact us','JOIN US']
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
