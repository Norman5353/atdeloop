<template>
  <div class="page position-relative h-100">
    <base-header :pageTitle="pageTitle"></base-header>

    <div class="mainContent">
      <div class="Cards">
        <credit-card></credit-card>
      </div>
    </div>

    <base-nav></base-nav>
  </div>
</template>

<script>
import CreditCard from "./CreditCard.vue";
export default {
  components: {
    CreditCard,
  },
  data() {
    return {
      pageTitle: "View Cards",
      valueFields: {
        cardName: "999999999999",
        cardNumber: "",
        cardMonth: "",
        cardYear: "",
        cardCvv: "",
      },
    };
  },
};
</script>

<style scoped>

.credit-card img.card-item__chip {
  background-image: url("@/assets/images/ChipCard.svg") !important;
}
</style>
