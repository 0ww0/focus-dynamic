<template lang="pug">
    .membership-holder
        heading(:text = 'head', subheader)
        card(stretch, :xmedia = 'false')
            cardWrapper(card = 'half')
            cardWrapper(card = 'half')
                imageCard(:image = 'membership', :url = 'url')
</template>

<script>
    import { ENDPOINT, API, EntryAPI, Membership } from './../api/_api.js'
    import heading from './../../../_components/text/_heading.vue'
    import card from './../../../_components/card/_card.vue'
    import cardWrapper from './../../../_components/card/_wrapper.vue'
    import imageCard from './card/_image.vue'

    export default {
        components : {
            heading,
            card,
            cardWrapper,
            imageCard
        },

        data() {
            return {
                membership: {
                    image: {}
                },
                url: ENDPOINT,
                head: {
                    title : '',
                    align: 'left'
                }
            }
        },

        methods: {
            fetchMembership() {
                API.post(EntryAPI, {
                    query: Membership,
                }).then(resp => {
                    let member = resp.data.data;
                    this.membership = member.membershipsSingleton;
                    this.head.title = this.membership.title;
                    this.membership.image = this.membership.image.path;
                }).catch(err => {
                    console.log(err)
                })
            }
        },

        created(){
            this.fetchMembership()
        }
    }
</script>

<style lang="scss" scoped>
    .membership-holder {
        padding-top: 25px;
        padding-bottom: 25px;
    }
</style>
