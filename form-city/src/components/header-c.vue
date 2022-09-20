<template>
  <div class="w-full p-[10px] flex flex-col justify-center md:py-5 md:px-20 md:flex-row md:justify-start">
    <btn-city
      v-for="city of dataCities"
      :key="city.id"
      :city="city.text"
      :bColor="city.color"
      :id="city.id"
      @showForm="showForm"
    ></btn-city>
    
  </div>
</template>

<script>
import btnCity from './btn-city.vue';

export default {
  name: 'header-c',

  components: {
    btnCity,
  },

  data() {
    return {
      dataCities: [
        {
          text: 'Заказать в Москву',
          id: 1,
          color: '#3B82F6',
        },

        {
          text: 'Заказать в Санкт-Петербург',
          id: 2,
          color: '#0D9488',
        }
      ]
    }
  },

  methods: {
    showForm() {
      this.$emit('showForm');
    }
  }
}
</script>

<style>

</style>