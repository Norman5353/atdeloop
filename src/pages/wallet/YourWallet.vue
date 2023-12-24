<template>
  <div class="page position-relative h-100">
    <base-header :pageTitle="pageTitle"></base-header>

    <div class="mainContent">
      <div class="topBox d-flex">
        <div class="featureBox">
          <feature-button
            title="Add money"
            size="small"
            :imgSrc="require('../../assets/images/feature/Add Money.svg')"
            color="grey"
          >
          </feature-button>
          <feature-button
            title="Add Cards"
            size="small"
            :imgSrc="require('../../assets/images/feature/Add Credit Card.svg')"
            color="grey"
          >
          </feature-button>
          <feature-button
            title="Transactions"
            size="small"
            :imgSrc="require('../../assets/images/feature/Transaction.svg')"
            color="grey"
          >
          </feature-button>
        </div>
        <div class="cardBox">
          <div class="mainCard p-4">
            <h5 class="balance"><span>$ </span>3000</h5>
            <span class="bank ">Bank of Canada</span>
            <h4 class="cardNumber">5292********1245</h4>
            <img
              class="cardLogo"
              src="../../assets/images/Mastercard Logo.svg"
              alt=""
            />
          </div>
          <div class="sideCard1"></div>
          <div class="sideCard2"></div>
          <div class="sideCard3"></div>
          <div class="sideCard4"></div>
        </div>

        <div class="viewAllCards">
          <img src="../../assets/images/Credit Card.svg" alt="" />

          <a class="ms-2" href="">View all cards</a>
        </div>
      </div>
      <div class="recentTrans py-4 px-4">
        <div class="moreTrans pb-3">
          <h6>Recent Transactions</h6>
          <a href="">See all</a>
        </div>
        <div class="transBox">
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

    <base-nav></base-nav>
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
      pageTitle: "Your Wallet",
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
  .topBox {
    border-radius: 0px 0px 30px 30px;
    background: #f9f9f9;
    box-shadow: 0px 4px 100px 0px rgba(0, 0, 0, 0.25);

    .featureBox {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 25%;
      height: 100%;
      padding: 40px;
    }

    .cardBox {
      width: 75%;
      height: 100%;
      position: relative;
      margin-top: 40px;

      div {
        position: absolute;
        right: -142px;
      }

      .mainCard {
        width: 283px;
        height: 168px;
        border-radius: 10px;
        background: linear-gradient(
          62deg,
          #5d9600 0.77%,
          #c2ea00 41.28%,
          #125800 84.79%,
          #68a000 87.19%
        );
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        z-index: 50;
        opacity: 1;
        right: -125px;
        &:hover {
          transform: translateX(-10px);
        }

        .balance {
          width: 77px;
          height: 17px;

          color: #000;
          font-family: Inter;
          font-size: 16px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }
        .bank {
          width: 87px;
          height: 9px;

          color: #000;
          font-family: Inter;
          font-size: 8px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }

        .cardNumber {
          color: #000;
          font-family: Inter;
          font-size: 13px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }

        .cardLogo {
          width: 45px;
          height: 45px;
        }
      }

      .sideCard1 {
        width: 283px;
        height: 168px;
        transform: rotate(14.615deg);

        border-radius: 10px;
        opacity: 0.5;
        background: #9bc060;
        z-index: 40;
      }
      .sideCard2 {
        width: 283px;
        height: 168px;
        transform: rotate(7.352deg);

        border-radius: 10px;
        background: rgba(145, 232, 3, 0.61);
        z-index: 30;
      }
      .sideCard3 {
        width: 283px;
        height: 168px;
        transform: rotate(-7.973deg);

        border-radius: 10px;
        background: #b9ee63;
        z-index: 30;
      }
      .sideCard4 {
        width: 283px;
        height: 168px;
        transform: rotate(-14.111deg);

        border-radius: 10px;
        opacity: 0.5;
        background: rgba(93, 150, 0, 0.55);
        z-index: 40;
      }
    }

    .viewAllCards {
      display: flex;
      flex-direction: row;
      position: absolute;
      right: 30px;
      top: 300px;
      a {
        color: #5d9600;
        font-family: Inter;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration-line: underline !important;
        text-wrap: nowrap;
        align-items: center;
        text-align: center;
        vertical-align: middle;
        margin-top: 5px;
      }
      img {
        width: 24px;
        height: 24px;
      }
    }
  }

  .recentTrans {
    .moreTrans {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      h6 {
        color: #000;
        font-family: Inter;
        font-size: 11px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
      a {
        color: #5d9600;
        font-family: Inter;
        font-size: 11px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration-line: underline;
      }
    }
    .transBox {
      display: flex;
      flex-direction: column;
      gap: 13px;
    }
  }
}
</style>
