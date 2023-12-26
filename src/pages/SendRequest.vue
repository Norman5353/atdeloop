<template>
  <div class="page position-relative h-100">
    <base-header :pageTitle="pageTitle"></base-header>
    <base-nav></base-nav>
    <div class="h-100 d-flex justify-content-end selectCategory">
      <h3 class="w-100 text-center">Please select the category</h3>
    </div>

    <div class="mainContent">
      <div class="requestBox d-flex flex-column gap-4">
        <div class="d-flex flex-row gap-3 justify-content-center">
          <feature-button
            title="Tools"
            size="medium"
            :imgSrc="require('../assets/images/request/Tools.svg')"
            color="grey"
          >
          </feature-button>
          <feature-button
            title="Industrial machinery"
            size="medium"
            :imgSrc="require('../assets/images/request/Foundation Drilling Rig.svg')"
            color="grey"
          >
          </feature-button>
        </div>
        <div class="d-flex flex-row gap-3 justify-content-center">
          <feature-button
            title="Business Equipment"
            size="medium"
            :imgSrc="require('../assets/images/request/Business.svg')"
            color="grey"
          >
          </feature-button>
          <feature-button
            title="Digital Goods"
            size="medium"
            :imgSrc="require('../assets/images/request/Cryptocurrency Website.svg')"
            color="grey"
          >
          </feature-button>
        </div>
        <div class="d-flex flex-row gap-3 justify-content-center">
          <feature-button
            title="Kitchen and Home Appliances"
            size="medium"
            :imgSrc="require('../assets/images/request/Appliances.svg')"
            color="grey"
          >
          </feature-button>
          <feature-button
            title="Agricultural
 equipment"
            size="medium"
            :imgSrc="require('../assets/images/request/Tractor.svg')"
            color="grey"
          >
          </feature-button>
        </div>
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
      pageTitle: "Send a Request",
    };
  },
};
</script>

<style lang="scss" scoped>
.selectCategory {
  h3 {
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 30px;
  }
}
.mainContent {
}
</style>
