<template lang="pug">
    .logo-holder(:class = "{ 'mobile' : !is641 }")
        a(:href='logo.link')
            img(:src="logo.imageDesktop", v-if = "is641")
            img(:src="logo.imageMobile", v-else)
</template>

<script>
    import Media from './../../../_shares/media.js'

    export default {
        extends: Media,

        data() {
            return {
                logo : {
                    link : '../index.html',
                    imageDesktop : '../assets/images/logo/logo-black.png',
                    imageMobile : '../assets/images/logo/logo-fa-black.png'
                }
            }
        }
    }
</script>

<style lang='scss' scoped>
    @import '../../../style/config.scss';

    .logo-holder{
        width: 100%;
        max-width: 300px;
        user-select: none;
        margin: 0 auto;

        &.mobile {
            max-width: 55px;
            margin-left: 25px;
        }
    }
</style>
