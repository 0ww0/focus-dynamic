<template lang="pug">
    .validate(:class='{ "is-center" : center }')
        span {{ text }}
</template>

<script>
    export default {
        props : {
            text : {
                type : String,
                required : true
            },

            center : Boolean
        }
    }
</script>

<style lang='scss'>
    @import '../../../style/config.scss';

    .validate {
        padding: 5px;
        @include fs(12)
        @include color($danger)
        &.is-center {
            width: 100%;
            text-align: center;
        }
    }
</style>
