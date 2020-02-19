<template lang="pug">
    .membership-holder
        heading(:text = 'head', subheader)
        card(stretch, :xmedia = 'false')
            cardWrapper(:card = 'isResponsive', :order= 'isOrder')
                imageCard(:image = 'membership', :url = 'url')
            cardWrapper(:card = 'isResponsive')
                paragraph(:content = 'membership.description')
</template>

<script>
    import Media from './../../../_shares/media.js'
    import { URL, API, EntryAPI, Membership } from './../api/_api.js'
    import heading from './../../../_components/text/_heading.vue'
    import card from './../../../_components/card/_card.vue'
    import cardWrapper from './../../../_components/card/_wrapper.vue'
    import imageCard from './card/_image.vue'
    import paragraph from './text/_paragraph.vue'

    export default {
        extends: Media,

        components : {
            heading,
            card,
            cardWrapper,
            imageCard,
            paragraph
        },

        data() {
            return {
                membership: {
                    image: {}
                },
                url: URL,
                head: {
                    title : 'Membership',
                    align: 'left'
                }
            }
        },

        computed : {
            isResponsive () {
                if (this.is801) {
                    return 'half'
                } else {
                    return 'full'
                }
            },

            isOrder : function() {
                return this.is801 ? 2 : 0
            }
        },

        methods: {
            fetchMembership() {
                API.post(EntryAPI, {
                    query: Membership,
                }).then(resp => {
                    let member = resp.data.data;
                    this.membership = member.membershipsSingleton;
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
