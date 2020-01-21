<template lang="pug">
    .card-component
        .image
            img(:src = "imageFull", :alt = "happening.text")
        .text(:class="happening.align")
            p.label {{ happening.label }}
            p.title {{ happening.title }}
            p.info {{ happening.info }}
</template>

<script>
export default {
    props : {
        happening : Object,

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
            if(this.happening.imgPath === '') {
                return this.imgUrl + this.happening.imgName
            } else {
                return this.happening.imgPath + this.happening.imgName
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
            height: calc(100% - 105px);
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

            &.left {
                text-align: left;
            }

            &.center {
                text-align: center;
            }

            &.right {
                text-align: right;
            }

            .label {
                @include fs(12)
                @include color($black, .8)
                font-weight: 300;
            }

            .title {
                @include fs(14)
                letter-spacing: .1em;
                font-weight: 500;
                max-width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                word-wrap: normal;
            }

            .info {
                @include fs(14)
                font-weight: 400;
                line-height: 1.5em;
                height: 3em;
                overflow: hidden;
            }
        }
    }
</style>
