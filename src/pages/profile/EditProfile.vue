<template>
  <div class="page position-relative">
    <base-header :pageTitle="pageTitle"></base-header>

    <!-- profileBox  -->
    <div
      class="d-flex flex-column justify-content-center align-items-center gap-3 mt-3 mb-3"
    >
      <div class="imgWrapper">
        <img src="../../assets/images/profile.svg" alt="" />
      </div>
    </div>

    <div class="editProfile">
      <base-form text :placeholder="'First Name '"  class="mb-4"/>
      <base-form text :placeholder="'Last Name '"  class="mb-4"/>
      <base-form email :placeholder="'Email '" class="mb-4" />
      <base-form text :placeholder="'City '"  class="mb-4"/>
      <base-form number :placeholder="'Phone '"  class="mb-4"/>
      <base-form text :placeholder="'Address '" class="mb-4" />
      <textarea class="base-form form-control" placeholder="Add Your Place"></textarea>
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
      pageTitle: "EditProfile",
    };
  },
};
</script>

<style scoped>
.editProfile {
  border-radius: 50px 50px 0px 0px;
  background: #fff;
  box-shadow: 4px 0px 250px 0px rgba(0, 0, 0, 0.25);
  padding: 34px 35px 30px 35px;
  
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
