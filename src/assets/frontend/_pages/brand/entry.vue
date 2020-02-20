<template lang="pug">
    .wrapper-content
        .container
            heading(:text='head', subheader)
            card(stretch, :xmedia = 'false')
                cardWrapper(:card = 'isResponsive', v-for = 'data in brand', :key = 'data.id')
                    hoverCard(:image = 'data', :url = 'url', @open = "showModal('gallery', data)")
            modal(ref='gallery', overlayTheme = 'dark', blocking, @close = 'clearGallery')
                gallery(:gallery = 'gallery', :url = 'url')
</template>

<script>
    import { URL, API, EntryAPI, Brands } from './api/_api.js'
    import Media from '../../_shares/media.js'
    import heading from '../../_components/text/_heading.vue'
    import card from '../../_components/card/_card.vue'
    import cardWrapper from '../../_components/card/_wrapper.vue'
    import hoverCard from './components/card/_hover.vue'
    import modal from './../../_components/modal/_modal.vue'
    import gallery from './components/carousel/_gallery.vue'

    export default {
        extends : Media,

        components : {
            heading,
            card,
            cardWrapper,
            hoverCard,
            modal,
            gallery
        },

        data() {
            return {
                head : {
                    title : 'Brands',
                },
                url: URL,
                brand : [],
                gallery: {
                    name: '',
                    list: null
                }
            }
        },

        computed : {
            isResponsive () {
                if(this.is801) {
                    return 'one-quarter'
                } else if (this.is481) {
                    return 'half'
                } else {
                    return 'full'
                }
            }
        },

        methods : {
            fetchStore() {
                API.post(EntryAPI, {
                    query: Brands,
                }).then(resp => {
                    let brand = resp.data.data;
                    this.brand = brand.brandsCollection;
                }).catch(err => {
                    console.log(err)
                })
            },

            showModal(ref, data) {
                console.log(ref)
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
            this.fetchStore()
            this.checkMobile()
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper-content{
        padding-top: 25px;
        padding-bottom: 25px;
    }

    /deep/ .card-component {
        .image {
            height: calc(420px - 44px);
        }
    }
</style>
