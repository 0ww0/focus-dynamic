<template lang="pug">
    .card-component
        .image
            img(:src = "imageFull", :alt = 'hover.text')
            .hover-text
                p Visit Website
        .text(:class="hover.align")
            p {{ hover.text }}
</template>

<script>
export default {
    props : {
        hover : Object,

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
            if(this.hover.imgPath === '') {
                return this.imgUrl + this.hover.imgName
            } else {
                return this.hover.imgPath + this.hover.imgName
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
            position: relative;
            display: block;
            width: 100%;
            height: calc(100% - 44px);
            flex: 1;

            img{
                display: block;
                object-fit: cover;
                width: 100%;
                height: 100%;
            }

            .hover-text {
                position: absolute;
                bottom: 0;
                height: 0;
                opacity: 0;
                visibility: hidden;
                width: 100%;
                padding: 0;
                text-align: center;
                letter-spacing: .1em;
                @include background(#d4af37)
                @include color($white)
                @include fs(12)
                letter-spacing: .1em;
                user-select: none;
            }
        }

        &:hover {
            .image {
                .hover-text {
                    height: auto;
                    opacity: 1;
                    visibility: visible;
                    padding: 5px;
                    @include trans-prop(height, opacity, visibility, padding)
                }
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
