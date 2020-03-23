<template lang="pug">
    .wrapper-content
        banner(:banner = 'banner', :url = 'url')
        .container.extend
            imageCard(:image = 'structure', :url = 'url')
</template>

<script>
    import { URL, API, EntryAPI, Banners, Structures } from './api/_api.js'
    import axios from 'axios'
    import imageCard from './components/_image.vue'
    import banner from './../../../_components/banner/_heading.vue'

    export default {
        components : {
            imageCard,
            banner
        },

        data() {
            return {
                url: URL,
                banner: {
                    image: {}
                },
                structure : {
                    image : {}
                },
            }
        },

        methods : {
            fetchAxios() {
                axios.all([
                    API.post(EntryAPI, { query : Banners }),
                    API.post(EntryAPI, { query : Structures }),
                ])
                .then(axios.spread(( BannerResp, StructuresResp ) => {
                    let banner = BannerResp.data.data;
                    this.banner = banner.bstructuresSingleton;
                    this.banner.image = this.banner.image.path;

                    let structure = StructuresResp.data.data
                    this.structure = structure.structuresSingleton
                    this.structure.image = this.structure.image.path
                }))
                .catch(axios.spread(( BannersErr, StructuresErr ) => {
                    console.log(BannersErr, StructuresErr)
                }))
            }
        },

        created() {
            this.fetchAxios()
        }
    }
</script>

<style lang='scss' scoped>
    .extend {
        max-width: 1205px;
    }
</style>
