<template>
  <div class="page position-relative h-100">
    <base-header :pageTitle="pageTitle"></base-header>

    <div class="settingBox w-50 px-4 py-4 justify-content-start">
      <img src="../assets/images/tune.svg" alt="" />
      <img src="../assets/images/delete.svg" alt="" />
    </div>
    <div class="mainContent">
      <div class="today">
        <h4>Today</h4>
      </div>

      <single-notif></single-notif>
      <single-notif></single-notif>
      <single-notif></single-notif>

      <div class="lastDay">
        <h4>Last Day</h4>
      </div>

      <single-notif></single-notif>
      <single-notif></single-notif>
      <single-notif></single-notif>

      <base-nav></base-nav>
    </div>
  </div>
</template>

<script>
import SingleNotif from "../components/SingleNotif.vue";

export default {
  components: {
    SingleNotif,
  },
  data() {
    return {
      pageTitle: "Notification",
    };
  },
};
</script>

<style lang="scss" scoped>
.titleBox {
}
.mainContent {
  .today {

    color: #9F9F9F;
font-family: Inter;
font-size: 11px;
font-style: normal;
font-weight: 700;
line-height: normal;

    padding: 11px 23px;
    border-bottom: solid 1px #ccc;
  }
  .lastDay {
    padding: 11px 23px;
    border-bottom: solid 1px #ccc;
  }
}
</style>
