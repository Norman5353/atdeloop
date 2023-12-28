<template>
  <div class="wrapper">
    <div><img src="../../assets/images/rental-item.svg" alt="" /></div>

    <div class="details">
      <h2 class="fw-700 fs-10">
        {{ props.title }}
      </h2>
      <div class="d-flex flex-column gap-1">
          <span>Number: {{ number }}</span>
          <span>{{ props.day }} day</span>
          <span>Amount paid: ${{ props.amount }}</span>
      </div>
    </div>
  </div>
  <div class="line"></div>
</template>
<!-- {
          number: "1",
          day: "9",
          amount: "800",
          image: "/path/to/up_arrow_icon.png",
        } -->
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
.wrapper {
  width: 100%;
  border-radius: 10px;
  padding: 11px 26px;
  /* background: #dedcdc; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 15px;

  .details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
      color: #747474;
      font-family: Inter;
      font-size: 8px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    h2 {
      color: #000;
      font-family: Inter;
      font-size: 10px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
}

.line{
width: 88%;
height: 1px;
background: #B4B4B4;
margin: auto;
}
</style>
