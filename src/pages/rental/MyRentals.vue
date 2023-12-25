<template>
  <div class="page position-relative h-100">
    <base-header :pageTitle="pageTitle"></base-header>

    <div class="mainContent">
      


      <div class="rentals-box">
        <SingleRental
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
import SingleRental from "./SingleRental.vue";
export default {
  components: {
    SingleRental,
  },
  data() {
    return {
      pageTitle: "My Rentals",
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
  .rentals-box {
    display: flex;
    flex-direction: column;
    
  }
}
</style>
