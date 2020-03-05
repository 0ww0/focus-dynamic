<template lang="pug">
    .banner-component.text-banner
        .image.background
            img(:src="url + banner.image")
        .text.foreground(v-if='banner.title !== ""')
            p.title {{ banner.title }}
</template>

<script>
    export default {
        props : {
            banner : Object,
            url : String
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../style/config.scss';

    .banner-component {
        position: relative;
        width: 100%;
        height: auto;
        max-height: 350px;
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
            top: 50%;
            left: 0;
            right: 0;
            bottom: 50%;
            margin: -20px auto;
            width: calc(100% - 40px);
            text-align: center;
            text-transform: uppercase;
            @include color(#d4af37)

            .title {
                @include fs(30)
                font-weight: 500;
            }
        }
    }
</style>
