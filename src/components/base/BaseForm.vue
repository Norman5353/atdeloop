<template>
    <div class="baseForm base-form" :class="{ 'half-width': halfWidth }">
      <input
        v-model="inputValue"
        :placeholder="placeholder"
        class="form-control"
        :class="{ 'with-icon': hasIcon }"
        :type="inputType"
      />
      <i
        v-if="hasIcon && showPasswordToggle"
        class="icon bi"
        :class="eyeIconClass"
        @click="togglePasswordVisibility"
        role="button"
      ></i>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      hasIcon: {
        type: Boolean,
        default: false,
      },
      halfWidth: {
        type: Boolean,
        default: false,
      },
      placeholder: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
        inputValue: '',
        showPassword: false,
      };
    },
    computed: {
      inputType() {
        return this.showPassword ? 'text' : 'password';
      },
      eyeIconClass() {
        return this.showPassword ? 'bi-eye-slash-fill' : 'bi-eye-fill';
      },
      showPasswordToggle() {
        // Show the eye icon only if the input type is password
        return this.inputType === 'password';
      },
    },
    methods: {
      togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
      },
    },
  };
  </script>
  
  <style scoped lang="scss">
  /* Existing styles for base-form... */
  
  .icon {
    /* Styles for the icon */
    cursor: pointer;
    /* Add more styles if needed */
  }
  </style>
  
  <style scoped lang="scss">
  .baseForm {
    border-radius: 30px;
    background: #dedcdc;
    box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.2) inset;
    color: #959595;
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  
    &.base-form {
      display: flex;
      width: 100%; 
      
      &.half-width {
        width: 50%; 
      }
      .form-control {
        /* Styles for the input */
        flex: 1;
        /* Adjust padding, border, etc. */
        &.with-icon {
         
        }
      }
      .icon {
       
      }
    }
  }
  </style>
  