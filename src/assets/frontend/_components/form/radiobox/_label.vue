<template lang="pug">
    label(class='form-radiobox', @click='clickLabel')
        slot
</template>

<script>
    export default {
        methods : {
            clickLabel : function(){
                $(this).children('.input-radiobox').focus();
            }
        },

        mounted(){
            $('.input').focus(function(e) {
                $(this).siblings('.placeholder').hide()
            });
            $('.input').blur(function() {
                if ($(this).val().length === 0){
                    $(this).siblings('.placeholder').show();
                }
            });
            $('.input').blur();
        }
    }
</script>

<style lang='scss' scoped>
    @import '../../../style/config.scss';
    
    .form-radiobox{
        position: relative;
        min-height: em(20);
        padding-left: 0;
        margin-bottom: 0;
        @include fs(14)

        &:not(:last-child) {
            margin-right: 15px;
        }
    }

    .column {
        .form-radiobox {
            &:not(:last-child) {
                margin-bottom: 5px;
                margin-right: 0;
            }
        }
    }

    .name{
        display: inline-block;
        vertical-align: middle;
        margin-left: em(10);
        @include weight(300)
        user-select: none;
    }

    .input-radiobox{
        display: none;
        opacity: 0;
        visibility: hidden;
        margin-left: 0;

        & + i.radiobox{
            display: inline-block;
            vertical-align: middle;
            font-style: normal;
            &:after{
                visibility: visible;
                font-family: 'Font Awesome 5 Free';
                display: inline-block;
                vertical-align: middle;
            }
        }

        & + i.radiobox{
            &:after{
                content:"\f192";
                @include color($dark)
            }
        }

        &:checked + i.radiobox{
            &:after{
                content:"\f192";
                font-weight: bold;
                @include color($primary)
            }
        }

        &:disabled + i.radiobox{
            opacity: 0.65;
            &:after{
                font-weight: bold;
            }
        }

        &:disabled:checked + i.radiobox{
            &:after{
                content:"\f111";
                font-weight: bold;
            }
        }
    }
</style>
