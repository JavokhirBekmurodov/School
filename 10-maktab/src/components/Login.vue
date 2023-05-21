<template>
  <form class="w-25 m-auto form align-items-center ">
   
    <h1 class="h3 mb-3 fw-normal text-center">Iltimos ro'yxatdan o'ting</h1>

    <div class="form-floating my-3">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating my-3">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
      <label for="floatingPassword">Password</label>
    </div>

    
    <button class="w-100 btn btn-lg btn-primary" type="submit">Kirish</button>
    <p class="mt-5 mb-3 text-body-secondary">© 2023</p>
  </form>
</template>

<script>

export default {
  

}
</script>

<style lang="css" scoped >
.form{
  min-width: 270px;
  max-width: 320px;
  padding-top: 7%;
 
}

</style>