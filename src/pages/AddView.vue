<template>
    <div class="page position-relative h-100">
      <base-header :pageTitle="pageTitle"></base-header>
      <base-nav></base-nav>
      <div class="h-100 d-flex justify-content-end selectCategory mt-5">
        <h3 class="w-100 text-center">Please select the category</h3>
      </div>
  
      <div class="mainContent">
        
      </div>
    </div>
  </template>
  
  <script>
  //   import SingleTrans from "./SingleTrans.vue";
  
  export default {
    // components: {
    //   SingleTrans,
    // },
    data() {
      return {
        pageTitle: "Ad View Stats",
      };
    },
  };
  </script>
  
  <style lang="scss" scoped>
  
  .mainContent {
  }
  </style>
  