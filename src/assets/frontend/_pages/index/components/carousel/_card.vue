<template lang="pug">
    .card-carousel
        heading(:text = 'head')
        siema(refer = 'card', :page = 'page' carousel='card', loop, v-if = 'store')
            siemaWrapper(v-for = "data in store", :key = 'store.id')
                imageCard(:image = 'data', :slug = 'data.name_slug')
</template>

<script>
    import { API, EntryAPI, Outlets } from './../../api/_api.js'
    import siema from '../../../../_components/carousel/_siema.vue'
    import siemaWrapper from '../../../../_components/carousel/_wrapper.vue'
    import imageCard from '../../../../_components/card/type/_image.vue'
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
                    title : 'Eat & Drink',
                    linkText: 'See all',
                    linkUrl: '/eat-drink/',
                },

                page : {
                    480: 2,
                    640: 3,
                    800: 4,
                    1024: 5,
                },

                store : null
            }
        },

        methods : {
            fetchStore() {
                API.post(EntryAPI, {
                    query: Outlets,
                }).then(resp => {
                    let store = resp.data.data;
                    this.store = store.outletsCollection;
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
