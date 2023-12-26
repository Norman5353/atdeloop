<template>
  <div class="page position-relative">
    <base-header :pageTitle="pageTitle"></base-header>

    <!-- profileBox  -->

    <div class="requestDetails">
      <button class="categoryBtn mb-3">
        <span class="text"> Select the category</span>
        <span class="img"
          ><img src="../../assets/images/Forward.svg" alt=""
        /></span>
      </button>

      <span class="inputLable">Title:</span>
      <base-form text class="mb-4" />

      <span class="inputLable">Description:</span>
      <textarea rows="8"
        class="base-form form-control"
        
      ></textarea>
            <span class="inputLable">Upload The photos :</span>
            

      <upload-image></upload-image>
      <base-form email :placeholder="'Email '" class="mb-4" />
      <base-form text :placeholder="'City '" class="mb-4" />
      <base-form number :placeholder="'Phone '" class="mb-4" />
      <base-form text :placeholder="'Address '" class="mb-4" />
      <textarea
        class="base-form form-control"
        placeholder="Add Your Place"
      ></textarea>
      <base-button class="w-100 mt-3">Save</base-button>
    </div>
  </div>
</template>

<script>
//   import ProfileMenu from "../profile/ProfileMenu.vue";
export default {
  components: {},
  data() {
    return {
      pageTitle: "Send a Request",
    };
  },
};
</script>

<style scoped lang="scss">
.requestDetails {
  border-radius: 50px 50px 0px 0px;
  background: #fff;
  box-shadow: 4px 0px 250px 0px rgba(0, 0, 0, 0.25);
  padding: 34px 35px 30px 35px;

  .categoryBtn {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    border-radius: 30px;
    height: 48px;
    padding: 19px;
    border: none;

    background: linear-gradient(4deg, #bdbcbc 2.92%, #ebe8e8 118.17%);
    .text {
      color: #4d4d4d;
      font-size: 12px;
      font-weight: 500;
    }
    .img {
      margin-right: -8px;
    }
  }
  .inputLable {
    display: block;
    margin-bottom: 10px;
    color: #000;
    font-family: Inter;
    font-size: 11px;
    font-weight: 500;
  }
}

.imgWrapper {
  border-radius: 100%;
}
.page {
  height: 100vh;
  background: #fafafa;
}

.menuContent {
  height: 75vh;
  background-color: aqua;
}

.base-form {
  display: flex;
  width: 100%;
  min-height: 47px;
  margin-bottom: 10px;
}
.form-control {
  border-radius: 30px;
  background: #dedcdc;
  box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.25) inset;
  color: #959595;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
