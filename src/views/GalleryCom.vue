<template>
  <div id="gallery_container">
    <input
      id="gallery_searchbar"
      type="text"
      placeholder="ギャラリーを検索"
      @input="UpdateCards"
      v-model="serch_text"
    />
    <div id="galleries">
      <div class="card" v-for="card in display_cards" :key="card.id">
        <img class="card_img" src="card.img" />
        <div class="card_title">
          {{ card_title }}
        </div>
        <div class="card_descripition">
          {{ card.discription }}
        </div>
      </div>
    </div>
    <template>
      <div>
        <h1 class="content-title">
          <font-awesome-icon icon="hammer" class="icon" /> Gallery
        </h1>
        <ul class="works">
          <li class="card">
            <img class="card-img" src="../assets/work/cancer.png" alt="" />
            <div class="card-content">
              <h1 class="card-title jp">kaggle コンペ(済)</h1>
              <p class="card-text">Histopathologic Cancer Detection</p>
              <p class="card-lang">Language : Python(PyTorch)</p>
              <br />
              <a
                href="https://www.kaggle.com/code/wolfwood0627/cancer-detection-pytorch-cnn"
                class="card-link"
              >
                kaggle
              </a>
              <a
                href="https://github.com/wolfwood0627"
                class="card-link github-link"
              >
                Github
              </a>
            </div>
          </li>
          <li class="card">
            <img class="card-img" src="../assets/work/titanic.png" alt="" />
            <div class="card-content">
              <h1 class="card-title jp">kaggle コンペ(済)</h1>
              <p class="card-text">
                Titanic
                <br />
                Machine Learning from Disaster
              </p>
              <p class="card-lang">Language : Python(PyTorch)</p>
              <br />
              <a
                href="https://www.kaggle.com/code/wolfwood0627/titanic-pytroch-nn"
                class="card-link"
              >
                kaggle
              </a>
              <a
                href="https://github.com/wolfwood0627"
                class="card-link github-link"
              >
                Github
              </a>
            </div>
          </li>
          <li class="card">
            <img class="card-img" src="../assets/work/dolphin.jpeg" alt="" />
            <div class="card-content">
              <h1 class="card-title jp">kaggle コンペ(現在挑戦中)</h1>
              <p class="card-text">
                Happywhale
                <br />
                Whale and Dolphin Identification
              </p>
              <p class="card-lang">Language : Python(PyTorch)</p>
              <br />
              <a
                href="https://www.kaggle.com/competitions/happy-whale-and-dolphin"
                class="card-link"
              >
                kaggle
              </a>
              <a
                href="https://github.com/wolfwood0627"
                class="card-link github-link"
              >
                Github
              </a>
            </div>
          </li>
          <li class="card">
            <img class="card-img" src="../assets/work/vue.png" alt="" />
            <div class="card-content">
              <h1 class="card-title">This site</h1>
              <p class="card-text">私のポートフォリオ</p>
              <p class="card-lang">
                Language : HTML / CSS, Javascript (Vue.js)
              </p>
              <br />
              <a
                href="https://github.com/wolfwood0627"
                class="card-link github-link"
              >
                Github
              </a>
            </div>
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>

<style>
.works {
  list-style-type: none;
  padding-left: 0;
  text-align: center;
  padding-left: 15%;
  padding-right: 15%;
}
.jp {
  font-weight: 100;
}
.card-lang {
  font-weight: 500;
}
.card {
  display: inline-block;
  margin: 30px 60px;
  width: 350px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
}
.card-img {
  border-radius: 5px 5px 0 0;
  width: 100%;
  height: 200px;
  object-fit: contain;
}
.card-content {
  padding: 20px;
}
.card-title {
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}
.card-text {
  color: rgb(63, 45, 45);
  font-size: 20px;
  line-height: 1.5;
}
.card-link {
  border: 2px solid #00aaff;
  text-decoration: none;
  color: #00aaff;
  margin: 0 10px;
  padding: 5px 10px;
  border-radius: 5px;
  transition: 0.4s;
  font-weight: bold;
}
.card-link:hover {
  background-color: #00aaff;
  color: white;
}
.github-link {
  border-color: #171515;
  color: #171515;
}
.github-link:hover {
  background-color: #171515;
  color: white;
}
/*.work-content{
	width: 350px;
	padding: 10px;
	margin: 30px 60px;
  display: inline-block;
}
.work-content:hover{
  background-color: rgba(50, 50, 100, 0.3);
}
.works-image{
    width: 100%;
}*/
@media screen and (max-width: 768px) {
  .works {
    padding-left: 1%;
    padding-right: 1%;
  }
  .card-link {
    border: 2px solid #00aaff;
    background-color: #00aaff;
    text-decoration: none;
    color: white;
    margin: 0 10px;
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: bold;
  }
  .github-link {
    background-color: #171515;
    border-color: #171515;
  }
}
@media screen and (max-width: 550px) {
  .card {
    width: 280px;
    margin: 30px 0;
  }
}
</style>
