<template lang="pug">
    .happening-modal
        .image
            img(:src = "url + modal.image.path", :alt = "modal.title")
        .text
            .label
                p {{ modal.outlets.name }}
            .title
                p {{ modal.title }}
            .desc(v-html = 'modal.content')
            .date
                p {{ getDate }}
</template>

<script>
    export default {
        props: {
            modal : Object,
            getDate : String,
            url : {
                type: String,
                default: 'http://backend.waswar.net'
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
                margin-bottom: 10px;
            }

            .date {
                @include fs(12)
                font-weight: 300;
            }
        }
    }
</style>

<style lang="scss">
    @import '../../../style/config.scss';

    .happening-modal{
        .text {
            .desc {
                p:not(:last-child){
                    margin-bottom: 10px;
                }
            }
        }
    }
</style>
