<template lang="pug">
    .wrapper-content
        mainCarousel(:banner = 'banner', :url = 'url')
        cardCarousel(:brand = 'brand', :gallery = 'gallery', :url = 'url')
        membership(:membership = 'membership', :url = 'url')
        contact(:support = 'support')
</template>

<script>
    import { URL, API, EntryAPI, BrandAPI, Banners, Brands, Membership, Support } from './api/_api.js'
    import axios from 'axios'
    import mainCarousel from './components/_main.vue'
    import cardCarousel from './components/_card.vue'
    import membership from './components/_membership.vue'
    import contact from './components/_contact.vue'

    export default {
        components: {
            mainCarousel,
            cardCarousel,
            membership,
            contact
        },

        data() {
            return {
                url:  URL,
                banner: null,
                brand : null,
                gallery: {
                    name: '',
                    list: null
                },
                membership: {
                    image: {},
                },
                support: []
            }
        },

        methods : {
            fetchAxios() {
                axios.all([
                    API.post(EntryAPI, { query : Banners }),
                    API.post(EntryAPI, { query : Membership }),
                    API.post(EntryAPI, { query: Support })
                ])
                .then(axios.spread((BannersResp, MembershipResp, SupportResp) => {
                    let banner = BannersResp.data.data
                    this.banner = banner.bannersCollection

                    let member = MembershipResp.data.data;
                    this.membership = member.membershipsSingleton;
                    this.membership.image = this.membership.image.path;

                    let support = SupportResp.data.data;
                    this.support = support.supportsCollection;
                }))
                .catch(axios.spread((BannersErr, MembershipErr, SupportErr ) => {
                    console.log(BannersErr, MembershipErr, SupportErr)
                }))
            },

            fetchBrand () {
                API.post(BrandAPI, JSON.stringify({
                    filter: {published:true},
                    sort: {index:1},
                }))
                .then(resp => {
                    let brand = resp.data.entries
                    this.brand = brand
                })
                .catch(err => {
                    console.log(err)
                })
            }
        },

        created() {
            this.fetchBrand()
            this.fetchAxios()
        }
    }
</script>
