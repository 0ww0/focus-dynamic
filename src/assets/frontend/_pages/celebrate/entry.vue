<template lang="pug">
    .wrapper-content
        .container
            heading(:text='head', subheader)
            card(stretch, :xmedia = 'false')
                cardWrapper(:card = 'isResponsive', v-for = 'data in celebrate', :key = 'data.id')
                    hoverCard(:hover = 'data')
</template>

<script>
    import { ENDPOINT, API, All_Celebrate_Query } from './api/_api.js'
    import Media from './../../_shares/media.js'
    import heading from './../../_components/text/_heading.vue'
    import card from './../../_components/card/_card.vue'
    import cardWrapper from './../../_components/card/_wrapper'
    import hoverCard from './../../_components/card/type/_hover.vue'

    export default {
        extends : Media,

        components : {
            heading,
            card,
            cardWrapper,
            hoverCard
        },

        data() {
            return {
                head : {
                    title : 'Celebrate',
                },

                celebrate : null
            }
        },

        computed : {
            isResponsive () {
                if(this.is801) {
                    return 'one-third'
                } else if (this.is481) {
                    return 'half'
                } else {
                    return 'full'
                }
            }
        },

        methods : {
            fetchCelebrate() {
                API.post(ENDPOINT, {
                    query: All_Celebrate_Query,
                }).then(resp => {
                    let list = resp.data.data;
                    this.celebrate = list.celebrates;
                }).catch(err => {
                    console.log(err)
                })
            }
        },

        created() {
            this.checkMobile()
            this.fetchCelebrate()
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper-content {
        padding-top: 25px;
        padding-bottom: 25px;
    }
</style>
