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
      <h6 class="fw-bold">Mehrdad Seyfi</h6>
      <base-button>Edit Profile</base-button>
    </div>

    <profile-menu></profile-menu>
  
    <base-nav></base-nav>
  </div>
</template>

<script>
import ProfileMenu from "../profile/ProfileMenu.vue";
export default {
  components: {
    ProfileMenu,
    
  },
  data() {
    return {
      pageTitle: "Profile", 
    };
  },

};
</script>

<style>
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

</style>
