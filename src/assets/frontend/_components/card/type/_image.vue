<template lang="pug">
    a.card-component(:href = 'link + slug')
        .image
            img(:src = "url + image.imagePreview.path", :alt = "image.name")
        .text
            p {{ image.name }}
</template>

<script>
export default {
    props : {
        image : Object,
        slug: String,
        link : {
            type : String,
            default : '../eat-drink/#/'
        },
        url : {
            type : String,
            default: 'http://backend.waswar.net'
        }
    },
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
            pointer-events: none;
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
            pointer-events: none;
            @include fs(14)
        }
    }
</style>
