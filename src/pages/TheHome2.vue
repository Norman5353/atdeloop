<template>
  <div class="homePage" ref="homePageRef">
    <img src="../assets/logoPlusText.svg" />
    <!-- <h1 class="text-center mt-5">Welcome to atdeloop</h1> -->

    <div
      class="d-flex justify-content-center flex-column align-items-center gap-1 btnGroup w-100"
      v-if="btnGroupVisible"
      :style="btnGroupStyle"
    >
      <!-- "Frame 68"; -->
      <base-button isSecondary>Sign In</base-button>
      <base-button isSecondary>Sign Up</base-button>
    </div>
    <!-- <div class="btnGroup-overlay" v-if="overlayVisible"></div> -->
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  setup() {
    const homePageRef = ref(null);
    const overlayVisible = ref(false);
    const btnGroupVisible = ref(false);
    const btnGroupStyle = ref({
      opacity: 0,
      transition: 'opacity 0.5s ease-in-out 500ms',
      animationName: '',
      animationDuration: '0.5s',
      animationFillMode: 'forwards',
    });

    onMounted(() => {
      setTimeout(() => {
        overlayVisible.value = true;
        btnGroupVisible.value = true;
        btnGroupStyle.value.animationName = 'dissolve';
        btnGroupStyle.value.animationDelay = '500ms';
      }, 500);
    });

    onBeforeUnmount(() => {
      overlayVisible.value = false;
      btnGroupVisible.value = false;
      btnGroupStyle.value.animationPlayState = 'reverse';
    });

    return {
      overlayVisible,
      btnGroupVisible,
      btnGroupStyle,
      homePageRef,
    };
  },
};
</script>


<style scoped>
.homePage {
  position: relative;
  background-image: url(../assets/images/main-bg.svg);
  height: 926px;
  img {
    position: absolute;
    top: 15%;
    left: 50%;
    right: 50%;
    transform: translateX(-50%);
    width: 150px;
  }

  .btnGroup {
    position: absolute;
    bottom: 108px;
    opacity: 0;
    transition: opacity 0.5s ease-in-out 500ms;
  }
  .btnGroup-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 10;
    animation-name: dissolve;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }
}
</style>
