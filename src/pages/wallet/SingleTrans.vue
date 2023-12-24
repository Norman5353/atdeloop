<template>
    <div class="wrapper">
      <h6 class="type">{{ transactionType }}</h6>
  
      <div class="date">
        <span class="day">{{ day }}</span><span class="month">{{ month }}</span>
      </div>
  
      <div :class="[ 'amount', transactionType ]">
        <span><img class="type" :src="transactionIcon" alt="" /></span>
        <span class="number">{{ amount }}</span><span>$</span>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    transactionType: String,
    day: String,
    month: String,
    amount: String,
  });

  let transactionIcon = '';

  if (props.transactionType === 'deposit') {
    transactionIcon = '/path/to/up_arrow_icon.png';
  } else if (props.transactionType === 'withdraw') {
    transactionIcon = '/path/to/down_arrow_icon.png';
  }
</script>

<style scoped>
.wrapper {
  width: 100%;
  border-radius: 10px;
  padding: 19px;
  background: #dedcdc;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .type {
    color: #000;
    font-family: Inter;
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .date {
    color: #8d8d8d;
    font-family: Inter;
    font-size: 8px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .amount.deposit span {
    color: #5d9600;
    font-family: Inter;
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .amount.withdraw span {
    color: #cb0909;
    font-family: Inter;
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
}
</style>
