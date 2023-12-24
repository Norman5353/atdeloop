<template>
  <div class="profileMenu">
    <ul class="list-unstyled">
      <li v-for="(item, index) in menuItems" :key="index">
        <MenuItem :imgPath="getImagePath(item.imgName)" :title="item.name" />
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import MenuItem from "./MenuItem.vue";

export default defineComponent({
  components: {
    MenuItem,
  },
  setup() {
    // Define your menu items with names and associated image names
    const menuItems = [
      { name: "Your Wallet", imgName: "1" },
      { name: "My Rented Item", imgName: "2" },
      { name: "My Rentals", imgName: "3" },
      { name: "My Requests", imgName: "4" },
      { name: "Transactions", imgName: "5" },
      { name: "About Us", imgName: "6" },
      { name: "Terms and Conditions", imgName: "7" },
      { name: "Saved Items", imgName: "8" },
      { name: "Exit", imgName: "9" },
    ];

    // Function to get the image path based on image name
    const getImagePath = (imgName) => {
      return require(`@/assets/images/profile-menu/${imgName}.svg`); // Assuming you're using Vue CLI and have set up aliases
    };

    return {
      menuItems,
      getImagePath,
    };
  },
});
</script>

<style scoped>
.profileMenu {
  border-radius: 50px 50px 0px 0px;
  background: #fff;
  box-shadow: 4px 0px 250px 0px rgba(0, 0, 0, 0.25);
  padding: 10px 20px 30px 20px;

  ul li {
    border-bottom: solid 2px #747474;
    cursor: pointer;

    :hover {
      transform: translateY(-5px);
    }
  }
  ul li:last-child {
    border-bottom: none; 
  }
}
</style>
