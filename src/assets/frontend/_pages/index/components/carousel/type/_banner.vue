<template lang="pug">
    .banner-component.image(:class='isResponsive')
        a(:href = 'link')
            .background(:style = "{ 'background-image': 'url(' + isBanner + ')' }")
</template>

<script>
    import Media from './../../../../../_shares/media.js'

    export default {
        extends : Media,

        props : {
            banner : Object,
            link : [Boolean, String],
            url : String
        },

        computed : {
            isResponsive() {
                return this.is801 ? 'desktop' : 'mobile'
            },

            isBanner() {
                return this.is801 ? this.url + this.banner.imageDesktop.path : this.url + this.banner.imageMobile.path
            },
        },

        created() {
            this.checkMobile()
        },


    }
</script>

<style lang="scss" scoped>
    @import '../../../../../style/config.scss';

    .image{
        overflow: hidden;
        width: 100%;
        height: 100%;
        .background {
            background: center no-repeat;
            background-size: 100%;
            @include responsive-ratio(32, 27)
            @include media(md-up){
                @include responsive-ratio(32, 9)
            }
        }
    }
</style>
