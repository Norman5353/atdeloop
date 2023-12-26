<template>
  <div class="page position-relative h-100">
    <base-header :pageTitle="pageTitle"></base-header>
    <base-nav></base-nav>
    <div class="h-100 d-flex justify-content-end isPublished mt-5 flex-column">
      <h3 class="w-100 text-start ps-4 fw-bold">Waiting to publish</h3>
      <p class="w-100 text-start ps-4 mt-3">
        Your ad is in the publishing queue. The waiting time will be up to 2
        hours.
      </p>
    </div>

    <div class="mainContent px-4">
      <div class="optionBox">
        <ul class="list-unstyled">
          <li>
            <PublishOption preview />
          </li>
          <li>
            <PublishOption edit />
          </li>
          <li>
            <PublishOption
              delete
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#deletePublished"
            />
          </li>
          <li>
            <PublishOption contactSupport class="border-0" />
          </li>
        </ul>
      </div>
    </div>

    <!-- starting  delete published  modal  -->
    <!-- Modal -->
    <div
      class="modal fade"
      id="deletePublished"
      tabindex="-1"
      aria-labelledby="deletePublished"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content border-0">
          <div class="modal-body">
            <h3 class="modal-title text-center mb-4" id="deletePublishedText">
              Do you want to delete this request?
            </h3>
          </div>

          <div
            class="modal-footer d-flex justify-content-center align-items-center p-0 m-0"
          >
            <div class="d-flex justify-content-center align-items-center p-0 m-0 w-100 ">
              <base-button 
                half
                class="mb-0 yes"
                button-color="darkBG"
                data-bs-toggle="modal"
                data-bs-target="#successfullyDeleted"
                >Yes</base-button
              >
              <base-button
                half
                class="mb-0 no "
                button-color="darkBG"
                data-bs-dismiss="modal"
                >No</base-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- starting  successfully deleted  published  modal  -->
    <!-- Modal -->
    <div
      class="modal fade"
      id="successfullyDeleted"
      tabindex="-1"
      aria-labelledby="successfullyDeleted"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <h3
              class="modal-title text-center m-4"
              id="successfullyDeletedText"
            >
              Your request has been successfully deleted
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import PublishOption from "../components/PublishOption.vue";

export default {
  components: {
    PublishOption,
  },
  setup() {
    const isOpen = ref(false);
    const isFormOpen = ref(false);
    const modalRef = ref(null);

    const openMyModal = () => {
      isOpen.value = true;
    };

    const closeModal = () => {
      isOpen.value = false;
    };

    const onSubmit = () => {
      isFormOpen.value = true;
    };

    const openModal = () => {
      // Accessing modalRef
      console.log(modalRef.value);
      // Perform actions related to modal here
      // e.g., modalRef.value.openModal();
    };

    // Expose variables and functions to the template
    return {
      isOpen,
      isFormOpen,
      openMyModal,
      closeModal,
      onSubmit,
      openModal,
      modalRef,
    };
  },
  data() {
    return {
      pageTitle: "Waiting to publish",
    };
  },
};
</script>

<style lang="scss" scoped>
.modal-open{
    padding-right: 0 !important;
}
.isPublished {
  h3 {
    color: #e10000;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  p {
    color: #000;
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
.mainContent {
}

#deletePublished {
  h3 {
    width: 100%;
    height: 18px;
    flex-shrink: 0;
    color: #000;
    text-align: center;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 50px 17px;
  }
 /deep/  .mainBtn.yes {
  border-radius: 0;
  border-bottom-left-radius: 15px;

  }

  /deep/  .mainBtn.no {
  border-radius: 0;
  border-bottom-right-radius: 15px;
  background: #e3e3e3 !important;color: #000;
  }
}

#successfullyDeletedText {
  color: #000;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
