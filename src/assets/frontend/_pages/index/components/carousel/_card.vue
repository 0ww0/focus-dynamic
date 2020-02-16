<template lang="pug">
    .card-carousel
        heading(:text = 'head')
        siema(refer = 'card', :page = 'page' carousel='card', loop, v-if = 'brand')
            siemaWrapper(v-for = "data in brand", :key = 'brand.id')
                imageCard(:image = 'data')
</template>

<script>
    import { API, EntryAPI, Brands } from './../../api/_api.js'
    import siema from '../../../../_components/carousel/_siema.vue'
    import siemaWrapper from '../../../../_components/carousel/_wrapper.vue'
    import imageCard from '../card/_image.vue'
    import heading from '../../../../_components/text/_heading.vue'

    export default {
        components : {
            siema,
            siemaWrapper,
            imageCard,
            heading
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
