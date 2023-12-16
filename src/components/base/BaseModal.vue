<template>
    <div class="modal">
      <div class="modal-background" @click="modal.close()">
        <i class="close-icon" aria-label="Close" @click="modal.close()">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M15.5,8a.25.25,0,0,0-.25-.25V2.5A.25.25,0,0,0,15,2.25V7.75A.25.25,0,0,0,15.5,8Z" />
            <path d="M8.5,15a.25.25,0,0,0,.25.25v-1.5A.25.25,0,0,0,8.5,13.25v1.5Z" />
            <path d="M5,11.5A.25.25,0,0,0,5.25,11V7.75A.25.25,0,0,0,5,7.5V11Z" />
            <path d="M1,8.5A.25.25,0,0,0,1.25,8V2.25A.25.25,0,0,0,1,2.5V8Z" />
          </svg>
        </i>
      </div>
  
      <div class="modal-content">
      <h2>{{ title }}</h2>
      <p>{{ content }}</p>
      
      <!-- Named slot for additional content -->
      <slot name="extra-content"></slot>
      
      <div class="modal-actions">
        <button @click="modal.close()">Close</button>
      </div>
    </div>
  </div>
</template>
  
  <script>
  import { useModal } from 'vue-final-modal';
  
  export default {
    props: {
      title: String,
      content: String,
      actions: {
        type: String,
        default: '[Close]',
      },
    },
  
    setup() {
      const modal = useModal();
  
      const openModal = () => {
        console.log('Modal opened!');

        modal.open();
        console.log('Modal opened after!');

      };
  
      const closeModal = () => {
        modal.close();
      };
  
      return {
        openModal,
        closeModal,
        modal,
      };
    },
  };
  </script>
  
  <style scoped>
  .modal {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
  }
  
  .modal-background {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  
  .close-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  }
  
  .modal-actions {
    text-align: right;
  }
  </style>
  