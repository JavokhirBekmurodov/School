<template>
  <div class="news">
    <div class="container" v-for="newItem in news" :key="newItem.id">
      <h1 class="new_title">{{ newItem.title }}</h1>

      <div>
        <img :src="newItem.img" alt class="news__img" />
      </div>
      <div class="col-box">
        

        <p class="news_text">{{newItem.text}}</p>
      </div>
      <p class="border"></p>
    </div>
    <div class="news_footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "./Footer.vue";

export default {
  data() {
    return {
      news: [
        {
          
          img: "https://picsum.photos/550/350",
          title: "Lorem ipsum dolor sit amet consectetur",
          text:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur est sint quo maiores? Obcaecati id ipsa dicta placeat molestiae itaque cum praesentium Doloribus tempora repudiandae odio, corporis ea at repellat voluptate deleniti perferendis architecto iusto, omnis velit accusamus aspernatur doloremque possimus.",
          id: 1
        },
        {
          img: "https://picsum.photos/550/550",
          title: "Lorem ipsum dolor sit amet consectetur",
          text:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur est sint quo maiores? Obcaecati id ipsa dicta placeat molestiae itaque cum praesentium Doloribus tempora repudiandae odio, corporis ea at repellat voluptate deleniti perferendis architecto iusto, omnis velit accusamus aspernatur doloremque possimus.",
          id: 2
        }
      ],
      selectedNew: null
    };
  },

  components: {
    Footer
  }
};
</script>

<style lang="css" scoped>
.container {
  width: 800px !important;
  margin: auto;
}
.new_title {
  font-family: cursive;
  margin: 50px 0 40px 0;
}
.col {
  padding: 0;
  max-height: 450px;
}
.news__img {
  border-radius: 5px;
  width: 100%;
  max-height: 400px;
}
.news__title {
  font-size: 38px;
  padding: 15px;
}
.news_text {
  font-size: 20px;
  padding: 15px;
}
.col-box {
  border-radius: 7px;
}
.row {
  margin-bottom: 20px;
}
.border{
  width: 100%;
  border: 1px;
  margin-top: 50px;
}

@media only screen and (max-width: 1000px) {
  .news__img {
    border-radius: 5px;
    width: 100%;
  }

  .news_footer {
    margin-top: 50px;
  }
  .news__title {
    font-size: 38px;
    padding: 15px;
  }
  .news_text {
    font-size: 20px;
    padding: 15px;
  }
  .col {
    background-color: aliceblue;
    padding: 0;

    max-height: 400px;
  }
}
@media only screen and (max-width: 580px) {
  .container {
  max-width: 300px !important;
  margin: auto;
}
  .news__img {
    border-radius: 5px;
    width: 250px;
    height: 150px;
    display: flex;
    margin-left: 20px;
  }

  .news__title {
    font-size: 32px;
    padding: 15px;
  }
  .news_text {
    font-size: 20px;
    padding: 15px;
  }
  .container {
  width: 400px !important;
  margin: auto;
}
}
@media only screen and (max-width: 380px) {
  .container {
  width: 250px !important;
  margin: auto;
}
  .news__img {
    border-radius: 5px;
    width: 250px;
    height: 150px;
    display: flex;
    margin-left: 10px;
  }

  .news__title {
    font-size: 32px;
    padding: 15px;
  }
  .news_text {
    font-size: 20px;
    padding: 15px;
  }
  .container {
  width: 400px !important;
  margin: auto;
}
}


</style>