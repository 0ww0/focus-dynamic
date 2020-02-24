<template lang="pug">
    agile(:options = 'agile', v-if='banner')
        siemaWrapper(v-for = "data in banner", :key = 'data.id',)
            bannerImage(:banner = 'data', v-if='data.category === "Image"', :url = "url")
            bannerVideo(:banner = 'data', v-else, :url = "url")
        template(slot="prevButton")
            i.fas.fa-chevron-left
        template(slot="nextButton")
            i.fas.fa-chevron-right
</template>

<script>
    import siemaWrapper from '../../../_components/carousel/_wrapper.vue'
    import bannerImage from './carousel/type/_banner.vue'
    import bannerVideo from './carousel/type/_video.vue'

    export default {
        props : {
            banner: Array,
            url: String
        },

        components : {
            siemaWrapper,
            bannerImage,
            bannerVideo
        },

        data() {
            return {
                agile: {
                    autoplaySpeed: 7500,
                    fade: true,
                    speed: 2500,
                    pauseOnHover: true,
                    pauseOnDotsHover: true,
                    autoplay: true,
                },
            }
        },
    }
</script>

<style lang="scss" scoped>
    .banner {
        position: relative;
        width: 100%;
        height: 540px;
        margin-left: auto;
        margin-right: auto;
        overflow: hidden;
    }
</style>

<style lang="scss">
    .agile{
        &__nav-button {
            background: transparent;
            border: none;
            color: #fff;
            cursor: pointer;
            font-size: 24px;
            height: 100%;
            position: absolute;
            top: 0;
            transition-duration: .3s;
            width: 80px;
            &:hover {
                background-color: rgba(#000, .5);
                opacity: 1;
            }

            &--prev{
                left: 0;
            }
            &--next{
                right: 0;
            }
        }
        &__dots{
            position: absolute;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
        }
        &__dot{
            margin: 0 10px;
            button {
                background-color: transparent;
                border: 1px solid #fff;
                border-radius: 50%;
                cursor: pointer;
                display: block;
                height: 10px;
                font-size: 0;
                line-height: 0;
                margin: 0;
                padding: 0;
                transition-duration: 0.3s;
                width: 10px;
            }
            &:hover,
            &--current{
                button {
                    background-color: #fff;
                }
            }
        }

    }
</style>
