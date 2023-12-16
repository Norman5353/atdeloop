<template>
  <div class="baseHeader">
    <button class="leftButton" @click="goBack">
      <span>
        <img src="../../assets/images/LeftArrow.svg" alt="" />
      </span>
    </button>
    <h5 class="title">{{ pageTitle }}</h5>
  </div>
</template>

<script>
export default {
  props: {
    pageTitle: {
      type: String,
      required: true,
    },
  },
  methods: {
    goBack() {
      // Implement the functionality to go back here
      // For example, using router or custom logic
    },
  },
  // Other component code
};
</script>

<style scoped>
.baseHeader {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 49px;
  background: linear-gradient(180deg, #82d100 0%, #5d9600 100%);
  color: #fff;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 0 16px;
}

.leftButton {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
}

.title {
  position: absolute;
  right: 50%;
  top: 50%;

  transform: translate(50%, -50%);
}
</style>
