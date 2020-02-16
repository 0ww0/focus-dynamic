<template lang="pug">
    .banner-component.image(:class='isResponsive')
        a(:href = 'link')
            img(:src = "isBanner", :alt = 'banner.title')
</template>

<script>
    import Media from './../../../../../_shares/media.js'

    export default {
        extends : Media,

        props : {
            banner : Object,

            link : {
                type : [Boolean, String]
            },

            url : {
                type : String,
            }
        },

        computed : {
            isResponsive() {
                return this.is641 ? 'desktop' : 'mobile'
            },

            isBanner() {
                return this.is641 ? this.url + this.banner.imageDesktop.path : this.url + this.banner.imageMobile.path
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
        height: 540px;
        img{
            width: 100%;
            height: 100%;
            pointer-events: none;
            object-fit: cover;
        }
    }
</style>
