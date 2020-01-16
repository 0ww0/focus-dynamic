<template lang="pug">
    .banner-component.image.desktop(v-if='is641')
        a(:href = 'link', v-if = 'link')
            img(:src = "imgUrl + imgDesktop", :alt = 'altText')
        img(:src = "imgUrl + imgDesktop", :alt = 'altText', v-else)
    .banner-component.image.mobile(v-else)
        a(:href = 'link', v-if = 'link')
            img(:src = "imgUrl + imgMobile", :alt = 'altText')
        img(:src = "imgUrl + imgMobile", :alt = 'altText', v-else)
</template>

<script>
    import Media from '../../../_shares/media.js'

    export default {
        extends : Media,

        props : {
            link : {
                type : [Boolean, String]
            },

            imgUrl : {
                type : String,
                default : '../../../assets/images/banner/'
            },

            imgDesktop : {
                type : String,
                default : 'default-desktop.png'
            },

            imgMobile : {
                type : String,
                default : 'default-mobile.png'
            },

            altText : {
                type : String,
                default : 'Banner'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../../style/config.scss';

    .image{
        overflow: hidden;
        width: 100%;
        height: 100%;
        img{
            width: 100%;
            height: 540px;
            pointer-events: none;
            object-fit: cover;
        }
    }
</style>
