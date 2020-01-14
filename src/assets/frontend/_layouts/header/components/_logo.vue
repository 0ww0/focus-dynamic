<template lang="pug">
    .logo-holder(:class="{ 'desktop' : is641 }")
        a(:href='logo.link')
            img(:src="'../assets/images/logo/logo-' + logoSize + '.png'")
</template>

<script>
    import Media from './../../../_shares/media.js'

    export default {
        extends: Media,

        data() {
            return {
                logo : {
                    link : '../index.html',
                    imageDesktop : 'black',
                    imageMobile : 'fa-black'
                }
            }
        },

        computed : {
            logoSize() {
                return this.is641 === true ? this.logo.imageDesktop : this.logo.imageMobile
            }
        }
    }
</script>

<style lang='scss' scoped>
    @import '../../../style/config.scss';

    .logo-holder{
        width: 100%;
        max-width: 55px;
        margin-left: 25px;
        user-select: none;
        &.desktop {
            max-width: 300px;
            margin: 0 auto;
        }
    }
</style>
