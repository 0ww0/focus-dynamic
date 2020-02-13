<template lang="pug">
    siema(refer = 'mainBanner', carousel='banner', :page='page' arrow, dot, loop, v-if='banner')
        siemaWrapper(v-for = "data in banner", :key = 'data.id',)
            bannerImage(:banner = 'data', v-if='data.category === "Image"')
            bannerVideo(:banner = 'data', v-else)
</template>

<script>
    import { API, EntryAPI, Banners } from './../../api/_api.js'
    import siema from '../../../../_components/carousel/_siema.vue'
    import siemaWrapper from '../../../../_components/carousel/_wrapper.vue'
    import bannerImage from '../../../../_components/carousel/type/_banner.vue'
    import bannerVideo from '../../../../_components/carousel/type/_video.vue'

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
