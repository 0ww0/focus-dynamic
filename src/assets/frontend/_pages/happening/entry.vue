<template lang="pug">
    .wrapper-content
        .container
            heading(:text='head', subheader)
            .event-holder
                heading(:text='events.title', subheader)
                card(stretch, :xmedia = 'false')
                    cardWrapper(:card = 'isResponsive', v-for = 'data in displayEventsPage', :key = 'data.id')
                        happeningCard(:happening = 'data')
                paginator(:field = 'events', @pagechanged = 'onEventPage')
            .promo-holder
                heading(:text='promos.title', subheader)
                card(stretch, :xmedia = 'false')
                    cardWrapper(:card = 'isResponsive', v-for = 'data in displayPromosPage', :key = 'data.id')
                        happeningCard(:happening = 'data')
                paginator(:field = 'promos', @pagechanged = 'onPromoPage')
</template>

<script>
    import { API, EntryAPI, Events, Promos } from './api/_api.js'
    import Media from './../../_shares/media.js'
    import heading from './../../_components/text/_heading.vue'
    import card from './../../_components/card/_card'
    import cardWrapper from './../../_components/card/_wrapper'
    import happeningCard from './../../_components/card/type/_happening.vue'
    import paginator from '../../_components/paginate/paginator.vue'

    export default {
        extends : Media,

        components : {
            heading,
            card,
            cardWrapper,
            happeningCard,
            paginator
        },

        data() {
            return {
                head : {
                    title : 'What\'s On',
                },

                events : {
                    title : 'Event',
                    list: [],
                    pages: [],
                    page: 1,
                    perPage: 8,
                },

                promos : {
                    title : 'Promo',
                    list: [],
                    pages: [],
                    page: 1,
                    perPage: 8,
                },
            }
        },

        watch: {
            eventsList() {
                this.setPage(this.events);
            },

            promosList() {
                this.setPage(this.promos);
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
            },

            eventsList () {
                return this.events.list;
            },

            promosList () {
                return this.promos.list;
            },

            displayEventsPage () {
                return this.paginate(this.events);
            },

            displayPromosPage () {
                return this.paginate(this.promos);
            }
        },

        methods : {
            fetchEvents() {
                API.post(EntryAPI, {
                    query: Events,
                }).then(resp => {
                    let list = resp.data.data;
                    this.events.list = list.happeningsCollection;
                }).catch(err => {
                    console.log(err)
                })
            },

            fetchPromos() {
                API.post(EntryAPI, {
                    query: Promos,
                }).then(resp => {
                    let list = resp.data.data;
                    this.promos.list = list.happeningsCollection;
                }).catch(err => {
                    console.log(err)
                })
            },

            setPage(data) {
                let numberOfPages = Math.ceil(data.list.length / data.perPage);
                for (let index = 1; index <= numberOfPages; index++) {
                   data.pages.push(index);
                }
            },

            paginate (data) {
                let page = data.page;
                let perPage = data.perPage;
                let from = (page * perPage) - perPage;
                let to = (page * perPage);
                return data.list.slice(from, to);
            },

            onEventPage(page) {
                this.events.page = page;
            },

            onPromoPage(page) {
                this.promos.page = page;
            }
        },

        created() {
            this.checkMobile()
            this.fetchPromos()
            this.fetchEvents()
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../style/config.scss';

    .wrapper-content {
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
