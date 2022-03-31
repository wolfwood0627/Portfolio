<template>
  <div class="home_container">
    <div id="main">
      <vue-typer
        :text="[
          'Welcome to my portfolio page.\nMy name is Tsuyoshi.\n Please take your time! ',
        ]"
        class="top-text"
        :repeat="0"
        :preTypeDelay="1000"
        :typeDelay="120"
        :preEraseDelay="5000"
        :eraseDelay="2000"
      >
      </vue-typer>
    </div>
  </div>
</template>

<style>
#main {
  position: absolute;
  top: 30%;
  left: 50%;
  font-size: 40px;
  font-family: Hiragino Sans;
  transform: translateY(-50%) translateX(-50%);
}
</style>
