<template lang="pug">
    input.input-radiobox(type='radio',
        v-model="vValue"
        @blur="updateValue()"
        :class = "{ 'input-error' : error }"
    )
</template>

<script>
    export default {
        props : {
            value : {
                type : String,
                default : ''
            },
            error : {
                type : Boolean,
            }
        },

        watch:{
            value(newValue) {
                this.vValue = newValue
            }
        },

        data () {
            return {
                vValue : this.value
            }
        },

        methods : {
            updateValue () {
                this.$emit('input', this.vValue);
            },
        },

        mounted() {
            this.updateValue()
        }
    }
</script>
