<template lang="pug">
    .wrapper-footer
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
    @import '../../style/config.scss';

    .wrapper-footer {
        position: relative;
        display: block;
        width: 100%;
        border-top: 1px solid;
        padding-top: 35px;
        padding-bottom: 35px;

        @include border(#e3e3e3)
        @include background($white)
    }
</style>
