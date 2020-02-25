<template lang="pug">
    .form-select
        i.fas.fa-chevron-down
        select.select(
            v-model="vValue"
            @blur="updateValue()"
            :class = "{ 'input-error' : error }"
        )
            slot
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

    .form-select {
        position: relative;
        i {
            position: absolute;
            right: 10px;
            top: calc(50% - 7px);
            bottom: calc(50% - 7px);
            pointer-events: none;
        }
    }

    .select{
        width: 100%;
        padding: 6px 12px;
        border: 1px solid;
        border-radius: 5px;
        appearance: none;
        outline: none;
        @include background($white)
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

        &::-ms-expand { /* for IE 11 */
            display: none;
        }
    }
</style>
