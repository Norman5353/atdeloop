<template>
    <div class="base-dialog" v-if="isVisible" @click="closeDialog">
      <!-- Dialog content -->
      <div class="dialog-content">
        <!-- ... (your dialog content) ... -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isVisible: {
        type: Boolean,
        required: true,
      },
    },
    methods: {
      closeDialog() {
        // Method to close the dialog when clicked outside (optional)
        this.$emit('close');
      },
    },
  };
  </script>
  
  <style scoped>
  /* ... (your dialog styles) ... */
  </style>
  