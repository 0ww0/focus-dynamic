<template lang="pug">
    .wrapper-content
        .container
            governance(:content = 'governance', :url = 'url')
</template>

<script>
    import { URL, API, EntryAPI, Governances } from './api/_api.js'
    import axios from 'axios'
    import governance from './components/_governance.vue'

    export default {
        components : {
            governance
        },

        data() {
            return {
                url: URL,
                governance : {},
            }
        },

        methods : {
            fetchAxios() {
                axios.all([
                    API.post(EntryAPI, { query : Governances }),
                ])
                .then(axios.spread(( GovernancesResp ) => {
                    let governance = GovernancesResp.data.data
                    this.governance = governance.governancesSingleton
                }))
                .catch(axios.spread(( GovernancesErr ) => {
                    console.log(GovernancesErr)
                }))
            }
        },

        created() {
            this.fetchAxios()
        }
    }
</script>
