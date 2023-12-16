<template>
  <div class="homePage">
    <img class="mobileSVG" src="../../assets/images/mobile.svg" alt="" />

    <div class="content">
      <h3 class="text-nowrap test-center mb-3">Verify your Email</h3>
      <h6 class="text-nowrap test-center mb-3">Enter the code sent to</h6>
      <p class="text-nowrap test-center fGreen3">email@gmail.com</p>

      <div class="OTPBox ">
        <div style="display: flex; flex-direction: row" class="m-4">
          <v-otp-input
            ref="otpInput"
            v-model:value="bindModal"
            input-classes="otp-input"
            separator=" "
            :num-inputs="5"
            :should-auto-focus="true"
            input-type="letter-numeric"
            :conditionalClass="['one', 'two', 'three', 'four', 'five']"
            :placeholder="['', '', '', '']"
            @on-change="handleOnChange"
            @on-complete="handleOnComplete"
          />
        </div>

        <div class="resendCodeBox d-flex flex-column justify-content-center align-content-center align-items-center mb-4">
          <p class="m-0">I Didn’t Receive the Code?</p>
          <a class="resendCode" href="">Recent Code</a>
        </div>

        <!-- <a @click="clearInput()">resend code</a>
    <button @click="fillInput('2929')">Fill Input</button> -->
      </div>
      <base-button class="">Verify</base-button>
    </div>
  </div>
</template>

<script>
// import { ref } from "vue";
// import VOtpInput from "vue3-otp-input";

// const otpInput = ref(null);
// const bindModal = ref("");

// const handleOnComplete = (value) => {
//   console.log("OTP completed: ", value);
// };

// const handleOnChange = (value) => {
//   console.log("OTP changed: ", value);
// };

// const clearInput = () => {
//   otpInput.value && otpInput.value.clearInput();
// };

// const fillInput = (value) => {
//   console.log(value);
//   otpInput.value && otpInput.value.fillInput(value);
// };
</script>

<!-- OTP classes -->
<style>
.OTPBox {
  .otp-input {
    background-color: #e4e4e4;
    width: 40px;
    height: 40px;
    padding: 5px;
    margin: 0 10px;
    font-size: 20px;
    border-radius: 100%;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border: none;
    text-align: center;
  }
  /* Background colour of an input field with value */
  .otp-input.is-complete {
    background-color: #e4e4e4;
  }
  .otp-input::-webkit-inner-spin-button,
  .otp-input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input::placeholder {
    font-size: 15px;
    text-align: center;
    font-weight: 600;
  }
}
</style>

<style scoped>
.resendCode {
  color: #5d9600;
  text-align: center;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline !important;
}
.homePage {
  position: relative;
  background-image: url(../../assets/images/main-bg-2.svg);
  height: 926px;

  .mobileSVG {
    width: 152px;
    height: 316px;
    position: absolute;
    top: 110px;
    left: 50%;
    /* Adjust the transform to center the image horizontally */
    transform: translateX(-50%);
  }

  .content {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    bottom: 69px;
    right: 50%;
    transform: translateX(50%);
    max-width: 277px;
  }
}
</style>
