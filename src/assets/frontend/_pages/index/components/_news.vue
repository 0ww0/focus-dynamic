<template lang="pug">
    .events-holder
        heading(:text='head')
        card(stretch)
            cardWrapper(card = 'one-third', v-for = 'data in news', :key = 'data.id')
                newsCard(:new = 'data')
</template>

<script>
    import Media from '../../../_shares/media.js'
    import heading from '../../../_components/text/_heading.vue'
    import card from '../../../_components/card/_card'
    import cardWrapper from '../../../_components/card/_wrapper'
    import newsCard from './../../../_components/card/type/_news.vue'

    export default {
        extends : Media,
        
        components: {
            heading,
            card,
            cardWrapper,
            newsCard
        },

        data() {
            return {
                head : {
                    text : 'News',
                    linkText: 'See all',
                    lintUrl: '',
                },

                news : [
                    {
                        id: 1,
                    },

                    {
                        id: 2,
                    },

                    {
                        id: 3,
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .events-holder{
        padding-top: 25px;
        padding-bottom: 25px;
    }
</style>
