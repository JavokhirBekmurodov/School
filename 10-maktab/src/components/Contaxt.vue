<template>
  <div class="boxs">
    <div class="container m-auto">
    <h2 class="text-center">Odob-axloq qoidalari</h2>
      <div class="row box ">
        <div class="col-lg-6 ">
          <a href="https://www.maktab.uz/img/439dce7f77fc0585a48a2ae848c59357.pdf">
            <p class="row__title">
              Umumiy o‘rta ta’lim muassasalarining
              ichki tartib va odob-axloq qoidalari(pdf)
            </p>
          </a>
        </div>
        <div class="col-lg-6">
          <a href="https://www.maktab.uz/img/83ecb21cb19225aa785c34df592ae743.m4v">
            <p class="row__title">
              Umumiy o‘rta ta’lim muassasalarining
              ichki tartib va odob-axloq qoidalari(videorolik)
            </p>
          </a>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";
export default {
  components: {
    Footer
  }
};
</script>

<style lang="css" scoped>
.boxs {
  margin-top: 150px;
}
h2{
  font-family: cursive;
  font-weight: 600;
  margin: 50px;
}
.box {
  display: flex;
  justify-content: space-between;
  color: #000;
}

.row__title {
  width: 290px;
  height: 200px;
  border-radius: 5px;
  box-shadow: 0px 10px 20px 5px rgb(95, 94, 94);
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgb(177, 177, 184) 0%,
    rgba(169, 210, 206, 0.877) 35%,
    rgb(178, 229, 239) 100%
  );
  padding: 30px;
  font-size: 22px;
  margin: auto;
  color: #241c1c;
  font-weight: 600;
  
}
a {
  text-decoration: none;
}
.container{
  width: 800px !important;
  margin: auto !important;
}
@media only screen and (max-width: 1000px) {
  h2{
  margin: 1px;
}
.container{
  width: 400px !important;
  margin: auto !important;
}
.row__title {
  margin-top: 40px;
}
}
</style>