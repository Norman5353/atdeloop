<template>
  <div class="homePage section">
    <img class="logoText" src="../../assets/logoPlusText.svg" />
    <!-- <h1 class="text-center mt-5">Welcome to atdeloop</h1> -->

    <div
      class="d-flex justify-content-center flex-column align-items-center btnGroup w-100"
    >
      <base-form email :placeholder="'Email Address'" />
      <base-form password :placeholder="'password'"></base-form>
      <base-button>sign in</base-button>

      <a class="forgotPassword" @click="showForgetPasswordDialog"
        >Forget Password?</a
      >

      <!-- Include the BaseDialog component and pass the isVisible prop -->
      <base-dialog
        :isVisible="isDialogVisible"
        @close="hideForgetPasswordDialog"
      />

      <div
        class="d-flex justify-content-center flex-column align-items-center w-100 signInWith-wrapper"
      >
        <p>Or sign in with</p>
        <div class="d-flex flex-row justify-content-around w-100 signInWith">
          <div class="signInImgWrapper">
            <a> <img src="../../assets/images/Google Plus.svg" alt="" /></a>
          </div>
          <div class="signInImgWrapper">
            <a><img src="../../assets/images/Facebook.svg" alt="" /></a>
          </div>
        </div>
        <p class="haveAccount mt-4">
          Dont have an account?
          <span> <a class="signUpText" href="">Sign up</a></span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDialogVisible: false,
    };
  },
  methods: {
    showForgetPasswordDialog() {
      this.isDialogVisible = true;
    },
    hideForgetPasswordDialog() {
      this.isDialogVisible = false;
    },
  },
};
</script>

<!-- Add your existing styles -->
<style scoped>
/* ... (your existing styles) ... */
</style>
Make sure you're binding the isVisible prop to the isDialogVisible data property
in your SignIn component where you're using the BaseDialog component. This
should resolve the missing prop warning and allow the BaseDialog component to
correctly receive the visibility information and toggle its display based on
isDialogVisible.

<style scoped>
.signUpText {
  color: #458200;
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
}
.haveAccount {
  color: #000;
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.signInWith-wrapper {
  margin-top: 60px;
}
.signInWith {
  img {
    max-width: 34px;
  }
  .signInImgWrapper {
    display: flex;
    width: 77px;
    height: 44px;
    border-radius: 8px;
    background: #d9d9d9;
    align-items: center;
    justify-content: center;
  }
}

a.forgotPassword {
  margin-top: 20px;
  color: #000;
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline !important;
}
p {
  color: #000;
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.homePage {
  border: 1px solid black;
  position: relative;
  height: 926px;
  .logoText {
    position: absolute;
    top: 15%;
    left: 50%;
    right: 50%;
    transform: translateX(-50%);
    width: 118px;
  }

  .btnGroup {
    position: absolute;
    bottom: 308px;
    right: 50%;
    transform: translateX(50%);
    max-width: 277px;
    max-height: 42px;
  }
}
input::placeholder {
  color: #959595;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
