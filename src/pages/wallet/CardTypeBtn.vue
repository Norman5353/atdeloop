<template>
  <div class="wrapper">
    <Button
      :class="{ 'pressed': isButtonPressed }"
      :isPressed="isButtonPressed"
      @click="toggleButton"
    >
      <img
        v-if="paymentMethod === 'mastercard'"
        src="@/assets/images/creditCart/mastercardLogo.svg"
        alt="Mastercard"
      />
      <img
        v-else-if="paymentMethod === 'paypal'"
        src="@/assets/images/creditCart/paypal.svg"
        alt="Paypal"
      />
      <img
        v-else-if="paymentMethod === 'google'"
        src="@/assets/images/creditCart/google.svg"
        alt="Google Pay"
      />
      <img
        v-else-if="paymentMethod === 'apple'"
        src="@/assets/images/creditCart/apple.svg"
        alt="Apple Pay"
      />
      <!-- Show the pay.svg icon for Google Pay and Apple Pay -->
      <img
        v-if="paymentMethod === 'google' || paymentMethod === 'apple'"
        src="@/assets/images/creditCart/pay.svg"
        alt="Pay"
        class="ps-1"
      />
    </Button>
  </div>
</template>

<script>
export default {
  props: {
    paymentMethod: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isButtonPressed: false,
    };
  },
  methods: {
    toggleButton() {
      this.isButtonPressed = !this.isButtonPressed;
      // Add any other functionality here based on button press
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  button {
    border: none;
    width: 69px;
    height: 38px;
    flex-shrink: 0;
    border-radius: 30px;
    background: linear-gradient(4deg, #bdbcbc 2.92%, #ebe8e8 118.17%);
  }
  .pressed {
    background: #d9d9d9;

    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  }
}
</style>
