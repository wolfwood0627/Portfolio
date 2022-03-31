<template>
  <div class="header">
    <div class="header-inner">
      <h1>
        <router-link to="/" class="title">Tsuyoshi's Portfolio</router-link>
      </h1>
      <Nav class="nav"></Nav>
    </div>
  </div>
</template>

<script>
import Nav from "./NavCom.vue";
export default {
  data() {
    return {
      title: "ヘッダー",
    };
  },
  components: {
    Nav,
  },
  methods: {
    clickSmoothScroll(x) {
      event.preventDefault();
      this.$SmoothScroll(document.querySelector(x), 800, null, null, "y");
    },
  },
};
</script>

<style>
.header {
  background-color: #03111a;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
}
.header-inner {
  margin-left: 5%;
  margin-right: 5%;
  display: flex;
}
.title {
  color: whitesmoke;
  padding: 20px 0px;
  margin: unset;
  cursor: pointer;
}
.nav {
  margin: auto;
  margin-right: 0;
  padding: auto;
}
</style>
