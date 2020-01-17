<template lang="pug">
    .card-component
        .image
            img(:src = "imgUrl + img", :alt = 'text')
        .text
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
            default : '../../../assets/images/card/'
        },

        img : {
            type : String,
            default : 'default-card.png'
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
        height: 100%;
        display: flex;
        flex-direction: column;
        flex-flow: column nowrap;
        align-items: stretch;

        .image {
            width: 100%;
            height: 100%;
            img{
                object-fit: cover;
                width: 100%;
                height: 100%;
            }
        }

        .text {
            align-self: flex-end;
            @include fs(16)
            text-align: center;
            padding: 10px;
        }
    }
</style>
