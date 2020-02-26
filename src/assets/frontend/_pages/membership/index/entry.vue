<template lang="pug">
    .wrapper-content
        banner(:banner = 'banner', :url = 'url')
        .container.slim
            membership(:membership = 'membership', :reward = 'reward', :url = 'url')
</template>

<script>
    import { URL, API, EntryAPI, Banners, Memberships, Rewards } from './api/_api.js'
    import axios from 'axios'
    import banner from '../../../_components/banner/_heading.vue'
    import membership from './components/_membership.vue'

    export default {
        components : {
            banner,
            membership
        },

        data() {
            return {
                url: URL,
                banner: {
                    image: {},
                },
                membership: {
                    image: {},
                },

                reward: []
            }
        },

        methods : {
            fetchAxios() {
                axios.all([
                    API.post(EntryAPI, { query : Banners }),
                    API.post(EntryAPI, { query : Memberships }),
                    API.post(EntryAPI, { query : Rewards })
                ])
                .then(axios.spread(( BannersResp, MembershipsResp, RewardsResp ) => {
                    let banner = BannersResp.data.data
                    this.banner = banner.membersSingleton
                    this.banner.image = this.banner.image.path

                    let membership = MembershipsResp.data.data
                    this.membership = membership.membershipsSingleton
                    this.membership.image = this.membership.image.path

                    let reward = RewardsResp.data.data
                    this.reward = reward.rewardsCollection
                }))
                .catch(axios.spread(( BannersErr, MembershipsErr ) => {
                    console.log(BannersErr, MembershipsErr)
                }))
            },
        },

        created() {
            this.fetchAxios()
        }
    }
</script>

<style lang="scss" scoped>
</style>
