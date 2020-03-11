<template lang="pug">
    .wrapper-content
        .container.slim
            governance(:content = 'governance')
            charter(:content = 'charter')
            term(:audit = 'audit', :nomination = 'nomination')
            ethic(:content = 'ethic')
            whistle(:content = 'whistle')
</template>

<script>
    import { URL, API, EntryAPI, Governances, Charters, Ethics, Whistles, Audits, Nominations } from './api/_api.js'
    import axios from 'axios'
    import governance from './components/_governance.vue'
    import charter from './components/_charter.vue'
    import ethic from './components/_ethic.vue'
    import term from './components/_term.vue'
    import whistle from './components/_whistle.vue'

    export default {
        components : {
            governance,
            charter,
            ethic,
            term,
            whistle
        },

        data() {
            return {
                governance : {},
                charter : {},
                ethic : {},
                whistle : {},
                audit : {},
                nomination : {}
            }
        },

        methods : {
            fetchAxios() {
                axios.all([
                    API.post(EntryAPI, { query : Governances }),
                    API.post(EntryAPI, { query : Charters }),
                    API.post(EntryAPI, { query : Ethics }),
                    API.post(EntryAPI, { query : Whistles }),
                    API.post(EntryAPI, { query : Audits }),
                    API.post(EntryAPI, { query : Nominations }),
                ])
                .then(axios.spread(( GovernancesResp, ChartersResp, EthicsResp, WhistlesResp, AuditsResp, NominationsResp ) => {
                    let governance = GovernancesResp.data.data
                    this.governance = governance.governancesSingleton

                    let charter = ChartersResp.data.data
                    this.charter = charter.chartersSingleton

                    let ethic = EthicsResp.data.data
                    this.ethic = ethic.ethicsSingleton

                    let whistle = WhistlesResp.data.data
                    this.whistle = whistle.whistlesSingleton

                    let audit = AuditsResp.data.data
                    this.audit = audit.auditsSingleton

                    let nomination = NominationsResp.data.data
                    this.nomination = nomination.nominationsSingleton
                }))
                .catch(axios.spread(( GovernancesErr, ChartersErr, EthicsErr, WhistlesErr, AuditsErr, NominationsErr ) => {
                    console.log(GovernancesErr, ChartersErr, EthicsErr, WhistlesErr, AuditsErr, NominationsErr)
                }))
            }
        },

        created() {
            this.fetchAxios()
        }
    }
</script>
