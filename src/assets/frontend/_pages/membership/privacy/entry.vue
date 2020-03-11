<template lang="pug">
    .wrapper-content
        banner(:banner = 'banner', :url = 'url')
        .container
            policy(:policy = 'policy.content')
</template>

<script>
    import { URL, API, EntryAPI, Policies } from './api/_api.js'
    import axios from 'axios'
    import banner from '../../../_components/banner/_heading.vue'
    import policy from './components/_policy.vue'

    export default {
        components : {
            banner,
            policy
        },

        data() {
            return {
                url: URL,
                policy : {},
                banner : {
                    title : '',
                    image: {},
                },
            }
        },

        methods : {
            fetchAxios() {
                axios.all([
                    API.post(EntryAPI, { query : Policies }),
                ])
                .then(axios.spread(( PoliciesResp ) => {
                    let policy = PoliciesResp.data.data
                    this.policy = policy.policiesSingleton
                    this.banner.title = this.policy.title
                    this.banner.image = this.policy.image.path
                }))
                .catch(axios.spread(( PoliciesErr ) => {
                    console.log(PoliciesErr)
                }))
            },
        },

        created() {
            this.fetchAxios()
        }
    }
</script>
