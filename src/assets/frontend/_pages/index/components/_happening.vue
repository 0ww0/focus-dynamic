<template lang="pug">
    .happening-holder
        heading(:text='head')
        .event-holder
            heading(:text='events', subheader)
            card(stretch, :xmedia = 'false')
                cardWrapper(:card = 'isResponsive', v-for = 'data in events.list', :key = 'data.id')
                    happeningCard(:happening = 'data')
        .promo-holder
            heading(:text='promos', subheader)
            card(stretch, :xmedia = 'false')
                cardWrapper(:card = 'isResponsive', v-for = 'data in promos.list', :key = 'data.id')
                    happeningCard(:happening = 'data')
</template>

<script>
    import { ENDPOINT, API, Get_Promo_Query, Get_Event_Query } from './../api/_api.js'
    import Media from '../../../_shares/media.js'
    import heading from '../../../_components/text/_heading.vue'
    import card from '../../../_components/card/_card'
    import cardWrapper from '../../../_components/card/_wrapper'
    import happeningCard from './../../../_components/card/type/_happening.vue'

    export default {
        extends : Media,

        components: {
            heading,
            card,
            cardWrapper,
            happeningCard
        },

        data() {
            return {
                head : {
                    title : 'What\'s On',
                    linkText: 'See all',
                    linkUrl: '../happening/',
                },

                events : {
                    title : 'Event',
                    list: null
                },

                promos : {
                    title : 'Promo',
                    list: null
                },
            }
        },

        computed : {
            isResponsive () {
                if(this.is801) {
                    return 'one-quarter'
                } else if (this.is481) {
                    return 'half'
                } else {
                    return 'full'
                }
            }
        },

        methods : {
            fetchPromos() {
                API.post(ENDPOINT, {
                    query: Get_Promo_Query,
                }).then(resp => {
                    let list = resp.data.data;
                    this.promos.list = list.happenings;
                }).catch(err => {
                    console.log(err)
                })
            },

            fetchEvents() {
                API.post(ENDPOINT, {
                    query: Get_Event_Query,
                }).then(resp => {
                    let list = resp.data.data;
                    this.events.list = list.happenings;
                }).catch(err => {
                    console.log(err)
                })
            }
        },

        created() {
            this.checkMobile()
            this.fetchPromos()
            this.fetchEvents()
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../../style/config.scss';

    .happening-holder{
        padding-top: 25px;
        padding-bottom: 25px;
    }

    /deep/ .modal {
        max-width: 480px;

        @include media(md-up) {
            max-width: 900px;
        }
    }
</style>
