<template lang="pug">
    .banner-component.logo-banner
        .image.background
            img(:src="banner.background")
        .image.foreground
            img(:src="banner.foreground")
</template>

<script>
    export default {
        props : {
            banner : Object
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/config.scss';

    .banner-component {
        position: relative;
        width: 100%;
        height: 300px;
        .background {
            width: 100%;
            height: 100%;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .foreground {
            position: absolute;
            top: 25%;
            left: 0;
            right: 0;
            bottom: 25%;
            margin: auto;
            width: 100%;
            max-width: 260px;

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
    }
</style>
