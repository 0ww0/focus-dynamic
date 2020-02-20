<template lang="pug">\
    .card-component
        .image
            img(:src = "url + image.image.path", :alt = "image.name")
            .hover-action
                a.button(:href="image.link")
                    span Website
                a.button(@click = "open")
                    span Gallery
        .text
            p {{ image.name }}
</template>

<script>
    export default {
        props : {
            image : Object,
            url : String
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
                width: 100%;
                height: 100%;
            }

            &:hover {
                cursor: pointer;
                .hover-action {
                    opacity: 1;
                    visibility: visible;
                    height: 60%;

                    a.button {
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

            a.button {
                display: none;

                text-align: center;
                width: 50%;
                line-height: 1.5;
                padding: 5px 25px;
                border: 1px solid;
                border-radius: 5px;

                @include fs(14)
                @include color($black, .8)
                @include border($black, .8)
                @include trans-prop(background-color, color, border-color)

                &:hover {
                    @include background(#d4af37)
                    @include color($white, .9)
                    @include border(#d4af37)
                }

                &:not(:last-child) {
                    margin-bottom: 10px;
                }
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
    }
</style>
