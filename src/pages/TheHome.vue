<template>
  <div class="home">
    <img src="../assets/logoPlusText.svg" />
    <h1>Welcome to atdeloop</h1>
    <base-button class="homeBtn"></base-button>
  </div>
</template>

<style scoped>
.home {
  position: relative;
  background-image: url(../assets/images/main-bg.svg);
  height: 926px;
img {
    margin-left: 122px;
    margin-top: 134px;
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
