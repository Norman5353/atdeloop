<template>
  <div class="homePage">
    <img src="../assets/logoPlusText.svg" />
    <!-- <h1 class="text-center mt-5">Welcome to atdeloop</h1> -->

    <div
      class="d-flex justify-content-center flex-column align-items-center gap-1 btnGroup w-100"
    >
      <base-button isSecondary>Sign In</base-button>
      <base-button isSecondary>Sign Up</base-button>
    </div>
  </div>
</template>

<style scoped>
.homePage {
  position: relative;
  background-image: url(../assets/images/main-bg.svg);
  height: 926px;
  img {
    position: absolute;
    top: 15%;
    left: 50%;
    right: 50%;
    transform: translateX(-50%);
    width: 150px;
  }

  .btnGroup {
    position: absolute;
    bottom: 108px;
  }
}
</style>
