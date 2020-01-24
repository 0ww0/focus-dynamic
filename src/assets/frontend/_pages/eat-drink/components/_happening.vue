<template lang="pug">
    .happening-holder
        heading(:text = 'head', subheader)
        card(stretch, :xmedia = 'false')
            cardWrapper(:card = 'isResponsive', v-for = 'data in happeningList', :key = 'data.title')
                happeningCard(:happening = 'data')
</template>

<script>
    import Media from '../../../_shares/media.js'
    import heading from '../../../_components/text/_heading.vue'
    import card from '../../../_components/card/_card'
    import cardWrapper from '../../../_components/card/_wrapper'
    import happeningCard from './../../../_components/card/type/_happening.vue'

    export default {
        extends : Media,

        props : {
            events: Array,
            promos: Array,
        },

        components : {
            heading,
            card,
            cardWrapper,
            happeningCard
        },

        data() {
            return {
                head: {
                    title : 'Event & Promo',
                    align : 'left'
                },

                happening : []
            }
        },

        computed : {
            happeningList() {
                return this.happening = [...this.events, ...this.promos]
            },

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

        created() {
            this.checkMobile()
        }
    }
</script>

<style lang="scss" scoped>
    .happening-holder {
        padding-top: 35px;
        padding-bottom: 35px;
    }
</style>
