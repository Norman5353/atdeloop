<template>
    <div class="baseNav">
      <div id="navigation-wrapper">
        <div class="navigation">
          <div
            class="navigation-content"
            :class="{
              'first-color': navigation[0].selected,
              'second-color': navigation[1].selected,
              'third-color': navigation[2].selected,
              'fourth-color': navigation[3].selected,
            }"
          ></div>
          <div class="navigation-buttons">
            <ul>
              <li
                v-for="(nav_item, index) in navigation"
                :key="index"
                :class="{ selected: nav_item.selected }"
                @click="selectItem(index)"
              >
                <i class="material-icons">{{ nav_item.icon }}</i>
                <p>{{ nav_item.name }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const navigation = ref([
        { name: "HOME", icon: "home", selected: true },
        { name: "CHATS", icon: "assignment", selected: false },
        { name: "ADD", icon: "chat", selected: false },
        { name: "DIVERSITY", icon: "account_circle", selected: false },
        { name: "PROFILE", icon: "account_circle", selected: false },
      ]);
  
      const selectItem = (placement) => {
        navigation.value.forEach((item, index) => {
          item.selected = (index === placement);
        });
      };
  
      return {
        navigation,
        selectItem,
      };
    },
  };
  </script>
  
<style>
.baseNav {
 
  body {
    background: rgba(90, 164, 239, 1);
    background: -moz-linear-gradient(
      -45deg,
      rgba(90, 164, 239, 1) 0%,
      rgba(166, 115, 197, 1) 100%
    );
    background: -webkit-gradient(
      left top,
      right bottom,
      color-stop(0%, rgba(90, 164, 239, 1)),
      color-stop(100%, rgba(166, 115, 197, 1))
    );
    background: -webkit-linear-gradient(
      -45deg,
      rgba(90, 164, 239, 1) 0%,
      rgba(166, 115, 197, 1) 100%
    );
    background: -o-linear-gradient(
      -45deg,
      rgba(90, 164, 239, 1) 0%,
      rgba(166, 115, 197, 1) 100%
    );
    background: -ms-linear-gradient(
      -45deg,
      rgba(90, 164, 239, 1) 0%,
      rgba(166, 115, 197, 1) 100%
    );
    background: linear-gradient(
      135deg,
      rgba(90, 164, 239, 1) 0%,
      rgba(166, 115, 197, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5aa4ef', endColorstr='#a673c5', GradientType=1);
  }

  a {
    margin: 20px;
    display: block;
    color: white;
  }

  .material-icons {
    font-family: "Material Icons";
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;
    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;
    /* Support for IE. */
    font-feature-settings: "liga";
  }

  #navigation-wrapper {
    height: 290px;
    width: 460px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  
  }

  .navigation {
    overflow: auto;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
  }

  .navigation-content {
    &.first-color {
      background-color: #efe6f7;
    }
    &.second-color {
      background-color: #ffefe6;
    }
    &.third-color {
      background-color: #efefff;
    }
    &.fourth-color {
      background-color: #efffef;
    }
    transition: all 0.3s;
    height: 150px;
  }
  .navigation-buttons {
    overflow: auto;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);
  }
  .navigation-buttons ul {
    background-color: #fff;
    li {
      float: left;
      display: inline-block;
      width: 25%;
      padding: 10px;
      text-align: center;
      color: #b5b5b5;
      font-size: 15px;
      transition: all 0.2s;
      cursor: pointer;
      &.selected {
        color: #5a9cef;
        transform: scale(1.05);
      }
      i {
        font-size: 30px;
      }
      p {
        font-weight: 500;
      }
    }
  }
}
</style>
