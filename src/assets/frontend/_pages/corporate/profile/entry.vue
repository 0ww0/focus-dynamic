<template lang="pug">
    .wrapper-content
        banner(:banner = 'banner', :url = 'url')
        .container.slim
            profile(:content = 'profile', :url = 'url')
</template>

<script>
    import { URL, API, EntryAPI, Banners, Profiles} from './api/_api.js'
    import axios from 'axios'
    import banner from '../../../_components/banner/_heading.vue'
    import profile from './components/profile.vue'

    export default {
        components : {
            banner,
            profile
        },

        data() {
            return {
                url: URL,
                banner: {
                    image: {}
                },
                profile: {
                    asset: {}
                }
            }
        },

        methods : {
            fetchAxios() {
                axios.all([
                    API.post(EntryAPI, { query : Banners }),
                    API.post(EntryAPI, { query : Profiles }),
                ])
                .then(axios.spread(( BannersResp, ProfilesResp ) => {
                    let banner = BannersResp.data.data
                    this.banner = banner.bprofilesSingleton
                    this.banner.image = this.banner.image.path

                    let profile = ProfilesResp.data.data
                    this.profile = profile.profilesSingleton
                    this.profile.asset = this.profile.asset.path
                }))
                .catch(axios.spread(( BannersErr, ProfilesErr ) => {
                    console.log(BannersErr, ProfilesErr)
                }))
            }
        },

        created() {
            this.fetchAxios()
        }
    }
</script>
