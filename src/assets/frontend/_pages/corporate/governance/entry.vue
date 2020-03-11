<template lang="pug">
    .wrapper-content
</template>

<script>
    import { URL, API, EntryAPI } from './api/_api.js'
    import axios from 'axios'

    export default {
        components : {
        },

        data() {
            return {
                url: URL,
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
