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
            :ref="'id-' + dataCity.id"
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
            type: Array,
            default: null,
        }
    },

    data() {
        return {
            showSelect: false,
        }
    },

    computed: {
        selectedId() {
            this.setSelectedId(this.$store.state.cityId);
            return this.$store.state.cityId;
        }
    },

    methods: {
        setSelectedId(id) {
            let option = this.$refs[`id-${id}`][0];
            console.log(option)

            for (let i = 1; i < 4; i++) {
                let opt = this.$refs[`id-${i}`][0];
                opt.removeAttribute('selected');
            }
            option.setAttribute('selected', 'true');
            console.log( option.getAttribute('selected'));
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