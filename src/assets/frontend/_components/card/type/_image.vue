<template lang="pug">
    a.card-component(:href = 'link')
        .image
            img(:src = "image.imagePreview.url", :alt = "image.title")
        .text
            p {{ image.title }}
</template>

<script>
export default {
    props : {
        image : Object,
        link : {
            type : String,
            default : '../eat-drink/template'
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
        }
    }
</style>
