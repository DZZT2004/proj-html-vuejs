<template>
  <div class="header">
    <img src="../assets/logo.png" alt="errore">
    <nav>
        <a href="">{{arrayNav[0]}}</a>
        <a href="">{{arrayNav[1]}}</a>
        <a href="">{{arrayNav[2]}}</a>
        <a href="">{{arrayNav[3]}}</a>
        <a href="">{{arrayNav[4]}}</a>
        <a href="">{{arrayNav[5]}}</a>
        <button>{{arrayNav[6]}}</button>
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="lente"/>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HeaderPage',
  props: {
    arrayNav: Array,
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header{
    display: flex;
    background-color: #27aabe;
    padding: 15px 300px 10px 300px;
    justify-content: space-between;
    nav{
        display: flex;
        gap: 20px;
        flex-basis: 70%;
        text-align: end;
        margin-left: 400px;
        align-self: center;
        a{
            text-decoration: none;
            color: white;
        }
        button{
            background-color: black;
            color: white;
            padding: 5px 10px;
            position: relative;
            bottom: 5px
        }
        .lente{
            color: white;
        }
    }
}
</style>
