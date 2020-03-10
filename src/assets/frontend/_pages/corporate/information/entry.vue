<template lang="pug">
    .wrapper-content
        banner(:banner = 'banner', :url = 'url')
        .container.slim
            information(:info = 'info')
</template>

<script>
    import { URL, API, EntryAPI, Banners, Informations } from './api/_api.js'
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
                banner: {
                    image: {}
                },
                info : {}
            }
        },

        methods : {
            fetchAxios() {
                axios.all([
                    API.post(EntryAPI, { query : Banners }),
                    API.post(EntryAPI, { query : Informations })
                ])
                .then(axios.spread(( BannersResp, InfoResp ) => {
                    let banner = BannersResp.data.data
                    this.banner = banner.bInformationSingleton
                    this.banner.image = this.banner.image.path

                    let info = InfoResp.data.data
                    this.info = info.informationsSingleton
                }))
                .catch(axios.spread(( BannersErr, InfoErr ) => {
                    console.log(BannersErr, InfoErr)
                }))
            }
        },

        created() {
            this.fetchAxios()
        }
    }
</script>
