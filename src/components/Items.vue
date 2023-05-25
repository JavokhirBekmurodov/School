<template>
  
    
      <div class="col box col-lg-3 col-md-6 col-sm-12 col-12">
       
        <h2 class="my-2" >{{box.title}}</h2>
        <p class="my-4">{{box.text}}</p>
      </div>
    
</template>

<script>
export default {
  props: {
    box: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="css" scoped>
.boxs {
  display: flex;
}
.box{
   
   
    max-width: 600px;
    min-width: 300px;
    height: 400px;
    padding: 10px;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgb(110, 103, 241) 0%, rgba(12,198,180,0.876715652081145) 35%, rgba(0,212,255,1) 100%);
   box-shadow: 0px 0px 20px 5px rgb(55, 55, 55);
   border-radius: 5px;
   font-family: cursive;
   padding: 20px;
  


}
@media only screen and (max-width: 768px) {
  .box{
   
   
    max-width: 600px;
    min-width: 300px;
    height: 240px;
    padding: 10px;
  
  


}
}
</style>