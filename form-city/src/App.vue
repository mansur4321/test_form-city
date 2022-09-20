<script lang="js">
import headerC from './components/header-c.vue'
import FormC from './components/form-c.vue';

export default {
  name: 'App',
  components: {
    headerC,
    FormC
}
}
</script>

<template>
  <div class="h-100vh w-full smX:px-2">
    <header-c></header-c>
    <div class="absolute top-0 left-0 w-full h-[100vh] z-10 bg-[#6B7280b9] flex justify-center items-center smX:px-2">
      <form-c></form-c>
    </div>
  </div>
</template>

<style>
</style>
