<template>
  <div>
    <a><router-link to="/" class="header_link">Home</router-link></a>
    <a><router-link to="/Profile" class="header_link">Profile</router-link></a>
    <a><router-link to="/Gallery" class="header_link">Gallery</router-link></a>
    <a><router-link to="/Skills" class="header_link">Skills</router-link></a>
    <a><router-link to="/Contact" class="header_link">Contact</router-link></a>
  </div>
</template>

<script>
export default {
  methods: {
    clickSmoothScroll(x) {
      event.preventDefault(),
        this.$SmoothScroll(document.querySelector(x), 800, null, null, "y");
    },
  },
};
</script>

<style>
/*.nav-button{
  padding:10px;
  text-decoration: none;
  border-radius: 5px;
  margin-right:10px;
  margin-left: 10px;
  outline: none;
  color: whitesmoke;
}*/
.header_link {
  position: relative;
  display: inline-block;
  font-weight: bold;
  padding: 0.25em 10px;
  text-decoration: none;
  margin-right: 10px;
  margin-left: 10px;
  outline: none;
  color: whitesmoke;
}
.header_link:before {
  position: absolute;
  content: "";
  width: 100%;
  height: 1px;
  top: 100%;
  left: 0;
  border-radius: 0.5px;
  background: whitesmoke;
  transition: 0.3s;
}
.header_link:hover:before {
  top: -webkit-calc(100% - 3px);
  top: calc(100% - 3px);
}
</style>
