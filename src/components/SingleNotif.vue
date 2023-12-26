<template>
  <div class="singleNotif">
    <span class="text-danger dot">●</span>
    <img src="../assets/images/notif.svg" alt="" />
    <div class="content">
      <h6 class="p-0 m-0 ps-2">Lorem ipsum dolor sit amet consectetur.</h6>
      <span class="ps-2 ">Now</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.singleNotif {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 11px 23px;
  border-bottom: solid 1px #ccc;

  img {
    width: 31px;
    height: 31px;
    flex-shrink: 0;
  }

  .dot {
    font-size: 8px;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    // align-items: center;
    h6 {
      color: #6f6e6e;
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    span {
      color: #9a9a9a;
      font-family: Inter;
      font-size: 7px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
}
</style>
