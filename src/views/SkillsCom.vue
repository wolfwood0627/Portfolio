<template>
  <div id="skills_container">
    <h1 class="content-title">
      <font-awesome-icon icon="hammer" class="icon" />
      Skills
    </h1>
    <div>
      <h2><font-awesome-icon icon="file-code" class="icon" /> languages</h2>
      <div class="item">
        <img src="../assets/lang/python.png" alt="logo" class="item-image" />
        <h3>Python</h3>
        <hr />
        <p class="skill_text">
          メインで使っている言語です。
          <br />
          現在はkaggle挑戦が目標。
          <br />
          PyTorchを使用して機械学習やってます。
        </p>
      </div>
      <div class="item">
        <img src="../assets/lang/html_css.jpg" alt="logo" class="item-image" />
        <h3>HTML/CSS</h3>
        <hr />
        <p class="skill_text">
          簡単なwebデザインを行うために学習
          <br />
          <br />
          <br />
        </p>
      </div>
      <div class="item">
        <img src="../assets/lang/js.png" alt="logo" class="item-image" />
        <h3>JavaScript</h3>
        <hr />
        <p class="skill_text">
          簡単なwebデザインを行うために学習
          <br />
          vue.jsを使ってこのポートフォリオを作成
          <br />
          <br />
        </p>
      </div>
      <div class="item">
        <img src="../assets/lang/sql.png" alt="logo" class="item-image" />
        <h3>SQL</h3>
        <hr />
        <p class="skill_text">
          今後学びたい言語。
          <br />
          <br />
          <br />
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.item {
  display: inline-block;
  margin: 30px 60px;
  width: 320px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
}

.item-image {
  height: 100px;
  width: 100px;
}
</style>
