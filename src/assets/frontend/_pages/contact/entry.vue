<template lang="pug">
    .wrapper-content
        banner(:banner = 'banner', :url = 'url')
        .container
            .content-holder
                card(stretch, :xmedia = 'false')
                    cardWrapper(:card = 'isResponsive')
                        formCard
                    cardWrapper(:card = 'isResponsive')
                        supportCard(v-for='data in support', :key = 'data.title', :support = 'data')
</template>

<script>
    import { URL, API, EntryAPI, Supports, Banners }  from './api/_api.js'
    import axios from 'axios'
    import Media from '../../_shares/media.js'
    import card from '../../_components/card/_card.vue'
    import cardWrapper from '../../_components/card/_wrapper.vue'
    import supportCard from './components/text/_support.vue'
    import formCard from './components/_form.vue'
    import banner from './../../_components/banner/_heading.vue'

    export default {
        extends : Media,

        components : {
            card,
            cardWrapper,
            supportCard,
            formCard,
            banner
        },

        data() {
            return {
                url: URL,
                banner: {
                    image: {}
                },
                support : []
            }
        },

        computed : {
            isResponsive () {
                if(this.is801) {
                    return 'half'
                } else {
                    return 'full'
                }
            }
        },

        methods : {
            fetchAxios() {
                axios.all([
                    API.post(EntryAPI, { query : Banners }),
                    API.post(EntryAPI, { query : Supports }),
                ])
                .then(axios.spread(( BannersResp, SupportsResp ) => {
                    let banner = BannersResp.data.data
                    this.banner = banner.bcontactsSingleton
                    this.banner.image = this.banner.image.path

                    let support = SupportsResp.data.data;
                    this.support = support.supportsCollection;
                }))
                .catch(axios.spread(( BannersErr, SupportsErr ) => {
                    console.log(BannersErr, SupportsErr)
                }))
            },
        },

        created() {
            this.checkMobile()
            this.fetchAxios()
        }
    }
</script>

<style lang="scss" scoped>
    .content-holder {
        padding-top: 25px;
        padding-bottom: 25px;
    }
</style>
