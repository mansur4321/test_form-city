<template>
    <form action="#" novalidate class="bg-white rounded-lg smX:w-[355px] smX:px-5 smX:pt-[24px] smX:pb-[22px] smB:px-6 smB:w-auto smB:pb-[27px]">
        <h2 class="smX:mb-[36px] smB:mb-[29px] mdB:mb-6">
            <span class="text-[#111827] text-[24px] leading-6 font-medium">Заказать звонок</span>
        </h2>

        <div class="flex smX:flex-col mdB:flex-row">
            <div class="flex smX:flex-col smB:justify-between smB:flex-row smB:mb-5">
                <customize-input class="smX:mb-5 smX:mr-0 smB:mb-0 smB:mr-[29px] smB:last:mr-0 mdB:mr-[20px] mdB:last:mr-[20px]"
                    v-for="input of inputsData"
                    :key="input.title"
                    :title="input.title"
                    :placeholder="input.placeholder"
                    :type="input.type"
                    :submitCheck="submiteCheck"
                    @checkValidateInput="checkValidateInputs"
                ></customize-input>
            </div>

            <div class="flex smX:flex-col smX:items-start smB:flex-row smB:items-end mdB:ml-0.5 mdB:flex-col">

                <customize-input class="smX:mb-5 smX:mr-0 smB:mb-0 smB:mr-[250px] mdB:mb-[18px] mdB:mr-0"
                    :title="selectDataInput.title"
                    :type="selectDataInput.type"
                    :dataCities="selectDataInput.dataCities"
                    :submitCheck="submiteCheck"
                    @checkValidateInput="checkValidateInputs"
                ></customize-input>

                <submitBtn
                    @submitForm="submitForm"
                ></submitBtn>
            </div>  
        </div>
</form>
</template>

<script>
import customizeInput from './customize-input.vue';
import submitBtn from './submit-btn.vue';

export default {
    components: {
    customizeInput,
    submitBtn
},

    data() {
        return {
            submiteCheck: false,

            formData: {
                
            },

            inputsData: [
                {
                    title: 'Имя',
                    type: 'text',
                    placeholder: 'Иван Иванов',
                },

                {
                    title: 'Телефон',
                    type: 'tel',
                    placeholder: '+7 (___) ___-__-__',
                },

                {
                    title: 'Email',
                    type: 'email',
                    placeholder: 'you@example.com',
                },
            ],

            selectDataInput: {
                title: 'Город',
                type: 'select',
                dataCities: [
                    {
                        id: 1,
                        name: "Москва",
                        selected: null
                    },
                    {
                        id: 2,
                        name: "Санкт-Петербург",
                        selected: null
                    },
                    {
                        id: 3,
                        name: "Казань",
                        selected: null
                    }
                ]
            }
        }
    },

    watch: {
        formData: {
            handler() {
                if (Object.keys(this.formData).length === 4) {
                    alert('данные отправлены!');
                }
            },
            deep: true,
            immediate: false,
        }
    },

    methods: {
        submitForm() {
            this.submiteCheck = true;
        },

        checkValidateInputs(dataInput) {
            switch(dataInput.type){
                case 'email':
                    this.formData.email = dataInput.value;
                    break;
                case 'text':
                    this.formData.name = dataInput.value;
                    break;
                case 'tel':
                    this.formData.phone = dataInput.value;
                    break;
                case 'select':
                    this.formData.city_id = dataInput.value;
                    break;
            }
        }
    }

}
</script>

<style>
</style>