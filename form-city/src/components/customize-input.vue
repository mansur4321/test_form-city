<template>
  <div class="smX:w-full smB:w-[190px] mdB:w-[162px]">
    <p class="mb-1">
        {{title}}*
    </p>

    <input
        v-if="!showSelect" :type="type" :placeholder="placeholder"
    class="w-full px-[13px] py-[9px] rounded-md border-solid border">

    <select 
        v-if="showSelect"
    class="w-full px-[13px] py-[9px] rounded-md border-solid border cursor-pointer smX:w-full smB:w-[409px] mdB:w-full">
        <option 
            v-for="dataCity of dataCities"
            :key="dataCity.id"
            :value="dataCity.id"
        >
            {{dataCity.name}}
        </option>
        
    </select>
  </div>
</template>

<script>


export default {
    props: {
        title: String,
        type: String,
        placeholder: {
            type: String,
            default: null,
        },
        dataCities: {
            type: Object,
            default: null,
        }
    },

    data() {
        return {
            showSelect: false
        }
    },

    mounted() {
        if (!this.placeholder) {
            this.showSelect = true;
        }
    },
}
</script>

<style>

</style>