<template>
  <div id="profile_container">
    <h1 class="content-title">
      <font-awesome-icon icon="hammer" class="icon" />
      Profile
    </h1>
    <img id="profile_img" src="../assets/profile2.png" alt="" />
    <h2>Tsuyoshi</h2>
    <div id="profile_description">
      <p class="profile_text">
        {{ Birthdate.year }}年{{ Birthdate.month }}月{{ Birthdate.day }}日生まれ
        {{ Age }}歳
      </p>
      <div id="profile_introduction" class="profile_text">
        <p>
          学生の頃は、微分幾何学、特にリーマン多様体について研究していました。<br />
          社会人１０年を経て今更ながら機械学習に出会う。<br />
          ディープラーニングのニューラルネットワークに魅せられデータサイエンティスト目指して精進中<br />
          kaggleに挑戦中。まずはメダルを１個とる!<br />
        </p>
      </div>
    </div>
    <div>
      <a href="https://github.com/wolfwood0627" class="social_icon">
        <img src="../assets/SNS_icon.png" alt="" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Age: 37,
      Birthdate: {
        year: 1984,
        month: 6,
        day: 27,
      },
      Position: "",
    };
  },
  created() {
    this.InitAge();
  },
  methods: {
    InitAge() {
      let birthdate = -new Date(
        this.Birthdate.year,
        this.Birthdate.month - 1,
        this.Birthdate.day
      );
      let today = new Date();
      let age = today.getFullYear() - birthdate.getFullYear();
      if (
        today.getMonth() < birthdate.getMonth() ||
        (today.getMonth() === birthdate.getMonth() &&
          today.getDate() < birthdate.getDate())
      ) {
        age--;
      }
      this.Age = age;
    },
  },
};
</script>

<style lang="scss" scoped>
#profile_container {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  #profile_img {
    width: 300px;
    height: 300px;
    border-radius: 100px;
    margin: 15px;
  }
  @media screen and (max-width: 400px) {
    #profile_img {
      width: 200px;
      height: 200px;
      border-radius: 75px;
    }
  }
  #profile_description {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .profile_text {
      padding: 10px;
      font-size: 19px;
    }
    @media screen and (max-width: 400px) {
      .profile_text {
        padding: 10px 25px;
      }
    }
  }
  #socials {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .social_icon {
      width: 100px;
      height: 100px;
      border-radius: 100px;
      margin: 10px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 100px;
        transition: 0.3s;
        &:hover {
          box-shadow: 0px 2px 10px -2px #777777;
        }
      }
    }
  }
}
</style>
