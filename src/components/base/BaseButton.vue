<template>
  <button class="mainBtn" @click="navigateAndAnimate">Click Me</button>
</template>

<script>
export default {
  methods: {
    navigateAndAnimate() {
      // this.$router.push('/android-large-2');

      // Animate the button
      const btn = document.querySelector(".mainBtn");
      btn.style.animation = "moveOutRight 300ms ease-in-out";

      // Example: Triggering a delay before navigation after animation
      setTimeout(() => {
        // Replace this with your navigation logic, for example:
        // this.$router.push('/android-large-2');
        console.log("Navigating to Android Large - 2");
      }, 300); // Match the animation duration
    },
  },
};
</script>
<!-- @import '../../assets/styles/colors.scss'; -->
<style lang="scss">
.mainBtn {
  display: inline-flex;
  padding: 12px 95px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  background: linear-gradient(180deg, #82d100 0%, #5d9600 100%);
  width: 279px;
  min-height: 42px;
  color: #fff;
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-wrap: nowrap;
}
</style>
