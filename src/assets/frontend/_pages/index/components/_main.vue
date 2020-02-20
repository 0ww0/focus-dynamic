<template lang="pug">
    siema(refer = 'mainBanner', carousel='banner', :page='page' arrow, dot, loop, v-if='banner')
        siemaWrapper(v-for = "data in banner", :key = 'data.id',)
            bannerImage(:banner = 'data', v-if='data.category === "Image"', :url = "url")
            bannerVideo(:banner = 'data', v-else, :url = "url")
</template>

<script>
    import { URL, API, EntryAPI, Banners } from './../api/_api.js'
    import siema from '../../../_components/carousel/_siema.vue'
    import siemaWrapper from '../../../_components/carousel/_wrapper.vue'
    import bannerImage from './carousel/type/_banner.vue'
    import bannerVideo from './carousel/type/_video.vue'

    export default {
        components : {
            siema,
            siemaWrapper,
            bannerImage,
            bannerVideo
        },

        data() {
            return {
                page : {
                    1200: 1,
                },
                url: URL,
                banner : null,
            }
        },

        methods : {
            fetchBanner() {
                API.post(EntryAPI, {
                    query : Banners
                }).then(resp => {
                    let banner = resp.data.data
                    this.banner = banner.bannersCollection
                }).catch(err => {
                    console.log(err)
                })
            }
        },

        created() {
            this.fetchBanner()
        }

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
