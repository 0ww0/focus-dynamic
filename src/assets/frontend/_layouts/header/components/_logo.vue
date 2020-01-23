<template lang="pug">
    .logo-holder
        a(:href='logo.link')
            img(:src="logo.image")
</template>

<script>
    export default {
        data() {
            return {
                logo : {
                    link : '../',
                    image : '../assets/images/logo/logo-black.png',
                }
            }
        },
    }
</script>

<style lang='scss' scoped>
    @import '../../../style/config.scss';

    .logo-holder{
        width: 100%;
        max-width: 250px;
        padding: 0 20px;

        @include media(xs-up) {
            max-width: 300px;
        }

        @include media(sm-up) {
            margin: 0 auto;
        }

        @include trans-prop(max-width)
    }
</style>
