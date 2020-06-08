<template lang="pug">
    .card-component
        .image
            img(:src = "url + image.image.path", :alt = "image.title")
            .hover-action
                groupButton
                    linkButton(name = 'Media', :link = "url + '/backend/storage/uploads' + image.pdf.path", color = 'theme', v-if='image.pdf !== null')
        a.text(:href="image.link")
            .title
                p {{ image.title }}
            .description(v-if='image.description !== ""')
                p {{ image.description }}
        .date
            p {{ dateFormat(image.date) }}
</template>

<script>
    import groupButton from '../../../../_components/button/_group.vue'
    import linkButton from '../../../../_components/button/_link.vue'
    import moment from 'moment'

    export default {
        props : {
            image : Object,
            url : String
        },

        components : {
            groupButton,
            linkButton,
        },

        methods : {
            open() {
                this.$emit('open')
            },

            dateFormat(data) {
                return moment(data).format("DD/MM/YYYY")
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../../../style/config.scss';

    .card-component{
        overflow: hidden;
        width: calc(100%);
        height: 100%;
        display: flex;
        flex-direction: column;
        flex-flow: column nowrap;

        .image {
            position: relative;
            width: 100%;
            height: calc(420px - 44px);
            img{
                object-fit: cover;
                object-position: center;
                width: 100%;
                height: 100%;
            }

            &:hover {
                cursor: pointer;
                .hover-action {
                    opacity: 1;
                    visibility: visible;
                    height: 60%;

                    .button-group-component {
                        display: block;
                    }
                }
            }
        }

        .date {
            @include fs(12)
            @include weight(300)
        }

        .text {
            width: 100%;
            align-self: flex-end;
            padding-top: 10px;
            padding-bottom: 5px;

            .title {
                letter-spacing: 0.1em;
                @include fs(14)
            }

            .description {
                @include weight(300)
                @include fs(14)
            }
        }

        .hover-action {
            position: absolute;
            width: 100%;
            bottom: 0;
            @include background($white, .4)

            display: flex;
            flex-direction: column;
            flex-flow: column nowrap;
            justify-content: center;
            align-items: center;

            opacity: 0;
            visibility: hidden;
            height: 0;
            @include trans-prop(opacity, visibility, height)

            .button-group-component {
                display: none;
            }
        }

        /deep/ .button {
            @include fs(12)
            @include weight(500)
        }
    }
</style>
