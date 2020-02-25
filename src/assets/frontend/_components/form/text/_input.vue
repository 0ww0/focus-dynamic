<template lang="pug">
    input.input.input-text(type='text',
        v-model = 'vValue'
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

<style lang='scss' scoped>
    @import '../../../style/config.scss';

    .input-text{
        width: 100%;
        padding: 5px 12px;
        border: 1px solid;
        border-radius: 5px;
        outline: none;

        @include border($grey-50)

        &:focus, &:active{
            @include border(#d4af37)
            box-shadow: 0 0 5px #d4af37;

            @include trans-prop(border-color, box-shadow)
        }

        &.input-error{
            @include border($danger)

            &:focus{
                @include border($danger)
                box-shadow: 0 0 5px $danger;

                @include trans-prop(border-color, box-shadow)
            }
        }
    }
</style>
