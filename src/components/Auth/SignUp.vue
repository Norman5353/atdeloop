<template>
  <div class="homePage section">
    <img class="logoText" src="../../assets/logoPlusText.svg" />
    <!-- <h1 class="text-center mt-5">Welcome to atdeloop</h1> -->

    <div
      class="d-flex justify-content-center flex-column align-items-center btnGroup w-100"
    >
      <div class="d-flex flex-row justify-content-between">
        <base-form half first-name :placeholder="'First name'"></base-form>
        <base-form half first-name :placeholder="'Last name'"></base-form>
      </div>

      <base-form email :placeholder="'Email Address'" />
      <base-form password :placeholder="'password'"></base-form>
      <base-form password :placeholder="'confirm Password'"></base-form>
      <base-button class="my-3">Sign Up</base-button>

      <div class="custom-checkbox">
        <input type="checkbox" id="privacy-agreement" />
        <label for="privacy-agreement">I Agree with privacy and policy</label>
      </div>
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

<style scoped>

base-button {
  margin-top: 23px;
}
#privacy-agreement {
  margin-right: 7px;
  margin-top: 23px;
  color: #000;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
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
  margin-top: 20px;
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
