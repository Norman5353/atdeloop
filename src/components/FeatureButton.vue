<template>
  <button :class="['mainBtn', colorGradient[color], buttonSizes[size]]">
    <img :src="imgSrc" alt="" />
    <h6>{{ title }}</h6>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    title: String,
    size: {
      type: String,
      default: "medium",
      validator: (value) => ["small", "medium", "large"].includes(value),
    },
    color: {
      type: String,
      default: "grey",
      validator: (value) => ["grey", "white", "green"].includes(value),
    },
    imgSrc: String, // New prop for image source
  },
  computed: {
    colorGradient() {
      return {
        grey: "greyGradient",
        white: "whiteGradient",
        green: "greenGradient",
      };
    },
    buttonSizes() {
      return {
        small: "smallBtn",
        medium: "mediumBtn",
        large: "largeBtn",
      };
    },
  },
};
</script>

<style lang="scss">
.mainBtn {
  width: 70px;
  height: 63px;
  
  border-radius: 10px;
  box-shadow: 0px 3px 2px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
}

.greyGradient {
  background: linear-gradient(4deg, #bdbcbc 2.92%, #ebe8e8 118.17%);
}

.whiteGradient {
  background: #fff;
}

.greenGradient {
  background: linear-gradient(180deg, #82d100 0%, #5d9600 100%);
  h6 {
    color: white !important;
  }
}

.smallBtn {
  border-radius: 10px;
  width: 70px;
  height: 63px;
  box-shadow: 0px 3px 2px 0px rgba(0, 0, 0, 0.25);

  img {
    width: 35px;
    height: 35px;
  }
  h6 {
    color: #000;
    font-family: Inter;
    font-size: 9px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
}

.mediumBtn {
  display: flex;
  width: 135px;
  height: 135px;
  padding: 7px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
  border-radius: 20px;
  img {
    width: 45px;
    height: 45px;
  }
  h6 {
    color: #000;
    text-align: center;
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
}

.largeBtn {
  display: flex;
  width: 193px;
  height: 193px;
  padding: 10px 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 13px;
  border-radius: 30px;
  img {
    width: 60px;
    height: 60px;
  }
  h6 {
    color: #000;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
</style>
