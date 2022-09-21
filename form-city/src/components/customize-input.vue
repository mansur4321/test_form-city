<template>
  <div class="smX:w-full smB:w-[190px] mdB:w-[162px]">
    <p ref="inputTitle" class="mb-1">
        {{title}}* 
        <span
            v-if="showErr"
        class="smX:text-xs smB:text-[11px] mdB:text-[9px] font-bold">Обязательное поле</span>
    </p>

    <input
        v-if="!showSelect" 
        :type="type" 
        :placeholder="placeholder"
        v-model="inputValue"
        ref="inputRow"
    class="w-full px-[13px] py-[9px] rounded-md border-solid border">

    <select 
        v-if="showSelect"
        ref="select"
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
        },
        submitCheck: Boolean,
    },

    data() {
        return {
            showSelect: false,
            inputValue: '',

            showErr: false,
        }
    },

    computed: {
        selectedId() {
            if (this.type !== 'select') {
                return;
            }

            this.setSelectedId(this.$store.state.cityId);
            return this.$store.state.cityId;
        }
    },
    watch: {
        submitCheck(value) {
            if(value) {
                this.delegateInput();
            }
        }
    },

    methods: {
        setSelectedId(id) {
            let option = this.$refs[`id-${id}`][0];

            for (let i = 1; i < 4; i++) {
                let opt = this.$refs[`id-${i}`][0];
                opt.removeAttribute('selected');
            }

            option.setAttribute('selected', 'true');
        },

        delegateInput() {
            switch(this.type){
                case 'email':
                    this.emailValidation()
                    break;

                case 'tel':
                    this.phoneValidation()
                    break;

                case 'text':
                    this.nameValidation()
                    break;

                case 'select':
                    this.selectValidation()
                    break;
            }
        },

        correctValidate(selectCheck) {
            let value = this.inputValue;

            if(selectCheck) {
                value = selectCheck;
            }

            this.$emit('checkValidateInput', 
            {
                type: this.type, 
                value: value,
            });
        },

        errorValidate(value) {
            if(value) {
                this.$refs.inputTitle.style.color = 'black';
                this.showErr = false;
            } else {
                this.$refs.inputTitle.style.color = 'red';
                this.showErr = true;
            }
        },

        emailValidation() {
            let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            
            if(re.test(this.inputValue)) {
                this.correctValidate(false);
            } else {
                this.errorValidate();
            }
        },

        phoneValidation() {
            if(this.inputValue.length === 17) {
                this.correctValidate(false);
            } else {
                this.errorValidate();
            }
        },

        nameValidation() {
            let re = /[0-9]/;

            if (this.inputValue.length > 0 && !re.test(this.inputValue)) {
                this.correctValidate(false);
            } else {
                this.errorValidate();
            }
        },

        selectValidation() {
            if (this.$refs.select.value) {
                this.correctValidate(this.$refs.select.value);
            } else {
                this.errorValidate();
            }
        }
    },

    mounted() {
        if (!this.placeholder) {
            this.showSelect = true;
        }

        if (this.type === 'tel') {
            this.$refs.inputRow.addEventListener('input', (e) => {
                if (!e.isTrusted) {
                    return;
                }

                const x = this.inputValue.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);

                if(x[1] === '7' || x[1] === '8') {
                    x[1] = '+7('
                } else {
                    x[2] = x[1]
                    x[1] = '+7('
                }


                this.inputValue = !x[3] ? x[1] + x[2] : x[1] + x[2] + ') ' + x[3] + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
            });            
        }
    },
}
</script>

<style>

</style>