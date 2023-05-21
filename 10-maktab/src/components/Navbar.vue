<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light section">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img
          src="../assets/unnamed.png"
          alt
          @click="home"
          class="navbar-img"
        />
        <br />
        <b>10-Maktab</b>
      </a>
      <button
        @click="toggleMenu"
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav" :class="{ show : isMenuOpen }">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Bosh sahifa</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">Biz haqimizda</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Odob-axloq</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/news" class="nav-link">Yangiliklar</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Kirish</router-link>
          </li>
        </ul>
      </div>
    </div>
    <a href="#" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
      <img src="../assets/imgs/arrow-up-circle-fill.svg" class="imgs" alt />
    </a>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      name: "Navbar",
      isMenuOpen: false,
      links: [
        { name: "home", title: "Bosh sahifa" },
        { name: "about", title: "Biz haqimizda" },
        { name: "contact", title: "Odob-axloq" },
        { name: "news", title: "Yangiliklar" },
        { name: "aloqa", title: "Kirish" }
      ],
      routes: {
        home: "/",
        about: "/about",
        contact: "/contact",
        news: "/news",
        aloqa: "/login"
      }
    };
  },
  methods: {
    home() {
      return this.$router.push("/");
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<style lang="css" scoped>
.navbar {
  background-color: white;
  z-index: 99;
}
.section {
  box-shadow: 0px 0px 20px 5px rgb(95, 94, 94);
  position: initial;
  z-index: 99;
  background-color: white;
}
.nav-list {
  list-style: none;
  align-self: center;
}
.nav-link {
  font-family: cursive;
  transition: 0.5s;
  font-weight: 600;
}
.nav-link:hover {
  transform: scale(0.8);
}
.navbar-img {
  width: 60px;
  margin-left: 22px;
}

.btn {
  display: none;
}
.imgs {
  width: 60px;
  height: 60px;
  color: rgb(249, 249, 249);

  padding: 10px;
  position: fixed;

  right: 25px;
  bottom: 60px;
}

@media only screen and (max-width: 1000px) {
  .nav-list {
    display: flex;
    flex-direction: column;
  }

  .nav-link {
    padding-top: 10px;
  }

  .btn {
    display: inline;
  }
}
</style>