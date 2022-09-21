<script lang="js">
import headerC from './components/header-c.vue'
import FormC from './components/form-c.vue';
import messagePopup from './components/message-popup.vue';

export default {
  name: 'App',
  components: {
    headerC,
    FormC,
    messagePopup
  },

  data() {
    return {
      showForm: false,
      showMessagePopup: false,
    }
  },

  methods: {
    showFormWrapper() {
      this.showForm = true;
    },

    showMessageWrapper() {
      this.showMessagePopup = true;
    },

    closeWrapperPopups() {
      this.showForm = false;
    },

    stopPropag(e) {
      e.stopPropagation();
    }
  }
}
</script>

<template>
  <div class="h-100vh w-full smX:px-2">
    <header-c
      @showForm="showFormWrapper"
    ></header-c>
    
    <div 
      v-if="showForm"
      @click="closeWrapperPopups"
    class="absolute top-0 left-0 w-full h-[100vh] z-10 bg-[#6B7280b9] flex justify-center items-center smX:px-2">
      <form-c
        v-if="!showMessagePopup"
        @closeFormPopup="showMessageWrapper"
        @click="stopPropag($event)"
      ></form-c>
      <message-popup class="mt-30 mx-auto"
        @click="stopPropag($event)"
        v-else
      >
      </message-popup>
    </div>
  </div>
</template>

<style>
</style>
