<template>
  <div class="w-60 p-5 bg-white h-80 text-[16px] rounded-lg smB:w-96">
    <p class="text-[25px] mb-2">Сообщение</p>
    {{message}}
  </div>
</template>

<script>
export default {
    computed: {
        message() {
            return this.$store.state.respMessage;
        },
    },
    
}
</script>

<style>

</style>