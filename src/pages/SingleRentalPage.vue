<template>
  <div class="page position-relative h-100">
    <!-- <base-header :pageTitle="pageTitle"></base-header> -->
    <button class="leftButton" @click="goBack">
      <span>
        <img src="../assets/images/LeftArrow.svg" alt="" />
      </span>
    </button>
    <div class="bannerImage position-relative">
      <img
        class="img-fluid"
        src="../assets/images/rental-item-banner.svg"
        alt=""
      />
      <img class="arrow" src="../assets/images/LeftArrow.svg" alt="" />
    </div>
    <div class="mainContent">
      <div class="toolsContainer">
        <div class="d-flex">
          <img src="../assets/images/back.svg" alt="" />
          <span>Tools</span>
        </div>
        <div class="d-flex">
          <img src="../assets/images/bookmark.svg" alt="" />
          <img src="../assets/images/share.svg" alt="" />
        </div>
      </div>

      <div class="itemDetails">
        <h2 class="fw-700 fs-10">DEWALT ATOMIC 20V MAX* Oscillating Tool</h2>

        <ul>
          <li>
            <span class="detailTitle">Brand: </span
            ><span class="detailValue">DEWALT</span>
          </li>
          <li>
            <span class="detailTitle">Voltage: </span
            ><span class="detailValue">20 Volts</span>
          </li>
          <li>
            <span class="detailTitle">Power Source: </span
            ><span class="detailValue">Ac_dc</span>
          </li>
          <li>
            <span class="detailTitle">Special Feature: </span
            ><span class="detailValue"
              >Led Light, Variable Speed, Cordless</span
            >
          </li>
          <li class="d-inline">
            <span class="detailTitle">Included Components: </span
            ><span class="detailValue"
              >(1) DCS354 20V MAX* Brushless Oscillating Multi-Tool; (1) Wood
              With Nails Blade; (1) Fast-cut Wood Blade; (1) Universal Accessory
              Adapter</span
            >
          </li>
        </ul>

        <span class="more mt-2">More</span>
        <div class="priceContainer">
          <span class="priceTitle"> One day price:</span>
          <span class="priceValue"> 30 $</span>
        </div>

        <div><span class="locationTitle">Location:</span></div>
        <div class="mt-1">
          <img src="../assets/images/map.svg" alt="" />
        </div>

        <div class="mt-2">
          <img src="../assets/images/calender.svg" alt="" />
        </div>
        <div class="d-flex align-items-center justify-content-between mt-3">
          <span class="d-flex total">Total:</span>
          <base-form></base-form>
        </div>

        <base-button class="mt-3 bookBtn">Book Now</base-button>
        <div class="d-flex mt-3 gap-1">
          <base-button class="halfBtn">Call</base-button>
          <base-button class="halfBtn"> Chat Now</base-button>
        </div>
      </div>
    </div>

    <!-- <base-nav></base-nav> -->
  </div>
</template>
<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  title: String,
  number: String,
  day: String,
  amount: String,
  image: String,
});

const imageSrc = computed(() => require(`@/${props.image}`));
console.log(imageSrc);
</script>

<style scoped>
.leftButton {
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  align-items: center;
  z-index: 1005;
  left: 21px;
  top: 12px;
}
.mainContent {
  overflow: hidden;
  background: #f9f9f9;
  height: 100%;
  padding: 21px 27px;
  .rentals-box {
    display: flex;
    flex-direction: column;
  }
  .toolsContainer {
    display: flex;
    justify-content: space-between;
  }

  .itemDetails {
    margin: 13px 0;
    h2 {
      font-size: 12px;
      font-weight: 700;
    }
    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
      line-height: 10px;
    }
    ul li {
      margin: 0;
    }
    .more {
      color: #5d9600;
      text-align: justify;
      font-family: Inter;
      font-size: 10px;
      font-weight: 700;
      text-decoration-line: underline;
    }
    .detailTitle {
      font-size: 10px;
      font-weight: 700;
    }
    .detailValue {
      color: #000;
      font-family: Inter;
      font-size: 10px;
      font-weight: 400;
    }
    .priceTitle {
      color: #000;
      text-align: justify;
      font-size: 10px;
      font-weight: 700;
    }
    .priceValue {
      color: #ef0000;
      font-size: 10px;
      font-weight: 700;
    }
    span.locationTitle {
      color: #000;
      font-family: Inter;
      font-size: 10px;
      font-weight: 500;
    }
    .total {
      font-family: Inter;
      font-size: 12px;
      font-weight: 700;
    }
    .base-form {
      width: 80% !important;
      margin-bottom: 0 !important;
      min-height: initial !important;
    }
    .bookBtn.mainBtn {
      width: 100%;
      height: 30px;
      min-height: initial;
      padding: 0;
    }
    .halfBtn.mainBtn {
      width: 50%;
      height: 30px;
      min-height: initial;
      padding: 0;
    }
  }
}
</style>
