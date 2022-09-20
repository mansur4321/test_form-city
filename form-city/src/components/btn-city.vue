<template>
  <button
  :style="{background: bColor}"
  class="leading-4 mb-[10px] whitespace-nowrap rounded-md inline-block text-base py-[9px] w-full text-center text-white md:px-[17px] md:mr-5 md:w-auto">
    {{city}}
  </button>
</template>

<script>
export default {
    name: 'btn-city',
    props: {
        city: String,
        bColor: String 
    },
}
</script>

<style>

</style>