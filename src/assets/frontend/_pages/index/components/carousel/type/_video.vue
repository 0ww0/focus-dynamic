<template lang="pug">
    .banner-component.video
        video(preload="none" autoplay, loop, muted, playinline)
            source(:src='isBanner')
</template>

<script>
    export default {
        props : {
            banner : Object,
            url : String
        },

        computed : {
            isBanner() {
                return this.url + '/backend/storage/uploads' + this.banner.video.path
            },
        },

    }
</script>

<style lang="scss" scoped>
    @import './../../../../../style/config.scss';

    .video{
        position: relative;
        overflow: hidden;
        @include media(md-up){
            padding-top: 28.125%;
        }
        padding-top: 84.375%;
        width: 100%;
        video{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }
</style>
