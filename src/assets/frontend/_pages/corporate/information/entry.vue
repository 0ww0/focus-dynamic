<template lang="pug">
    .wrapper-content
        banner(:banner = 'banner', :url = 'url')
        .container
            imageCard(:image = 'info', :url = 'url')
</template>

<script>
    import { URL, API, EntryAPI, Banners, Informations } from './api/_api.js'
    import axios from 'axios'
    import banner from '../../../_components/banner/_heading.vue'
    import imageCard from './components/_image.vue'

    export default {
        components : {
            banner,
            imageCard
        },

        data() {
            return {
                url: URL,
                banner: {
                    image: {}
                },
                info : {
                    image: {}
                }
            }
        },

        methods : {
            fetchAxios() {
                axios.all([
                    API.post(EntryAPI, { query : Banners }),
                    API.post(EntryAPI, { query : Informations })
                ])
                .then(axios.spread(( BannerResp, InfoResp ) => {
                    let banner = BannerResp.data.data;
                    this.banner = banner.binformationsSingleton;
                    this.banner.image = this.banner.image.path;

                    let info = InfoResp.data.data
                    this.info = info.informationsSingleton
                    this.info.image = this.info.image.path
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
