<template lang="pug">
    .wrapper-content
        .container.slim
            profile(:content = 'profile', :url = 'url')
</template>

<script>
    import { URL, API, EntryAPI, Profiles} from './api/_api.js'
    import axios from 'axios'
    import profile from './components/profile.vue'

    export default {
        components : {
            profile
        },

        data() {
            return {
                url: URL,
                profile: {
                    asset: {}
                }
            }
        },

        methods : {
            fetchAxios() {
                axios.all([
                    API.post(EntryAPI, { query : Profiles }),
                ])
                .then(axios.spread(( ProfilesResp ) => {
                    let profile = ProfilesResp.data.data
                    this.profile = profile.profilesSingleton
                    this.profile.asset = this.profile.asset.path
                }))
                .catch(axios.spread((  ProfilesErr ) => {
                    console.log( ProfilesErr)
                }))
            }
        },

        created() {
            this.fetchAxios()
        }
    }
</script>
