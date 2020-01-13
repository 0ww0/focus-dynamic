<template lang="pug">
    .wrapper-header
        .header
            logo
            trigger
        .navigation
</template>

<script>
    import logo from './components/_logo.vue'
    import trigger from './components/_trigger.vue'

    export default {
        components : {
            logo,
            trigger
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/config.scss';

    .wrapper-header {
        position: fixed;
        display: block;
        @include background($white)
        width: 100%;
        box-shadow: 0 2px 10px rgba(0, 0, 0, .2);
    }

    .header {
        padding-top: 40px;
        padding-bottom: 10px;
        border-bottom: 1px #e3e3e3 solid;
        @include trans-prop(padding-top, padding-bottom)
    }
</style>
