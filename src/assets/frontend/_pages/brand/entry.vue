<template lang="pug">
    .wrapper-content
        banner(:banner = 'banner', :url = 'url')
        .container
            .content-holder
                card(stretch, :xmedia = 'false')
                    cardWrapper(:card = 'isResponsive', v-for = 'data in brand', :key = 'data.id')
                        hoverCard(:image = 'data', :url = 'url', @open = "showModal('gallery', data)")
                modal(ref='gallery', overlayTheme = 'dark', blocking, @close = 'clearGallery')
                    gallery(:gallery = 'gallery', :url = 'url')
</template>

<script>
    import { URL, API, EntryAPI, Brands, Banners } from './api/_api.js'
    import axios from 'axios'
    import Media from '../../_shares/media.js'
    import card from '../../_components/card/_card.vue'
    import cardWrapper from '../../_components/card/_wrapper.vue'
    import hoverCard from './components/card/_hover.vue'
    import modal from './../../_components/modal/_modal.vue'
    import gallery from './components/carousel/_gallery.vue'
    import banner from '../../_components/banner/_heading.vue'

    export default {
        extends : Media,

        components : {
            card,
            cardWrapper,
            hoverCard,
            modal,
            gallery,
            banner
        },

        data() {
            return {
                url: URL,
                banner: {
                    image: {},
                },
                brand : [],
                gallery: {
                    name: '',
                    list: null
                }
            }
        },

        computed : {
            isResponsive () {
                if(this.is1025) {
                    return 'one-quarter'
                } else if (this.is801) {
                    return 'one-third'
                } else if (this.is481) {
                    return 'half'
                }else {
                    return 'full'
                }
            }
        },

        methods : {
            fetchAxios() {
                axios.all([
                    API.post(EntryAPI, { query : Banners }),
                    API.post(EntryAPI, { query : Brands })
                ])
                .then(axios.spread(( BannersResp, BrandsResp ) => {
                    let banner = BannersResp.data.data
                    this.banner = banner.brandsSingleton
                    this.banner.image = this.banner.image.path

                    let brand = BrandsResp.data.data;
                    this.brand = brand.brandsCollection;
                }))
                .catch(axios.spread(( BannersErr, BrandsErr ) => {
                    console.log(BannersErr, BrandsErr)
                }))
            },

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
            this.fetchAxios()
        }
    }
</script>

<style lang="scss" scoped>
    .content-holder {
        padding-top: 25px;
        padding-bottom: 25px;
    }

    /deep/ .card-component {
        .image {
            height: calc(420px - 44px);
        }
    }

    /deep/ .modal {
        position: unset;
        max-width: 1200px;
        background-color: transparent;
    }
</style>
