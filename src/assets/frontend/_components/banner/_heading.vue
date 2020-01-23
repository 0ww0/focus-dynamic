<template lang="pug">
    .banner-component.text-banner
        .image.background
            img(:src="banner.background")
        .text.foreground(:class="{ 'no-tagline' : !isTagline }")
            p.title {{ banner.name }}
            p.tagline(v-if = 'isTagline') {{ banner.tagline }}
</template>

<script>
    export default {
        props : {
            banner : Object
        },

        computed : {
            isTagline() {
                return this.banner.tagline !== '' ? true : false
            },
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
            top: 50%;
            left: 0;
            right: 0;
            bottom: 50%;
            margin: -40px auto;
            width: calc(100% - 160px);
            text-align: center;

            &.no-tagline {
                margin: -22.5px auto;
            }

            .title {
                @include fs(30)
                font-weight: 500;
            }
            .tagline {
                @include fs(22)
            }
        }
    }
</style>
