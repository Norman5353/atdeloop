<template>
  <div class="page position-relative">
    <base-header :pageTitle="pageTitle"></base-header>
    <div
      class="d-flex flex-column justify-content-center align-items-center gap-3 mt-3"
    >
      <div class="imgWrapper">
        <img src="../../assets/images/profile.svg" alt="" />
      </div>
      <h6 class="fw-bold">Mehrdad Seyfi</h6>
      <base-button>Edit Profile</base-button>
    </div>

    <!-- <div class="menuContent"></div> -->
    <base-nav></base-nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: "Profile", // Use a different name to avoid conflicts
    };
  },
  // Other component code
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
