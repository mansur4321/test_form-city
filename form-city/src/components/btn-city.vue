<template>
  <button 
    @click="sharingCity"
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
        id: Number,
        bColor: String
    },

    methods: {
      sharingCity() {
        this.$emit('showForm');

        this.$store.commit('gettingCityId', this.id);
      }
    }
}
</script>

<style>

</style>