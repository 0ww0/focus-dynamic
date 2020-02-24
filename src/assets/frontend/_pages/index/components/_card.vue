<template lang="pug">
    .card-carousel
        heading(:text = 'head')
        agile(:options = 'agile', v-if='brand')
            siemaWrapper(v-for = "(data, index) in brand", :key = 'brand._id')
                hoverCard(:image = 'data', :url = 'url', @open = "showModal('gallery', data)")
        modal(ref='gallery', overlayTheme = 'dark', blocking, @close = 'clearGallery')
            gallery(:gallery = 'gallery', :url = 'url')
</template>

<script>
    import { URL, API, EntryAPI, Brands } from './../api/_api.js'
    import media from '../../../_shares/media.js'
    import siema from '../../../_components/carousel/_siema.vue'
    import siemaWrapper from '../../../_components/carousel/_wrapper.vue'
    import hoverCard from './card/_hover.vue'
    import heading from '../../../_components/text/_heading.vue'
    import modal from '../../../_components/modal/_modal.vue'
    import gallery from './carousel/_gallery.vue'

    export default {
        extends: media,

        props: {
            brand : Array,
            gallery: Object,
            url : String,
        },

        components : {
            siema,
            siemaWrapper,
            hoverCard,
            heading,
            modal,
            gallery
        },

        data() {
            return {
                head : {
                    title : 'Brands',
                    linkText: 'See all',
                    linkUrl: '/brand/',
                },

                agile: {
                    autoplay: true,
                    autoplaySpeed: 5000,
                    speed: 2500,
                    dots: false,
                    navButtons: false,
                    pauseOnHover: false,
                    pauseOnDotsHover: false,
                    responsive : [
                        {
                            breakpoint: 481,
                            settings: {
                                slidesToShow: 2,
                            }
                        },
                        {
                            breakpoint: 641,
                            settings: {
                                slidesToShow: 3,
                            }
                        },
                        {
                            breakpoint: 801,
                            settings: {
                                slidesToShow: 4,
                            }
                        },
                        {
                            breakpoint: 1025,
                            settings: {
                                slidesToShow: 5,
                            }
                        }
                    ]
                }
            }
        },

        methods : {
            showModal(ref, data) {
                if (this.$refs[ref]) {
                    this.gallery.name = data.name
                    this.gallery.list = data.gallery
                    this.$refs[ref].open()
                } else {
                    throw new Error('Ref not defined: ' + ref)
                }
            },

            clearGallery() {
                this.gallery.name = '',
                this.gallery.list = null
            }
        },

        created() {
            this.checkMobile()
        }
    }
</script>

<style lang="scss" scoped>
    .card-carousel {
        padding-top: 25px;
        padding-bottom: 25px;
    }

    .card {
        position: relative;
        width: 100%;
        height: 400px;
    }

    /deep/ .hover-component{
        position: relative;
    }

    /deep/ .card-component {
        width: calc(100% - 20px);
        height: 400px;
        margin-left: 10px;
        margin-right: 10px;
    }

    /deep/ .modal {
        position: unset;
        max-width: 1200px;
        background-color: transparent;
    }
</style>
