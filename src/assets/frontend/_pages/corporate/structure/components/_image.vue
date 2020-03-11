<template lang="pug">
    .image-holder
        .title
            span {{ image.title }}
        .image
            img(:src = "url + image.image")
</template>

<script>
    export default {
        props : {
            image : Object,
            url : String,
        }
    }
</script>

<style lang="scss" scoped>
    @import './../../../../style/config.scss';

    .image-holder {
        padding-top: 25px;
        padding-bottom: 25px;
    }

    .title {
        @include fs(18)
        text-align: center;
        font-weight: bold;
    }
</style>
