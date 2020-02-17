<template lang="pug">
    label(class= 'label-text', @click='clickLabel')
        slot
</template>

<script>
    export default {
        methods : {
            clickLabel : function(){
                $(this).children('.input').focus();
            }
        },

        mounted(){
            $('.input').focus(function(e) {
                $(this).siblings('.placeholder').hide()
            });
            $('.input').blur(function() {
                if ($(this).val().length !== 0){
                    $(this).siblings('.placeholder').hide();
                } else {
                    $(this).siblings('.placeholder').show();
                }
            });
            $('.input').blur();
        }
    }
</script>

<style lang='scss' scoped>
    @import '../../../style/config.scss';
    
    .label-text{
        position: relative;
        width: 100%;
        @include fs(14)

        &:not(:last-child){
            margin-right: 10px;
        }
    }
</style>
