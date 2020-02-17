<template lang="pug">
    input.input.input-text(type='text',
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

        data () {
            return {
                vValue : this.value
            }
        },

        methods : {
            updateValue () {
                this.$emit('input', this.vValue);
            },
        }
    }
</script>

<style lang='scss' scoped>
    @import '../../../style/config.scss';
    
    .input-text{
        width: 100%;
        padding: 6px 12px;
        border: 1px solid;
        border-radius: 5px;
        outline: none;

        @include border($grey-50)

        &:focus, &:active{
            @include border($primary)
            box-shadow: 0 0 5px $primary;

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
