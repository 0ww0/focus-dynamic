<template lang="pug">
    .banner-component.video
        video(preload="none" autoplay, loop, muted)
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
                return this.url + this.banner.video.path
            },
        },

    }
</script>

<style lang="scss" scoped>
    @import './../../../../../style/config.scss';

    .video{
        overflow: hidden;
        width: 100%;
        height: 540px;
        video{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
</style>
