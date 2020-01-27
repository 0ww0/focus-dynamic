<template lang="pug">
    .happening-modal
        .image
            img(:src = "imageFull", :alt = "modal.text")
        .text(:class="modal.align")
            p.label {{ modal.label }}
            p.title {{ modal.title }}
            .desc
                p {{ modal.desc }}
            p.date {{ modal.date }}
</template>

<script>
    export default {
        props: {
            modal : Object,

            imgUrl : {
                type : String,
                default : '../../../assets/images/card/'
            },
        },

        computed : {
            imageFull() {
                if(this.modal.imgPath === '') {
                    return this.imgUrl + this.modal.imgName
                } else {
                    return this.modal.imgPath + this.modal.imgName
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../../style/config.scss';

    .happening-modal {
        display: flex;
        flex-direction: column;
        flex-flow: column nowrap;
        align-items: stretch;

        @include media(md-up) {
            flex-direction: row;
            flex-flow: row nowrap;
        }

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
            width: 100%;
            padding: 20px;

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

            .desc {
                @include fs(14)
                font-weight: 400;
                line-height: 1.5em;
                @include media(md-up) {
                    max-height: 315px;
                    overflow-y: auto;
                }
            }

            .date {
                @include fs(12)
                margin-top: 10px;
                font-weight: 300;
            }
        }
    }
</style>
