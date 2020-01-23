<template lang="pug">
    a.card-component(:href="image.link")
        .image
            img(:src = "imageFull", :alt = "image.text")
        .text(:class="image.align")
            p {{ image.text }}
</template>

<script>
export default {
    props : {
        image : Object,

        link : {
            type : [Boolean, String]
        },

        imgUrl : {
            type : String,
            default : '../../../assets/images/card/'
        },
    },

    computed : {
        imageFull() {
            if(this.image.imgPath === '') {
                return this.imgUrl + this.image.imgName
            } else {
                return this.image.imgPath + this.image.imgName
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../../../style/config.scss';

    .card-component{
        overflow: hidden;
        width: calc(100%);
        height: 100%;
        display: flex;
        flex-direction: column;
        flex-flow: column nowrap;

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
            letter-spacing: .1em;
            @include fs(14)

            &.left {
                text-align: left;
            }

            &.center {
                text-align: center;
            }

            &.right {
                text-align: right;
            }
        }
    }
</style>
