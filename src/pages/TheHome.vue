<template>
  <div class="homePage">
    <img src="../assets/logoPlusText.svg" />
    <h1 class="text-center mt-5">Welcome to atdeloop</h1>
    <base-button class="homeBtn ">Get Started</base-button>
  </div>
</template>

<style scoped>
.homePage {
  position: relative;
  background-image: url(../assets/images/main-bg.svg);
  height: 926px;
img {
    margin-left: 57px;
    margin-top: 85px;
    max-width: 107px;
    max-height: 160px;
}

  .homeBtn {
    position: absolute;
    bottom: 108px;
    left: 50%;
    right: 50%;
    transform: translateX(-50%);
  }
}
</style>
