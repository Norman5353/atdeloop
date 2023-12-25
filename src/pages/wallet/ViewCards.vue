<template>
  <div class="page position-relative h-100">
    <base-header :pageTitle="pageTitle"></base-header>

    <div class="mainContent">
      <div class="cards">
        <CreditCard
          v-for="(card, index) in cardData"
          :key="index"
          :valueFields="card"
        />
      </div>

      <div class="addCart">
        <img src="../../assets/images/creditCart/Add.svg" alt="" />
        <h3>Add card</h3>
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
      pageTitle: "View Cards", // Assuming pageTitle is defined
      cardData: [
        {
          cardNumber: "1234 5678 9012 3456",
          cardName: "John Doe",
          cardMonth: "12",
          cardYear: "25",
          backgroundImage: "../../assets/images/creditCart/cardbg.svg",
        },
        {
          cardNumber: "9876 5432 1098 7654",
          cardName: "Jane Smith",
          cardMonth: "10",
          cardYear: "24",
          cardHolder: "ali arghyani",
          // Other fields for the second card
        },
        // Add more card objects as needed
      ],
    };
  },
};
</script>

<style scoped>
.mainContent {
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  .cards {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 2rem 0;
  }

  .addCart {
    width: 283px;
    height: 168px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #d9d9d9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 4rem;
    img {
      width: 47px;
      height: 41px;
      flex-shrink: 0;
    }
    h3 {
      width: 73px;
      height: 21px;
      flex-shrink: 0;
      color: #747474;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
}
</style>
