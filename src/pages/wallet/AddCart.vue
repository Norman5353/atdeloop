<template>
  <div class="page position-relative h-100">
    <base-header :pageTitle="pageTitle"></base-header>

    <div class="titleBox w-100 px-4 py-4">
      <h2>Add your Card</h2>
      <h4>Fill in the fields below or use camera phone</h4>
    </div>
    <div class="mainContent">
      <div class="BtnBox w-100 mb-4">
        <card-type-btn
          v-for="(method, index) in paymentMethods"
          :key="index"
          :paymentMethod="method"
        />
      </div>

      <div class="formBox w-100">
        <div class="d-flex flex-column">
          <label for="cardNumber">Your Card number</label>
          <base-form id="cardNumber" class="w-100" type="number"></base-form>
        </div>
        <div class="d-flex flex-row gap-2">
          <div class="d-flex flex-column w-50">
            <label for="expiryDate1 w-100">Expiry Date</label>
            <div class="d-flex flex-row gap-1 w-100">
              <base-form
                id="expiryDate"
                class="roundedLeft"
                type="number"
              ></base-form>

              <base-form class="roundedRight" type="number"></base-form>
            </div>
          </div>
          <div>
            <label for="CVV2 w-100">CVV2</label>
            <base-form id="CVV2" class="w-100" half type="number"></base-form>
          </div>
          <!-- <base-button></base-button> -->
        </div>
      </div>

      <base-button
        class="scanBtn w-100 text-nowrap d-flex flex-row mt-2"
        hasImage
      >
        <span
          ><img
            src="../../assets/images/creditCart/scanning.svg"
            alt="" /></span
        >Scan card info by camera
      </base-button>
      <div class="ScanArea mt-4"></div>

      <base-button>Save My Card</base-button>
    </div>

    <base-nav></base-nav>
  </div>
</template>

<script>
import CardTypeBtn from "./CardTypeBtn.vue";

export default {
  components: {
    CardTypeBtn,
  },
  data() {
    return {
      pageTitle: "X",
      paymentMethods: ["mastercard", "paypal", "google", "apple"],
    };
  },
};
</script>

<style scoped>
.titleBox {
  h2 {
    color: #000;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  h4 {
    color: #000;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
.mainContent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 35px 36px;
  border-radius: 50px 50px 0px 0px;
  background: #fff;
  box-shadow: 4px 0px 100px 0px rgba(0, 0, 0, 0.25);
  .BtnBox {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  ::v-deep .roundedLeft input.form-control {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  ::v-deep .roundedRight input.form-control {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .scanBtn {
    border-radius: 10px;
    background: var(
      --header,
      linear-gradient(180deg, #82d100 0%, #5d9600 100%)
    );
  }

  .ScanArea {
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
  }
}
</style>
