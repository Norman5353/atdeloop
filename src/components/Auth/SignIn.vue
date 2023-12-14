<template>
    <div class="homePage">
      <img src="../../assets/logoPlusText.svg" />
      <!-- <h1 class="text-center mt-5">Welcome to atdeloop</h1> -->
  
      <div
        class="d-flex justify-content-center flex-column align-items-center gap-1 btnGroup w-100"
      >
     <base-form hasIcon halfWidth></base-form>
      </div>
    </div>
  </template>
  
  <style scoped>
    
  .homePage {
    border: 1px solid black;
    position: relative;
    height: 926px;
    img {
      position: absolute;
      top: 15%;
      left: 50%;
      right: 50%;
      transform: translateX(-50%);
      width: 118px;
    }
  
    .btnGroup {
      position: absolute;
      bottom: 108px;
    }
  }
  </style>
  