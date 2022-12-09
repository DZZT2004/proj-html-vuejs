<template>
  <div class="footer">
    <div class="topicsContainer">
      <div class="topic">
        <h3>{{arrayTopics[0]}}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates omnis soluta consequatur beatae modi. 
          Eligendi atque magni quod, aspernatur similique ipsum.
        </p>
      </div>
      <div class="topic"><h3>{{arrayTopics[1]}}</h3><span><font-awesome-icon icon="fa-solid fa-chevron-right" /> {{arraySottoTopics[0]}}</span><hr><span><font-awesome-icon icon="fa-solid fa-chevron-right" /> {{arraySottoTopics[1]}}</span><hr><span><font-awesome-icon icon="fa-solid fa-chevron-right" /> {{arraySottoTopics[2]}}</span><hr><span><font-awesome-icon icon="fa-solid fa-chevron-right" /> {{arraySottoTopics[3]}}</span><hr></div>
      <div class="topic"><h3>{{arrayTopics[2]}}</h3><span><font-awesome-icon icon="fa-solid fa-chevron-right" /> {{arraySottoTopics[0]}}</span><hr><span><font-awesome-icon icon="fa-solid fa-chevron-right" /> {{arraySottoTopics[1]}}</span><hr><span><font-awesome-icon icon="fa-solid fa-chevron-right" /> {{arraySottoTopics[2]}}</span><hr><span><font-awesome-icon icon="fa-solid fa-chevron-right" /> {{arraySottoTopics[3]}}</span><hr></div>
      <div class="topic"><h3>{{arrayTopics[3]}}</h3><span><font-awesome-icon icon="fa-solid fa-chevron-right" /> {{arraySottoTopics[0]}}</span><hr><span><font-awesome-icon icon="fa-solid fa-chevron-right" /> {{arraySottoTopics[1]}}</span><hr><span><font-awesome-icon icon="fa-solid fa-chevron-right" /> {{arraySottoTopics[2]}}</span><hr><span><font-awesome-icon icon="fa-solid fa-chevron-right" /> {{arraySottoTopics[3]}}</span><hr></div>
    </div>
    <hr>
    <footer>
      <span>© Copyright 2012 - 2020 | Avada Theme by <strong>Theme Fusion</strong> | All Rights Reserved | Powered by <strong>WordPress</strong></span>
      <div class="socials">
        <font-awesome-icon class="icona facebook" icon="fa-brands fa-facebook" />
        <font-awesome-icon class="icona twitter" icon="fa-brands fa-twitter" />
        <font-awesome-icon class="icona instagram" icon="fa-brands fa-instagram" />
        <font-awesome-icon class="icona youtube" icon="fa-brands fa-youtube" />
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'FooterPage',
  props: {
    arrayTopics: Array,
    arraySottoTopics: Array,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.topicsContainer{
  display: flex;
  padding: 50px 300px 50px 300px;
  gap: 30px;
  text-align: left;
  .topic{
    flex-basis: 25%;
    display: flex;
    flex-direction: column;
    hr{
      width: 100%;
      border: 1px solid rgb(215, 209, 209);
    }
    p{
      color: #aeaeae;
      letter-spacing: 1.4px;
      line-height: 1.5;
    }
    span{
      letter-spacing: 1.4px;
      line-height: 1.7;
    }
  }
}
hr{
  border: 0;
  border-top: 1px solid rgb(197, 193, 193);
}
footer{
  padding: 50px 300px;
  display: flex;
  justify-content: space-between;
  span{
    margin-top: 20px;
    flex-basis: 60%;
  }
  .socials{
    flex-basis: 30%;
    display: flex;
    .icona{
      color: white;
      width: 25px;
      margin: 0px 10px;
      border-radius: 50%;
      font-size: 24px;
      padding: 20px;
    }
    .facebook{
      background-color: #4562b0;
    }
    .twitter{
      background-color: #6fc2d2;
    }
    .instagram{
      background-color: #516faa;
    }
    .youtube{
      background-color: red;
    }
  }
}
</style>
