<template lang="pug">
.gallery-holder
    agile(:options = 'agile', v-if='gallery.list')
        siemaWrapper(v-for = "data in gallery.list", :key = 'data.id')
            .gallery-image
                img(:src='url + data.path')
        template(slot="prevButton")
            i.fas.fa-chevron-left
        template(slot="nextButton")
            i.fas.fa-chevron-right
</template>

<script>
    import siemaWrapper from './../../../../_components/carousel/_wrapper.vue'

    export default {
        props: {
            gallery: Object,
            url: String
        },

        components: {
            siemaWrapper,
        },

        data() {
            return {
                agile: {
                    autoplaySpeed: 7500,
                    fade: false,
                    speed: 2500,
                    pauseOnHover: true,
                    pauseOnDotsHover: true,
                    autoplay: true,
                    centerMode: true,
                    slidesToShow: 1,
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    .gallery-image{
        width: 100%;
        height: 540px;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
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
            position: absolute;
            top: calc(50% - 50px);
            bottom: calc(50% - 50px);
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
