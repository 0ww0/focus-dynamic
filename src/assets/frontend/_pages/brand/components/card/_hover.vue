<template lang="pug">
    .card-component
        .image
            img(:src = "url + image.image.path", :alt = "image.name")
            .hover-action
                groupButton
                    linkButton(name = 'Website', :link = 'image.link', color = 'theme')
                    linkButton(name = 'Gallery', @click.native = 'open', color = 'theme', v-if='image.gallery.length !== 0')
                    linkButton(name = 'Promotion', :link = "url + '/backend/storage/uploads' + image.promo.path", color = 'theme', v-if='image.promo !== null')
        .text
            p {{ image.name }}
</template>

<script>
    import groupButton from '../../../../_components/button/_group.vue'
    import linkButton from '../../../../_components/button/_link.vue'

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
            height: calc(100% - 44px);
            flex: 1;
            img{
                object-fit: cover;
                object-position: top;
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

        .text {
            width: 100%;
            align-self: flex-end;
            padding-top: 10px;
            padding-bottom: 10px;
            letter-spacing: .1em;
            pointer-events: none;
            @include fs(14)
        }

        /deep/ .button {
            @include fs(12)
            @include weight(500)
        }
    }
</style>
