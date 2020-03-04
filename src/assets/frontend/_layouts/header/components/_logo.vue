<template lang="pug">
    .logo-holder
        a(:href='logo.link')
            img(:src="url + logo.image", :alt = 'logo.name')
</template>

<script>
    export default {
        props : {
            logo: Object,
            url: String,
        }
    }
</script>

<style lang='scss' scoped>
    @import '../../../style/config.scss';

    .logo-holder{
        width: 100%;
        max-width: 260px;
        padding: 0 20px;
        margin-left: -10px;
        @include media(xs-up) {
            max-width: 300px;
        }

        @include media(md-up) {
            margin: 0 auto;
        }

        @include trans-prop(max-width)
    }
</style>
