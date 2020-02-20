<template lang="pug">
    .card-carousel
        heading(:text = 'head')
        siema(refer = 'card', :page = 'page' carousel='card', loop, v-if = 'brand')
            siemaWrapper(v-for = "data in brand", :key = 'brand.id')
                hoverCard(:image = 'data', :url = 'url')
</template>

<script>
    import { URL, API, EntryAPI, Brands } from './../api/_api.js'
    import siema from '../../../_components/carousel/_siema.vue'
    import siemaWrapper from '../../../_components/carousel/_wrapper.vue'
    import hoverCard from './card/_hover.vue'
    import heading from '../../../_components/text/_heading.vue'
    import modal from '../../../_components/modal/_modal.vue'

    export default {
        components : {
            siema,
            siemaWrapper,
            hoverCard,
            heading,
            modal
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
                brand : null
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
            showModal(ref) {
                if (this.$refs[ref]) {
                    this.$refs[ref].open()
                } else {
                    throw new Error('Ref not defined: ' + ref)
                }
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

    /deep/ .card-component {
        width: calc(100% - 20px);
        height: 400px;
        margin-left: 10px;
        margin-right: 10px;
    }
</style>
