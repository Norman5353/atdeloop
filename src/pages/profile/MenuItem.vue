<!-- MenuItem.vue -->
<template>
    <div class="menuItem">
      <img :src="imgPath" :alt="title + ' Image'">
      <h6>{{ title }}</h6>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    props: {
      imgPath: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
    },
  });
  </script>
  
  <style scoped>
  .menuItem {
    display: flex;
    align-items: center;
    padding: 10px 0;
    
  }
  
  .menuItem img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  </style>
  