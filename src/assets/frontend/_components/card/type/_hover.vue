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
            default : 'Card'
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../../../style/config.scss';

    .card-component{
        overflow: hidden;
        width: calc(100% - 20px);
        height: 400px;
        display: flex;
        flex-direction: column;
        flex-flow: column nowrap;
        margin-left: 10px;
        margin-right: 10px;

        .image {
            width: 100%;
            height: calc(100% - 44px);
            flex: 1;
            img{
                object-fit: cover;
                width: 100%;
                height: 100%;
            }
        }

        .text {
            width: 100%;
            align-self: flex-end;
            padding-top: 10px;
            padding-bottom: 10px;
            @include fs(16)
            text-align: center;
        }
    }
</style>
