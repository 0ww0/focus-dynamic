<template lang="pug">
    .wrapper-content
        banner(:banner = 'banner', :url = 'url')
</template>

<script>
    import { URL, API, EntryAPI, Banners } from './api/_api.js'
    import axios from 'axios'
    import banner from '../../../_components/banner/_heading.vue'

    export default {
        components : {
            banner,
        },

        data() {
            return {
                url: URL,
                banner: {
                    image: {}
                },
            }
        },

        methods : {
            fetchAxios() {
                axios.all([
                    API.post(EntryAPI, { query : Banners }),
                ])
                .then(axios.spread(( BannersResp ) => {
                    let banner = BannersResp.data.data
                    this.banner = banner.bgovernancesSingleton
                    this.banner.image = this.banner.image.path
                }))
                .catch(axios.spread(( BannersErr ) => {
                    console.log(BannersErr)
                }))
            }
        },

        created() {
            this.fetchAxios()
        }
    }
</script>
