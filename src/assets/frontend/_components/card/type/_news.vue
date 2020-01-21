<template lang="pug">
    .card-component(:class= 'isFeature')
        .image
            img(:src = "imageFull", :alt = "news.text")
        .text(:class="news.align")
            p.title {{ news.title }}
</template>

<script>
export default {
    props : {
        news : Object,

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
            if(this.news.imgPath === '') {
                return this.imgUrl + this.news.imgName
            } else {
                return this.news.imgPath + this.news.imgName
            }
        },

        isFeature() {
            return this.news.feature === true ? 'feature' : ''
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../../../style/config.scss';

    .card-component{
        overflow: hidden;
        width: calc(100%);
        height: 350px;
        display: flex;
        flex-direction: column;
        flex-flow: column nowrap;

        &.feature {
            .image {
                width: 100%;
            }

            .text {
                width: 100%;
            }

            @include media(md-up) {
                flex-direction: row;
                flex-flow: row nowrap;

                .image {
                    width: 50%;
                    height: 100%;
                }

                .text {
                    width: 50%;
                    align-self: flex-start;
                    margin-left: 20px;
                }
            }
        }

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
