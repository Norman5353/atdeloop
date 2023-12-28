<template>
  <div class="image-selector">
    <div v-for="(image, index) in images" :key="index" class="image-container">
      <img :src="image || placeholderImage" alt="Selected Image" @click="selectImage(index)" />
      <input type="file" @change="handleFileChange(index)" ref="fileInputRefs" style="display: none" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const images = ref([null, null, null]); // Initialize with empty slots
    const placeholderImage = 'path/to/placeholder-image.jpg'; // Replace with your placeholder image path
    const fileInputRefs = ref(Array(images.value.length).fill(null));

    const selectImage = (index) => {
      const fileInput = fileInputRefs.value[index];

      if (fileInput) {
        // Access the underlying DOM element and trigger the click event
        fileInput.$el.click();
      }
    };

    const handleFileChange = (index) => {
      const fileInput = fileInputRefs.value[index];
      const file = fileInput.files[0];

      if (file) {
        // Update the selected image with the chosen file
        const reader = new FileReader();
        reader.onload = () => {
          images.value[index] = reader.result;
        };
        reader.readAsDataURL(file);
      }
    };

    return {
      images,
      placeholderImage,
      selectImage,
      handleFileChange,
      fileInputRefs,
    };
  },
};
</script>


<style scoped>
.image-selector {
  display: flex;
  flex-wrap: wrap;
}

.image-container {
  margin: 10px;
  cursor: pointer;
}

img {
  max-width: 100%;
  height: auto;
  border: 2px solid #ccc;
  border-radius: 8px;
}

input[type="file"] {
  display: none;
}
</style>
