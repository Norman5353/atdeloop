<template>
  <div class="baseNav bg-warning">
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
          <ul class="mb-0">
            <li
              class="d-inline-flex gap-3 justify-content-center"
              v-for="(nav_item, index) in navigation"
              :key="index"
              :class="{ selected: nav_item.selected }"
              @click="selectItem(index)"
            >
              <span class="d-inline-block">
                <img :src="nav_item.path" alt=""
              /></span>
              <!-- dynamic address above  -->

              <!-- static address just for test -->
              <!-- <p>{{ nav_item.name }}</p> -->
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const paths = {
      _home: require("../../assets/images/nav/Home.svg"),
      _chats: require("../../assets/images/nav/Chat.svg"),
      _add: require("../../assets/images/nav/Add.svg"),
      _diversity: require("../../assets/images/nav/Diversity.svg"),
      _profile: require("../../assets/images/nav/profile.svg"),
    };

    const navigation = ref([
      { name: "HOME", path: paths._home, selected: true },
      { name: "CHATS", path: paths._chats, selected: false },
      { name: "ADD", path: paths._add, selected: false },
      { name: "DIVERSITY", path: paths._diversity, selected: false },
      { name: "PROFILE", path: paths._profile, selected: false },
    ]);

    const selectItem = (placement) => {
      navigation.value.forEach((item, index) => {
        item.selected = index === placement;
      });
    };

    return {
      navigation,
      selectItem,
    };
  },
};
</script>

<style scoped>
.baseNav {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;

  a {
    margin: 20px;
    display: block;
    color: white;
  }

  #navigation-wrapper {
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }

  .navigation {
    /* overflow: auto; */
    /* box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5); */
  }

  .navigation-content {
    /* &.first-color {
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
    } */
    transition: all 0.3s;
    /* height: 150px; */
  }
  .navigation-buttons {
    height: 54px;
  }
  .navigation-buttons ul {
    background-color: #a6a6a6;
    display: flex;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    height: 100%;

    li {
      float: right;
      display: inline-block;
      width: 25%;
      padding: 10px;
      text-align: center;
      color: #b5b5b5;
      font-size: 15px;
      transition: all 0.2s;
      cursor: pointer;
      &.selected {
        /* position: absolute; */
        /* bottom: 50px; */
        color: #5a9cef;
        transform: scale(1.5) translateY(-10px);
        border: 3px solid #5d9600;
        border-radius: 100%;
        background: #5d9600 50% / contain no-repeat;
        fill: linear-gradient(180deg, #82d100 0%, #5d9600 100%);
        width: 16%;
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
