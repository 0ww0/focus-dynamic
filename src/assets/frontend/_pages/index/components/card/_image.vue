i<template lang="pug">
    .card-component
        .image
            img(:src = "url + image.image", :alt = "image.name")
</template>

<script>
export default {
    props : {
        image : Object,
        url: String
    },
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
        }
    }
</style>
