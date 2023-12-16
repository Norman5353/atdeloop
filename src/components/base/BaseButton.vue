<template>
    <button class="mainBtn" :class="{ secondary: isSecondary }">
     <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    props: {
      isSecondary: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      // navigateAndAnimate() {
      //   const btn = document.querySelector(".mainBtn");
      //   btn.style.animation = "moveOutRight 300ms ease-in-out";
  
      //   setTimeout(() => {

      //     window.location.href = "/android-large-2";
      //   }, 300); 
      // },
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

  &.secondary {
    border-radius: 30px;
    background: var(--button, linear-gradient(4deg, #BDBCBC 2.92%, #EBE8E8 118.17%));
    color: black;
  }

}
</style>
