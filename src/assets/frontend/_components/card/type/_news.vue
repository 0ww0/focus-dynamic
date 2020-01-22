<template lang="pug">
    .card-component(:class= 'isFeature')
        .image
            img(:src = "imageFull", :alt = "news.text")
        .text(:class="news.align")
            p.date {{ news.date }}
            p.title {{ news.title }}
            p.info {{ news.info }}
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
        height: calc(100%);
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
                    height: 300px;
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
            height: calc(250px);
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

            .date {
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
                max-height: 3em;
                overflow: hidden;
            }
        }
    }
</style>
