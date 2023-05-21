<template>
  <div class="new__container" v-if="newItem">
    <div class="container">
      <div class="new__header">
        <h1 class="new__title">{{ newItem.title }}</h1>
        <button class="new__close-btn" @click="$emit('close')">
          <i class="fas fa-times">x</i>
        </button>
      </div>
      <div class="new__content">
        <img :src="newItem.img" alt class="new__img" />
        <p class="new__text">{{ newItem.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    newItem: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="css" scoped>


.new__container {
  width: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top:0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);
  
}
.container{
  max-width: 800px;
}
i{
  position: fixed;
  right: 50px;
}

.new__header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  
}

.new__title {
  font-size: 2rem;
  color: #fff;
  text-align: center;
  margin: auto;
  margin-top: 50px;
}

.new__close-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  color: #fff;
}

.new__content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  
}

.new__img {
  width: 100%;
  max-width: 500px;
  margin-bottom: 1.5rem;
}

.new__text {
  font-size: 1.2rem;
  color: #fff;
  text-align: justify;
  line-height: 1.5;
}
@media only screen and (max-width: 1000px) {
 .new__header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  padding-top: 100px ;
}
}
</style>