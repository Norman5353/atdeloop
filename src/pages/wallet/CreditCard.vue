<template>
    <div class="wrapper">
      <vue-paycard
        :value-fields="valueFields"
        :set-type="mastercard"
        :has-random-backgrounds="false"
      >
        <template #custom-chip>
          <img class="card-item__chip" src="../../assets/images/ChipCard.svg" alt="Custom Chip Image" />
        </template>
      </vue-paycard>
    </div>
  </template>
  
  <script setup>
  const valueFields = {
    cardName: "999999999999",
    cardNumber: "",
    cardMonth: "",
    cardYear: "",
    cardCvv: "",
  };
  
  const mastercard = "mastercard";
  </script>
  
  <style scoped>
  /* Style the custom chip image if needed */
  .wrapper .card-item__chip {
    width: 100%; /* Set width to 100%, adjust as needed */
    display: none;
  }
  </style>