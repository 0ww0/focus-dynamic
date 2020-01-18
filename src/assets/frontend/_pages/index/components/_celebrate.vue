<template lang="pug">
    .celebrate-holder
        heading(:text='head')
        card(stretch)
            cardWrapper(card = 'one-third', v-for = 'data in celebrate', :key = 'data.id')
                hoverCard
</template>

<script>
    import heading from '../../../_components/text/_heading.vue'
    import card from '../../../_components/card/_card'
    import cardWrapper from '../../../_components/card/_wrapper'
    import hoverCard from './../../../_components/card/type/_hover.vue'

    export default {
        components: {
            heading,
            card,
            cardWrapper,
            hoverCard
        },

        data() {
            return {
                head : {
                    text : 'Celebrate',
                    linkText: 'See all',
                    lintUrl: '',
                },

                celebrate : [
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
    .celebrate-holder{
        padding-top: 25px;
        padding-bottom: 25px;
    }
</style>
