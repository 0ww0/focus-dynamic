<template lang="pug">
    .banner-component.image
        a(:href = 'link', v-if = 'link')
            img(:src = "image", :alt = 'altText')
        img(:src = "image", :alt = 'altText', v-else)
</template>

<script>
    export default {
        props : {
            link : {
                type : [Boolean, String]
            },

            image : {
                type : String,
                default : '../../../assets/images/banner/default-dek.png'
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
