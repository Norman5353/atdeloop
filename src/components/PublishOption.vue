<template>
    <div class="wrapper">
      <a v-if="filteredOptions.length > 0" class="w-100" href="#">
        <div class="d-flex flex-row justify-content-between w-100">
          <div v-for="option in filteredOptions" :key="option.title" class="d-flex flex-row justify-content-center titleBox">
            <span><img :src="option.icon" alt="" /></span>
            <h6 class="m-0">{{ option.title }}</h6>
          </div>
          <span><img src="../assets/images/publish/Forward.svg" alt="" /></span>
        </div>
      </a>
      <a v-else class="w-100" href="#">No options available</a>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      preview: Boolean,
      edit: Boolean,
      delete: Boolean,
      contactSupport: Boolean,
      adViewStats: Boolean
    },
    data() {
      return {
        options: {
          ContactSupport: {
            title: "ContactSupport",
            icon: require("../assets/images/publish/Contact Support.svg"),
          },
          Delete: {
            title: "Delete",
            icon: require("../assets/images/publish/Delete.svg"),
          },
          Edit: {
            title: "Edit",
            icon: require("../assets/images/publish/Edit.svg"),
          },
          Preview: {
            title: "Preview",
            icon: require("../assets/images/publish/Preview.svg"),
          },
          AdViewStats: {
            title: "AdViewStats",
            icon: require("../assets/images/publish/Ad View Stats.svg"),
          },
        },
      };
    },
    computed: {
      filteredOptions() {
        return Object.values(this.options).filter((option) => {
          if (option.title === "Delete" && this.delete) {
            return true;
          }
          if (option.title === "Edit" && this.edit) {
            return true;
          }
          if (option.title === "ContactSupport" && this.contactSupport) {
            return true;
          }
          if (option.title === "Preview" && this.preview) {
            return true;
          }
          if (option.title === "AdViewStats" && this.adViewStats) {
            return true;
          }
          return false;
        });
      },
    },
  };
  </script>
  
  <style lang="scss">
  .wrapper {
    padding: 20px 0;
    border-bottom: solid 1.8px #959595;
    .titleBox {
      display: flex;
      gap: 7px;
      img {
        width: 27px;
        height: 27px;
        flex-shrink: 0;
      }
      h6 {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        color: #000;
        font-family: Inter;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        align-items: center;
        text-align: center;
      }
    }
  }
  /* Your SCSS styles here */
  </style>
  