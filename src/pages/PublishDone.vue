<template>
  <div class="page position-relative h-100">
    <base-header :pageTitle="pageTitle"></base-header>
    <base-nav></base-nav>
    <div class="h-100 d-flex justify-content-end isPublished mt-5 flex-column">
      <h3 class="w-100 text-start ps-4 fw-bold">Published</h3>
      <p class="w-100 text-start ps-4 mt-3">
        Your ad is published and now is in the atdeloop list.
      </p>
    </div>

    <div class="mainContent px-4">
      <div class="optionBox">
        <ul class="list-unstyled">
          <li>
            <PublishOption preview />
          </li>
          <li>
            <PublishOption adViewStats />
          </li>
          <li>
            <PublishOption edit />
          </li>
          <li>
            <PublishOption delete />
          </li>
          <li>
            <PublishOption contactSupport
            class="border-0" />
          </li>
        </ul>
      </div>
    </div>
   
  </div>
</template>

<script>
import PublishOption from "../components/PublishOption.vue";

export default {
    components: {
    PublishOption,
  },
  data() {
    return {
      pageTitle: "Published",
    };
  },
};
</script>

<style lang="scss" scoped>
.isPublished {

    h3 {
        color: #5d9600;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
    }
    p{
    color: #000;
font-family: Inter;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: normal;
  }
 
}

.mainContent {
}
</style>
