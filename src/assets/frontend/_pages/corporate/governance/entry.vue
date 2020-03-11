<template lang="pug">
    .wrapper-content
        .container.slim
            governance(:content = 'governance')
            charter(:content = 'charter')
            term
            ethic(:content = 'ethic')
</template>

<script>
    import { URL, API, EntryAPI, Governances, Charters, Ethics } from './api/_api.js'
    import axios from 'axios'
    import governance from './components/_governance.vue'
    import charter from './components/_charter.vue'
    import ethic from './components/_ethic.vue'
    import term from './components/_term.vue'

    export default {
        components : {
            governance,
            charter,
            ethic,
            term
        },

        data() {
            return {
                governance : {},
                charter : {},
                ethic : {},
            }
        },

        methods : {
            fetchAxios() {
                axios.all([
                    API.post(EntryAPI, { query : Governances }),
                    API.post(EntryAPI, { query : Charters }),
                    API.post(EntryAPI, { query : Ethics }),
                ])
                .then(axios.spread(( GovernancesResp, ChartersResp, EthicsResp ) => {
                    let governance = GovernancesResp.data.data
                    this.governance = governance.governancesSingleton

                    let charter = ChartersResp.data.data
                    this.charter = charter.chartersSingleton

                    let ethic = EthicsResp.data.data
                    this.ethic = ethic.ethicsSingleton
                }))
                .catch(axios.spread(( GovernancesErr, ChartersErr, EthicsErr ) => {
                    console.log(GovernancesErr, ChartersErr, EthicsErr)
                }))
            }
        },

        created() {
            this.fetchAxios()
        }
    }
</script>
