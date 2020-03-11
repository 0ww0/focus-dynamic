<template lang="pug">
    .wrapper-content
        .container.slim
            information(:info = 'info')
</template>

<script>
    import { URL, API, EntryAPI, Informations } from './api/_api.js'
    import axios from 'axios'
    import banner from '../../../_components/banner/_heading.vue'
    import information from './components/information.vue'

    export default {
        components : {
            banner,
            information
        },

        data() {
            return {
                url: URL,
                info : {}
            }
        },

        methods : {
            fetchAxios() {
                axios.all([
                    API.post(EntryAPI, { query : Informations })
                ])
                .then(axios.spread(( InfoResp ) => {
                    let info = InfoResp.data.data
                    this.info = info.informationsSingleton
                }))
                .catch(axios.spread(( InfoErr ) => {
                    console.log(InfoErr)
                }))
            }
        },

        created() {
            this.fetchAxios()
        }
    }
</script>
