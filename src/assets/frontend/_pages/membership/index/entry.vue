<template lang="pug">
    .wrapper-content
        banner(:banner = 'banner', :url = 'url')
</template>

<script>
    import { URL, API, EntryAPI, Banners, Memberships } from './api/_api.js'
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
                    image: {},
                },
            }
        },

        methods : {
            fetchAxios() {
                axios.all([
                    API.post(EntryAPI, { query : Banners }),
                    API.post(EntryAPI, { query : Memberships })
                ])
                .then(axios.spread(( BannersResp, MembershipsResp ) => {
                    let banner = BannersResp.data.data
                    this.banner = banner.membersSingleton
                    this.banner.image = this.banner.image.path


                }))
                .catch(axios.spread(( BannersErr, MembershipsErr ) => {
                    console.log(BannersErr, MembershipsErr)
                }))
            },
        },

        created() {
            this.fetchAxios()
        }
    }
</script>

<style lang="scss" scoped>
</style>
