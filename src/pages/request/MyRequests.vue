<template>
  <div class="page position-relative h-100">
    <base-header :pageTitle="pageTitle"></base-header>

    <div class="mainContent">
      <div class="rentals-box">
        <SingleRequest
          v-for="(request, index) in requests"
          :key="index"
          :title="request.title"
          :number="request.number"
          :day="request.day"
          :image="request.image"
          :notifs="request.notifs"
        />
      </div>
    </div>

    <!-- <base-nav></base-nav> -->
  </div>
</template>

<script>
import SingleRequest from "./SingleRequest.vue";
export default {
  components: {
    SingleRequest,
  },
  data() {
    return {
      pageTitle: "My Requests",
      requests: [
        {
          title: "DEWALT ATOMIC 20V MAX* Oscillating Tool",
          number: "1",
          day: "9",
          image: "../../assets/images/rental-item.png",
          notifs: "3",
        },
        {
          title: "DEWALT ATOMIC 20V MAX* Oscillating Tool",
          number: "2",
          day: "9",
          image: "../../assets/images/rental-item.png",
          notifs: "3",
        },
        {
          title: "DEWALT ATOMIC 20V MAX* Oscillating Tool",
          number: "3",
          day: "9",
          image: "../../assets/images/rental-item.png",
            notifs: "7",
        },
        {
          title: "DEWALT ATOMIC 20V MAX* Oscillating Tool",
          number: "4",
          day: "9",
          image: "../../assets/images/rental-item.png",
          notifs: "3",
        },
      ],
    };
  },
};
</script>

<style scoped>
.mainContent {
  overflow: hidden;
  background: #f9f9f9;
  height: 100%;
  .rentals-box {
    display: flex;
    flex-direction: column;
  }
}
</style>
