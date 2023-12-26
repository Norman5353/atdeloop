<template>
  <div class="page position-relative h-100">
    <base-header :pageTitle="pageTitle"></base-header>
    <base-nav></base-nav>
    <div class="mainContent">
      <div
        class="search-container d-flex justify-content-between align-items-center w-100"
      >
        <div>
          <span class="search-text me-2">Search</span>
        </div>

        <base-form search class="search-form"></base-form>
        <!-- <span class="search-icon"
          ><img src="../assets/images/Search.svg" alt=""
        /></span> -->
        <span class="search-right-icon"
          ><img src="../assets/images/bell.svg" alt=""
        /></span>
      </div>

      <div class="advertiseFeatureCarousel pt-2 px-4">
        <carousel :items-to-show="5">
          <slide class="flex-column gap-2" v-for="slide in 10" :key="slide">
            <div class="feature">
              <div class="featureImgContainer">
                <img
                  class="img-fluid"
                  src="../assets/images/tools.svg"
                  alt=""
                />
              </div>
            </div>

            <span class="featureTitle">Business Equipment</span>
          </slide>

          <template #addons>
            <navigation>
              <button
                class="carousel__prev"
                @click="goTo(currentSlide - 1)"
                :disabled="currentSlide === 0"
              >
                Previous
              </button>
              <button
                class="carousel__next"
                @click="goTo(currentSlide + 1)"
                :disabled="currentSlide === totalSlides - 1"
              >
                Next
              </button>
            </navigation>
          </template>
        </carousel>
      </div>

      <div class="d-flex mt-3 gap-1 px-3">
        <base-button
          class="halfBtn"
          @click="selectBox('rentals')"
          :isSecondary="selectedBox !== 'rentals'"
        >
          Rentals
        </base-button>
        <base-button
          class="halfBtn"
          @click="selectBox('request')"
          :isSecondary="selectedBox !== 'request'"
        >
          Requests
        </base-button>
      </div>

      <div v-if="selectedBox === 'rentals'" class="rentals-box">
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
      <div v-if="selectedBox === 'request'" class="requests-box">
        <SingleRequestAdvertise
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
import SingleRentalAdvertise from "../pages/rental/SingleRentalAdvertise.vue";
import SingleRequestAdvertise from "../pages/request/SingleRequestAdvertise.vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  components: {
    SingleRentalAdvertise,
    SingleRequestAdvertise,

    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      pageTitle: "Advertisments",
      selectedBox: "rentals", // Default selected box

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
  methods: {
    selectBox(box) {
      this.selectedBox = box;
    },
  },
};
</script>

<style lang="scss" scoped>
.mainContent {
  overflow: hidden;
  background: #f9f9f9;
  height: 100%;
  /deep/ .carousel__next {
    right: -8% !important;
    top: 25%;
    width: 16px;
    height: 16px;
  }
  /deep/ .carousel__prev {
    left: -8% !important;
    top: 25%;
    width: 16px;
    height: 16px;
  }

  .advertiseFeatureCarousel {
    background-color: #dddcdc;
    border-radius: 0px 0px 30px 30px;
    .feature {
      gap: 10px;
      max-width: 52px;
      max-height: 52px;
      .featureImgContainer {
        background-color: white;
        border-radius: 100%;
        padding: 6px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      }
    }
    .featureTitle {
      color: #000;
      font-family: Inter;
      font-size: 7px;
      font-weight: 500;
      text-align: center;
      max-width: 59px;
      max-height: 22px;
    }
  }
  .search-container {
    padding: 9px 16px;
  }
  /* .search-form {
    position: relative;
  }
  .search-icon {
    position: absolute;
    left: 65px;
  } */
  .search-text {
    color: #afafaf;
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
  .search-right-icon {
    width: 38px;
    margin-right: -8px;
  }
  .halfBtn.mainBtn {
    width: 50%;
    height: 30px;
    min-height: initial;
    padding: 0;
    font-size: 10px;
    font-weight: 500;
    text-shadow: initial;
  }
}
</style>
