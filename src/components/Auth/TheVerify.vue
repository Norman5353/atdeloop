<template>
  <div class="homePage">
    <img class="mobileSVG" src="../../assets/images/mobile.svg" alt="" />

    <div class="content">
        <h3 class="text-nowrap test-center">Verify your Email</h3>
        <h6 class="text-nowrap test-center">Enter the code sent to</h6>
        <p class="text-nowrap test-center fGreen3 ">email@gmail.com</p>
        

        <base-button class="">Verify</base-button>
    </div>

   
  </div>
</template>

<style scoped>
.homePage {
  position: relative;
  background-image: url(../../assets/images/main-bg-2.svg);
  height: 926px;

  .mobileSVG {
    width: 152px;
    height: 316px;
    position: absolute;
    top: 110px;
    left: 50%;
    /* Adjust the transform to center the image horizontally */
    transform: translateX(-50%);
  }

  .content {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    bottom: 308px;
    right: 50%;
    transform: translateX(50%);
    max-width: 277px;
  }
}
</style>
