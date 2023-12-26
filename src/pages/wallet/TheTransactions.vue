<template>
  <div class="page position-relative h-100">
    <base-header :pageTitle="pageTitle"></base-header>
    <base-nav></base-nav>
    <div class="h-100 d-flex justify-content-end">
    
    </div>

    <div class="mainContent">

        <div class="transBox p-4">
          <SingleTrans
            v-for="(transaction, index) in transactions"
            :key="index"
            :transactionType="transaction.type"
            :day="transaction.day"
            :month="transaction.month"
            :amount="transaction.amount"
            :transactionIcon="transaction.icon"
          />
        </div>

    </div>
  </div>
</template>

<script>
import SingleTrans from "./SingleTrans.vue";

export default {
  components: {
    SingleTrans,
  },
  data() {
    return {
      pageTitle: "Transactions",
      transactions: [
        {
          type: "deposit",
          day: "9",
          month: "October",
          amount: "800",
          icon: "/path/to/up_arrow_icon.png",
        },
        {
          type: "withdraw",
          day: "9",
          month: "October",
          amount: "800",
          icon: "/path/to/up_arrow_icon.png",
        },
        {
          type: "deposit",
          day: "9",
          month: "October",
          amount: "800",
          icon: "/path/to/up_arrow_icon.png",
        },
        {
          type: "withdraw",
          day: "9",
          month: "October",
          amount: "800",
          icon: "/path/to/up_arrow_icon.png",
        },
        {
          type: "deposit",
          day: "9",
          month: "October",
          amount: "990",
          icon: "/path/to/up_arrow_icon.png",
        },
        {
          type: "withdraw",
          day: "9",
          month: "October",
          amount: "100",
          icon: "/path/to/up_arrow_icon.png",
        },
        {
          type: "withdraw",
          day: "9",
          month: "October",
          amount: "800",
          icon: "/path/to/up_arrow_icon.png",
        },
        {
          type: "deposit",
          day: "9",
          month: "October",
          amount: "990",
          icon: "/path/to/up_arrow_icon.png",
        },
      
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.mainContent {

    .transBox {
      display: flex;
      flex-direction: column;
      gap: 13px;
    }
 
}
</style>
