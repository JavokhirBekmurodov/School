<template>
    <div class="app">
      <Navbar />
       <RouterView />
    </div>

   
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components:{
    Navbar,
  }

}
</script>

<style lang="css" scoped>


</style>