<template>
  <div class="w-full p-[10px] flex flex-col justify-center md:py-5 md:px-20 md:flex-row md:justify-start">
    <btn-city
      v-for="city of dataCities"
      :key="city.text"
      :city="city.text"
      :bColor="city.color"
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
          color: '#3B82F6',
        },

        {
          text: 'Заказать в Санкт-Петербург',
          color: '#0D9488',
        }
      ]
    }
  }
}
</script>

<style>

</style>