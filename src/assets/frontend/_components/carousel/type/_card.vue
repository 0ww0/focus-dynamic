<template lang="pug">
    .card-component
        a(:href = 'link', v-if = 'link')
            img(:src = "imgUrl + imgDesktop", :alt = 'text')
            p {{ text }}
        span(v-else)
            img(:src = "imgUrl + imgDesktop", :alt = 'text')
            p {{ text }}
</template>

<script>
export default {
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

        text : {
            type : String,
            default : 'Banner'
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../../../style/config.scss';

    .card-component{
        overflow: hidden;
        width: 100%;
        height: 280px;
        img{
            width: 100%;
            height: 100%;
            pointer-events: none;
            object-fit: cover;
        }
    }
</style>
