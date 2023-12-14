<template>
  <div :class="['base-form', { 'half-width': isHalf }]">
    <input
      :type="isPassword ? (showPassword ? 'text' : 'password') : type"
      class="form-control"
      v-model="value"
      :placeholder="placeholderText"
    />
    <button v-if="isPassword" class="btn toggle-password" @click="toggleShow">
      <i
        :class="{
          'bi-eye-slash': showPassword,
          'bi-eye': !showPassword,
        }"
      ></i>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    password: {
      type: Boolean,
      default: false,
    },
    half: {
      type: Boolean,
      default: false,
    },
    placeholder: String, 
  },
  data() {
    return {
      showPassword: false,
      value: null,
    };
  },
  computed: {
    isPassword() {
      return this.password;
    },
    isHalf() {
      return this.half;
    },
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
      const inputField = document.getElementById("passwordInput");

      if (!inputField) {
        // If the input field doesn't have an ID, assign it here
        const passwordInput = document.querySelector('input[type="password"]');
        if (passwordInput) {
          passwordInput.id = "passwordInput";
          passwordInput.classList.add("inputWhileClicked");
        }
      } else {
        // Toggle the class if the input field already has the ID
        inputField.classList.toggle("inputWhileClicked");
      }
    },
  },
};
</script>

<style scoped>
.base-form {
  display: flex;
  width: 100%;
  min-height: 40px;
  margin-bottom: 10px;
}
.half-width {
  width: 48.5%;
}
.form-control {
  border-radius: 30px;
  background: #dedcdc;
  box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.2) inset,
     0px -3px 4px 0px rgba(0, 0, 0, 0.2) inset; 
  color: #959595;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.toggle-password {
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-left: 0;
  padding-left: 0;
  margin-left: 0;
 
  box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.2) inset,
   0px 0px 0px 0px rgba(0, 0, 0, 0.2); 

  color: #959595;
  background: #dedcdc;
}

input[type="password"] {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  border-right: 0;
  padding-right: 0;
  margin-right: 0;
}
.inputWhileClicked {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  border-right: 0;
  padding-right: 0;
  margin-right: 0;
}
</style>
