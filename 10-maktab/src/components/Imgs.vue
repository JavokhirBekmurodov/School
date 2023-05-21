<template>
  <div class="section">
    <div class="container">
    <h2 class="section_title">Yodda qolarli rasmlar...</h2>
      <div class="section-imgs row justify-content-center">
        <img src="../assets/imgs/photo_2023-04-20_17-59-40.jpg" class="col-4" alt />
        <img src="../assets/imgs/photo_2023-04-20_18-00-13.jpg" class="col-4" alt />
        <img src="../assets/imgs/photo_2023-04-20_18-00-18.jpg" class="col-4" alt />
        <img src="../assets/imgs/photo_2023-04-20_18-00-29.jpg" class="col-4" alt />
        <img src="../assets/imgs/photo_2023-04-20_18-00-32.jpg" class="col-4" alt />
        <img src="../assets/imgs/photo_2023-04-20_18-00-35.jpg" class="col-4" alt />
        <img src="../assets/imgs/photo_2023-04-20_18-00-40.jpg" class="col-4" alt />
        <img src="../assets/imgs/photo_2023-04-20_18-00-43.jpg" class="col-4" alt />
        <img src="../assets/imgs/photo_2023-04-20_18-01-09.jpg" class="col-4" alt />
        <img src="../assets/imgs/photo_2023-04-20_18-01-23.jpg" class="col-4" alt />
        <img src="../assets/imgs/photo_2023-04-20_18-01-49.jpg" class="col-4" alt />
        <img src="../assets/imgs/photo_2023-04-20_18-02-09.jpg" class="col-4" alt />
        <img src="../assets/imgs/photo_2023-04-20_18-02-17.jpg" class="col-4" alt />
        <img src="../assets/imgs/photo_2023-04-20_18-02-34.jpg" class="col-4" alt />
        <img src="../assets/imgs/photo_2023-04-20_18-02-39.jpg" class="col-4" alt />
        <img src="../assets/imgs/photo_2023-04-20_18-02-43.jpg" class="col-4" alt />
        <img src="../assets/imgs/photo_2023-04-20_18-02-49.jpg" class="col-4" alt />
        <img src="../assets/imgs/photo_2023-04-20_18-03-04.jpg" class="col-4" alt />
        <img src="../assets/imgs/photo_2023-04-20_18-03-15.jpg" class="col-4" alt />
        <img src="../assets/imgs/photo_2023-04-20_18-03-15.jpg" class="col-4" alt />
        <img src="../assets/imgs/photo_2023-04-20_18-03-19.jpg" class="col-4" alt />
        <img src="../assets/imgs/photo_2023-04-20_18-03-22.jpg" class="col-4" alt />
        <img src="../assets/imgs/photo_2023-04-20_18-03-25.jpg" class="col-4" alt />
        <img src="../assets/imgs/photo_2023-04-20_18-03-41.jpg" class="col-4" alt />
        <img src="../assets/imgs/photo_2023-04-20_18-03-44.jpg" class="col-4" alt />
        <img src="../assets/imgs/photo_2023-04-20_18-03-48.jpg" class="col-4" alt />
        <img src="../assets/imgs/photo_2023-04-20_18-03-54.jpg" class="col-4" alt />
        <img src="../assets/imgs/photo_2023-04-20_18-03-59.jpg" class="col-4" alt />
        <img src="../assets/imgs/photo_2023-04-20_18-04-05.jpg" class="col-4" alt />
        <img src="../assets/imgs/photo_2023-04-20_18-04-19.jpg" class="col-4" alt />
        <img src="../assets/imgs/photo_2023-04-20_18-04-27.jpg" class="col-4" alt />
        <img src="../assets/imgs/photo_2023-04-20_18-04-57.jpg" class="col-4" alt />
        <img src="../assets/imgs/photo_2023-04-20_18-05-04.jpg" class="col-4" alt />
        <img src="../assets/imgs/photo_2023-04-20_18-05-08.jpg" class="col-4" alt />
        <img src="../assets/imgs/photo_2023-04-20_18-05-13.jpg" class="col-4" alt />
        <img src="../assets/imgs/photo_2023-04-20_18-05-24.jpg" class="col-4" alt />
        <img src="../assets/imgs/photo_2023-04-20_18-05-31.jpg" class="col-4" alt />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue"
export default {
  components :{
    Footer,
  }
};
</script>

<style lang="css" scoped>
.section{
  margin-top: 70px;
  
}
.section_title{
  color: #1f302d;
  font-family: cursive;
  font-weight: 500;
  margin-bottom: 50px;
}
img {
  
  justify-content: center;
  min-width: 330px;
  max-width: 400px;
  height: 250px;
  border: 1px;
  border-radius: 7%;
  margin-top:15px ;
}
section-imgs{
  row-gap: 10px;
  
  
}




</style>