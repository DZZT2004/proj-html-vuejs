<template>
  <div class="corpo">
    <div class="techForum">
        <h1>Tech Forum!</h1>
        <h4>Discuss all the latest technology news and trends</h4>
        <button>GET AVADA NOW! <font-awesome-icon icon="fa-solid fa-chevron-right" /></button>
    </div>
    <div class="avadaForum">

    </div>
    <div class="latestNews">
        
    </div>
    <div class="blog">
        
    </div>
    <div class="forumSections">
        
    </div>
    <div class="ourForum">
        
    </div>
    <div class="ourCommunity">
        
    </div>
    <div class="ourNewsletter">
        
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.techForum{
    padding: 280px 450px 350px 400px;
    background-image: url(../assets/home_slider_bg.jpg);
    background-repeat: no-repeat;
    text-align: left;
    color: white;
    h1{
        font-size: 80px;
        margin-bottom: 10px;
    }
    button{
        background-color: #27aabe;
        color: white;
        padding: 10px 15px;
        border: none;
        font-weight: bold;
        margin-top: 10px;
    }
}
</style>
