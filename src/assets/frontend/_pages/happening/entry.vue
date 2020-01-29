<template lang="pug">
    .wrapper-content
        .container
            heading(:text='head', subheader)
            .event-holder
                heading(:text='events', subheader)
                card(stretch, :xmedia = 'false')
                    cardWrapper(:card = 'isResponsive', v-for = 'data in displayEventsPage', :key = 'data.id')
                        happeningCard(:happening = 'data')
                div
                    button( v-if="page != 1" @click="page--") <<
                    button(v-for="pageNumber in events.pages.slice(page-1, page+5)" @click="page = pageNumber") {{ pageNumber}}
                    button(v-if="page < events.pages.length" @click="page++") >>
            .promo-holder
                heading(:text='promos', subheader)
                card(stretch, :xmedia = 'false')
                    cardWrapper(:card = 'isResponsive', v-for = 'data in promos.list', :key = 'data.id')
                        happeningCard(:happening = 'data')
</template>

<script>
    import { ENDPOINT, API, All_Promo_Query, All_Event_Query } from './api/_api.js'
    import Media from './../../_shares/media.js'
    import heading from './../../_components/text/_heading.vue'
    import card from './../../_components/card/_card'
    import cardWrapper from './../../_components/card/_wrapper'
    import happeningCard from './../../_components/card/type/_happening.vue'

    export default {
        extends : Media,

        components : {
            heading,
            card,
            cardWrapper,
            happeningCard
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
                },

                promos : {
                    title : 'Promo',
                    list: [],
                    pages: [],
                },

                page: 1,
                perPage: 1,
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

            displayEventsPage () {
                return this.paginate(this.events.list);
            }
        },

        methods : {
            fetchPromos() {
                API.post(ENDPOINT, {
                    query: All_Promo_Query,
                }).then(resp => {
                    let list = resp.data.data;
                    this.promos.list = list.happenings;
                }).catch(err => {
                    console.log(err)
                })
            },

            fetchEvents() {
                API.post(ENDPOINT, {
                    query: All_Event_Query,
                }).then(resp => {
                    let list = resp.data.data;
                    this.events.list = list.happenings;
                }).catch(err => {
                    console.log(err)
                })
            },

            setEventsPage() {
                let numberOfPages = Math.ceil(this.events.list.length / this.perPage);
                for (let index = 1; index <= numberOfPages; index++) {
                   this.events.pages.push(index);
                }
            },

            paginate (posts) {
                  let page = this.page;
                  let perPage = this.perPage;
                  let from = (page * perPage) - perPage;
                  let to = (page * perPage);
                  return  posts.slice(from, to);
            }
        },

        created() {
            this.checkMobile()
            this.fetchPromos()
            this.fetchEvents()
        },

        watch: {
            eventsList() {
                this.setEventsPage();
            }
        }
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
