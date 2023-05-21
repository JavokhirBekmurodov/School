<template>
  <div class="about">
    <div class="container">
      <h2 class="about-title text-center">Biz haqimizda</h2>
      <div class="row">
        <div class="about-text d-flex justify-content-between">
          <div class="col-6">
            Biz Sirdaryo Viloyati Boyovut tumanidagi 10-sonli umum ta'lim maktabimiz,
            <br />
            <br />Bizning maktab haqida malumotlar:
            <br />
            <p>
              Umumiy ishchilar soni: 71 ta
              <br />O'qituvchilar soni 47 ta
              <br />O'quchilar soni 450 ta
              <br />Maktab binosi: 2 ta
              <br />Sportzal: 1ta
              <br />Futdbol maydoni: 1ta
              <br />Mini Futdbol maydonchasi: 2 ta
              <br />Voleybol maydonchasi: 1ta
              <br />Basketball maydonchasi: 1ta
              <br />Maktab oshxonasi: 1ta
              <br />
            </p>
          </div>
          <map name="map" class="map col-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.6170819621852!2d69.03990237573079!3d40.37301417144662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b1f1bd37855eb9%3A0x1ab1368b1c3ecbd4!2z0JHQvtCx0L7RjtGA0YI!5e0!3m2!1sru!2s!4v1682156323706!5m2!1sru!2s"
              style="border:0;"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </map>
        </div>
      </div>
      <div class="about-imgs">
        <h2 class="text-center about-imgs-title my-5">Rasmlar...</h2>
        <div class="row d-flex imgs">
          <img src="../assets/imgs/photo_2023-04-20_17-59-40.jpg" class="col-3" alt />
          <img src="../assets/imgs/photo_2023-04-20_18-00-13.jpg" class="col-3" alt />
          <img src="../assets/imgs/photo_2023-04-20_18-00-18.jpg" class="col-3" alt />
          <img src="../assets/imgs/photo_2023-04-20_18-00-29.jpg" class="col-3" alt />
          <img src="../assets/imgs/photo_2023-04-20_18-00-32.jpg" class="col-3" alt />
          <img src="../assets/imgs/photo_2023-04-20_18-00-35.jpg" class="col-3" alt />
          <img src="../assets/imgs/photo_2023-04-20_18-00-40.jpg" class="col-3" alt />
          <img src="../assets/imgs/photo_2023-04-20_18-00-43.jpg" class="col-3" alt />
        </div>

        <RouterLink :to="{name:'imgs'}">
          <button class="btn about-btn">Ko'roq rasmlar</button>
        </RouterLink>
      </div>
      <RouterLink :to="{name:'malumotlar'}">
        <button class="btn about-btn btns">O'qituchilar haqid malumotlar</button>
      </RouterLink>
    </div>

    <Footer />
  </div>
</template>

<script>
import Malumotlar from "./Malumotlar.vue";

import Footer from "./Footer.vue";
import Imgs from "./Imgs.vue";
export default {
  components: {
    Footer,
    Imgs,
    Malumotlar
  }
};
</script>

<style lang="css" scoped>
.about {
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
}
.about-text {
  border: 1px solid black;
  width: 90%;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 5px rgb(95, 94, 94);
  margin-top: 40px;
  padding: 30px;
  position: relative !important;
  display: flex;
  column-gap: 50px;
  justify-content: space-between;
}
iframe {
  width: 450px;
  border-radius: 10px;
  height: 500px;
}
.about-title {
  font-size: 40px;
  font-family: cursive;
  padding-top: 140px;
}
img {
  min-width: 330px;
  max-width: 400px;
  height: 250px;
  border: 1px;
  border-radius: 7%;
}
.imgs {
  row-gap: 10px;
  justify-content: center;
}
.about-imgs-title {
  font-size: 32px;
  font-family: cursive;
}
.about-btn {
  border: 1px solid;
  font-family: cursive;
  margin-right: 0;
  margin-top: 20px;
  transition: 0.5s;
}
.about-btn:hover {
  box-shadow: 0px 10px 20px 5px rgb(95, 94, 94);
}


@media only screen and (max-width: 1200px) {
  iframe {
    width: 100%;

    height: 500px;
  }
  .about-text {
    border: 1px solid black;
    width: 90%;
    margin: auto;
    border-radius: 10px;
    box-shadow: 0px 0px 20px 5px rgb(95, 94, 94);
    margin-top: 40px;
    padding: 30px;
    position: relative !important;
    display: flex;
    flex-direction: column;
    column-gap: 20px;
    justify-content: space-between;
  }
  .map {
    margin: auto;
  }
}
@media only screen and (max-width: 770px) {
  iframe {
    width: 100%;

    height: 400px;
  }
  .map {
    margin: auto;
  }
}
</style>