<template lang="pug">
    .card-carousel
        heading(:text = 'head')
        siema(refer = 'card', :page = 'page' carousel='card', loop, v-if = 'brand')
            siemaWrapper(v-for = "data in brand", :key = 'brand._id')
                hoverCard(:image = 'data', :url = 'url', @open = "showModal('gallery', data)")
        modal(ref='gallery', overlayTheme = 'dark', blocking, @close = 'clearGallery')
            gallery(:gallery = 'gallery', :url = 'url')
</template>

<script>
    import { URL, API, EntryAPI, Brands } from './../api/_api.js'
    import siema from '../../../_components/carousel/_siema.vue'
    import siemaWrapper from '../../../_components/carousel/_wrapper.vue'
    import hoverCard from './card/_hover.vue'
    import heading from '../../../_components/text/_heading.vue'
    import modal from '../../../_components/modal/_modal.vue'
    import gallery from './carousel/_gallery.vue'

    export default {
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

                page : {
                    480: 2,
                    640: 3,
                    800: 4,
                    1024: 5,
                },
                url : URL,
                brand : null,
                gallery: {
                    name: '',
                    list: null
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
</style>
