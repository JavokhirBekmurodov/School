<template>
  <div class="sec">
    <div class="section">
      <div class="container">
        <div class="main__title">{{ greeting }}</div>
        <br />
      </div>
    </div>
    <Vikipedia />

    <div class="boxs">
      <div class="container">
        <h2 class="h2 text-center">Afzalliklar</h2>
        <div class="row box justify-content-center">
          <Items v-for="box in boxs" :key="box.id" :box="box" />
        </div>
      </div>
    </div>

    <Carousel />
    <Footer />
  </div>
</template>

<script>
import Vikipedia from "./Vikipedia.vue";
import Items from "./Items.vue";
import Carousel from "./Carusel.vue";
import Footer from "./Footer.vue"

export default {
  data() {
    return {
      greeting: "",
      boxs: [
        {
          title: "Ro‘yxatdan o‘tish juda oson!",
          text:
            "Platforma imkoniyatlaridan foydalanish uchun saytdan ro‘yxatdan o‘tish lozim. Bu esa ko‘p vaqt olmaydi. Ro‘yxatdan o‘tish tugmasi orqali formani to‘ldiring va bir necha daqiqada platforma foydalanuvchilari qatoridan joy oling"
        },
        {
          title: "Siz kutgan yo‘nalishlar!",
          text:
            "Bizning videodarslar Siz o‘rganishni istagan yo‘nalishlarni qamrab oladi. O‘quv dasturidan tashqari, zamonaviy bilimlarga ham urg‘u berdik. Bu hali hammasi emas.10-Maktab yana yangidan-yangi videodarslar bilan boyitib boriladi."
        },
        {
          title: "Qiziqarli va foydali kontent!",
          text:
            "10-maktab saytiga xalqaro hamkorlar taqdim etgan interfaol videodarslar bilan birga mahalliy mutaxassislar va tashkilotlar bilan hamkorlikda ishlab chiqilgan sermazmun videoroliklar ham jamlanmoqda. Asosiysi, ushbu foydali kontent hech biringizni qiziqtirmay qo‘ymaydi."
        }
      ]
    };
  },
  components: {
    Vikipedia,
    Items,
    Carousel,
    Footer
  },
  mounted() {
    this.animateGreeting();
  },
  methods: {
    animateGreeting() {
      const greetingText = "Assalomu aleykum Web-sitega hush kelibsiz";
      let index = 0;
      const intervalId = setInterval(() => {
        this.greeting += greetingText[index];
        index++;
        if (index === greetingText.length) {
          clearInterval(intervalId);
        }
      }, 100);
    }
  }
};
</script>

<style lang="css" scoped>
.section {
  background-image: url("../assets/photo_2023-04-18_22-09-24.jpg");
  background-size: cover;
  width: 100%;
  height: 90vh;
  background-color: rgba(0, 0, 0, 0.15);
}
.main__title {
  text-align: center;
  max-width: 600px;
  font-size: 50px;
  margin: auto;
  padding-top: 15%;
}

.box {
  gap: 10px;
  margin: 10px;
  margin-top: 50px;
}
.h2 {
  font-size: 40px;
  font-family: cursive;
  margin-bottom: 0;
}
.boxs {
  background-image: url("../assets/black-white-background-vector-with-wax-melted-crayon-art_53876-125686.avif");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 700px;
  margin-top: 0;
  margin-bottom: 0;
}

@media only screen and (max-width: 768px) {
  .h2 {
    font-size: 30px;
  }
  .main__title {
    text-align: center;
    max-width: 500px;
    font-size: 50px;
    margin: auto;
    padding-top: 15%;
  }
  .section {
    background-image: url("../assets/photo_2023-04-20_13-43-42.jpg");
    background-size: cover;
    width: 100%;
    height: 90vh;
    background-color: rgba(0, 0, 0, 0.15);
  }
}
</style>