<template lang="pug">
    .validate(:class='{ "is-center" : center, "is-success" : success}')
        span {{ text }}
</template>

<script>
    export default {
        props : {
            text : {
                type : String,
                required : true
            },
            center : Boolean,
            success : Boolean,
        }
    }
</script>

<style lang='scss'>
    @import '../../../style/config.scss';

    .validate {
        padding: 5px;
        padding-bottom: 0;
        @include fs(12)
        @include color($danger)
        &.is-success {
            @include color($success)
        }
        &.is-center {
            width: 100%;
            text-align: center;
        }
    }
</style>
