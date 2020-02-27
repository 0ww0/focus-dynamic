<template lang="pug">
    .wrapper-content
        banner(:banner = 'banner', :url = 'url')
        .container
            .content-holder
                card(stretch, :xmedia = 'false')
                    cardWrapper(:card = 'isResponsive', :order= 'isOrder')
                        imageCard(:image = 'membership', :url = 'url')
                    cardWrapper(:card = 'isResponsive')
                        formCard
</template>

<script>
    import Media from '../../../_shares/media.js'
    import { URL, API, EntryAPI, Banners, Memberships } from './api/_api.js'
    import axios from 'axios'
    import banner from '../../../_components/banner/_heading.vue'
    import card from '../../../_components/card/_card.vue'
    import cardWrapper from '../../../_components/card/_wrapper.vue'
    import formCard from './components/_form.vue'
    import imageCard from './components/card/_image.vue'

    export default {
        extends : Media,

        components : {
            banner,
            card,
            cardWrapper,
            formCard,
            imageCard
        },

        data() {
            return {
                url: URL,
                banner: {
                    image: {},
                },
                membership: {
                    image: {}
                }
            }
        },

        computed : {
            isResponsive () {
                if(this.is801) {
                    return 'half'
                } else {
                    return 'full'
                }
            },

            isOrder : function() {
                return this.is801 ? 2 : 0
            }
        },

        methods : {
            fetchAxios() {
                axios.all([
                    API.post(EntryAPI, { query : Banners }),
                    API.post(EntryAPI, { query : Memberships }),
                ])
                .then(axios.spread(( BannersResp, MembershipsResp ) => {
                    let banner = BannersResp.data.data
                    this.banner = banner.membersSingleton
                    this.banner.image = this.banner.image.path

                    let membership = MembershipsResp.data.data
                    this.membership = membership.membershipsSingleton
                    this.membership.image = this.membership.image.path
                }))
                .catch(axios.spread(( BannersErr, MembershipsErr ) => {
                    console.log(BannersErr, MembershipsErr)
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
