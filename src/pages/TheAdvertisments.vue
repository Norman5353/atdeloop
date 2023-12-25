<template>
  <div class="page position-relative h-100">
    <base-header :pageTitle="pageTitle"></base-header>

    <div class="mainContent">
      <div
        class="search-container d-flex justify-content-between align-items-center w-100"
      >
      <div >
        <span class="search-text">Search</span>
      </div>
        
        <base-form class="search-form"></base-form>
        <span class="search-icon"
          ><img src="../assets/images/Search.svg" alt=""
        /></span>
        <span class="ps-3"
          ><img src="../assets/images/threeDots.svg" alt=""
        /></span>
      </div>
      <div class="rentals-box">
        <SingleRentalAdvertise
          v-for="(rental, index) in rentals"
          :key="index"
          :title="rental.title"
          :number="rental.number"
          :day="rental.day"
          :amount="rental.amount"
          :image="rental.image"
        />
      </div>
    </div>

    <!-- <base-nav></base-nav> -->
  </div>
</template>

<script>
import SingleRentalAdvertise from "../pages/rental/SingleRentalAdvertise.vue";
// import SingleRequestAdvertise from "../pages/request/SingleRequestAdvertise.vue";
export default {
  components: {
    SingleRentalAdvertise,
  },
  data() {
    return {
      pageTitle: "Advertisments",
      rentals: [
        {
          title: "DEWALT ATOMIC 20V MAX* Oscillating Tool",
          number: "1",
          day: "9",
          amount: "800",
          image: "../../assets/images/rental-item.png",
        },
        {
          title: "DEWALT ATOMIC 20V MAX* Oscillating Tool",
          number: "2",
          day: "9",
          amount: "700",
          image: "../../assets/images/rental-item.png",
        },
        {
          title: "DEWALT ATOMIC 20V MAX* Oscillating Tool",
          number: "3",
          day: "9",
          amount: "600",
          image: "../../assets/images/rental-item.png",
        },
        {
          title: "DEWALT ATOMIC 20V MAX* Oscillating Tool",
          number: "4",
          day: "9",
          amount: "500",
          image: "../../assets/images/rental-item.png",
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

  .search-container {
    padding: 19px 16px;
  }
  .search-form {
    position: relative;
  }
  .search-icon {
    position: absolute;
    left: 65px;
  }
  .search-text{
    color: #AFAFAF;
font-size: 11px;
font-weight: 500;
  }
  .base-form {
    max-width: 262px;
    height: 24px;
    min-height: initial;
    margin: 0;
  }
  .rentals-box {
    display: flex;
    flex-direction: column;
  }
}
</style>
