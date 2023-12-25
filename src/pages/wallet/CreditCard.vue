<template>
  <div class="creditCard" :class="{ focused: isFocused }"
  >
  <!-- :style="{ backgroundImage: `url(${backgroundImage})` }"> -->
    <div class="cardTop">
      <div class="chip">
        <img src="../../assets/images/creditCart/ChipCard.svg" alt="" />
      </div>
      <div class="cardLogo">
        <img src="../../assets/images/creditCart/mastercard.svg" alt="" />
        <span>{{ labels.cardName }}</span>
      </div>
    </div>
    <div class="card-number mx-2">
      <span class=" mx-2">card number</span>
      <div class="w-100 text-center">
        <h2>{{ valueFields.cardNumber }}</h2>
      </div>
    </div>

    <div class="card-details">
      <div class="cardHolder">
        <span class="label me-1">cardholder name</span>
        <h6 class="name">
          {{ labels.cardHolder || "Card Holder" }}
        </h6>
      </div>
      <div class="expiration">
        <div>
          <h6 class="title">expiration</h6>
        </div>

        <div class="d-flex flex-row">
          <div>
            <h6 class="options">VALID</h6>
            <h6 class="options">THRU</h6>
          </div>

          <span class="date">
           <span class="arrow">►</span> {{ valueFields.cardMonth }} / {{ valueFields.cardYear }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "CreditCard",
  props: {
    valueFields: {
      type: Object,
      required: true,
    },
    inputFields: {
      type: Object,
      default: () => ({
        cardNumber: "card-number",
        cardName: "card-name",
        cardMonth: "card-month",
        cardYear: "card-year",
        cardCvv: "card-cvv",
      }),
    },
    labels: {
      type: Object,
      default: () => ({
        cardName: "Master Card",
        cardHolder: "Card Holder",
        cardMonth: "MM",
        cardYear: "YY",
        cardExpires: "Expires",
        cardCvv: "CVV",
      }),
    },
    backgroundImage: {
      type: String,
      default: "",
    },
  },
  setup() {
    const isFocused = ref(false);
    const defaultPlaceholder = "#### #### #### ####";

    // Your logic and methods here...

    return {
      isFocused,
      defaultPlaceholder,
      // Any other values or functions you need...
    };
  },
};
</script>
<style lang="scss" scoped>
.creditCard {
  width: 283px;
  height: 168px;
  padding: 10px 18px;
  flex-shrink: 0;
  border-radius: 10px;
  background: linear-gradient(
    249deg,
    #5d9600 12.37%,
    #c2ea00 54.9%,
    #125800 93.72%
  );
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  .cardTop {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .cardLogo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        width: 45px;
      }

      span {
        color: #fff;
        font-family: Poppins;
        font-size: 7px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
      }
    }

    .chip {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 33px;
      height: 33px;
    }
  }
  .card-number {
    span {
      color: #fff;
      font-family: Poppins;
      font-size: 8px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 0.8px;
    }

    h2 {
      color: #fff;
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
      font-family: Gemunu Libre;
      font-size: 21px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 2.1px;
    }
  }

  .card-details {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .cardHolder {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;

      span {
        color: #fff;
        text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.4);
        font-family: Poppins;
        font-size: 8px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
      }
      h6 {
        color: #fff;
        text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.4);
        font-family: Poppins;
        font-size: 13px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
      }
    }

    .expiration {
      display: flex;
      flex-direction: column;
      gap: 0;
      .title {
        margin: 0;
        color: #fff;
        font-family: Poppins;
        font-size: 7px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      .options {
        color: #fff;
        font-family: Poppins;
        font-size: 5px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      .date {
        color: #fff;
        font-family: Poppins;
        font-size: 7px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        align-items: center;
        vertical-align: middle;
        justify-content: center;
        text-align: center;
        margin-top: 5px;
        .arrow {
          width: 1px;
          font-size: 4px;
        }
      }
    }
  }
}
</style>
