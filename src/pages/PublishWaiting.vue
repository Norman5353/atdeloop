<template>
  <div class="page position-relative h-100">
    <base-header :pageTitle="pageTitle"></base-header>
    <base-nav></base-nav>
    <div class="h-100 d-flex justify-content-end isPublished mt-5 flex-column">
      <h3 class="w-100 text-start ps-4 fw-bold">Waiting to publish</h3>
      <p class="w-100 text-start ps-4 mt-3">
        Your ad is in the publishing queue. The waiting time will be up to 2
        hours.
      </p>
    </div>

    <div class="mainContent px-4">
      <div class="optionBox">
        <ul class="list-unstyled">
          <li>
            <PublishOption :preview="true" />
          </li>
          <li>
            <PublishOption :edit="true" />
          </li>
          <li>
            <PublishOption :delete="true" />
          </li>
          <li>
            <PublishOption :contactSupport="true" />
          </li>
          <li>
            <PublishOption :adViewStats="true" />
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
      pageTitle: "Waiting to publish",
     
    };
  },
};
</script>

<style lang="scss" scoped>
.isPublished {
  h3 {
    color: #e10000;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  p {
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
