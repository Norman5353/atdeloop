<template>
  <div class="page position-relative h-100 bg-white">
    <base-header :pageTitle="pageTitle"></base-header>
    <base-nav></base-nav>
    <div class="h-100 d-flex justify-content-between mt-5 titleBox p-4">
      <h3 class=" text-center">Total view</h3>
      <span>110</span>
    </div>

    <div class="mainContent">

<div class="d-flex justify-content-center align-items-center w-100 mt-4">
    <img  class="graph" src="../assets/images/publish/graph.png" alt="">
</div>

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
.titleBox {
    border-bottom: solid 1.5px #B3B3B3;
  h3 {
    color: #000;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  span {
    color: #000;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
}
.mainContent {

    .graph{
        width: 280px;
        
    }
}
</style>
