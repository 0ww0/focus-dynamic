<template lang="pug">
    .events-holder
        heading(:text='head')
        heading(:text='head', subheader)
        card(stretch)
            cardWrapper(card = 'one-third', v-for = 'data in events', :key = 'data.id')
                imageCard
        heading(:text='head', subheader)
        card(stretch)
            cardWrapper(card = 'one-third', v-for = 'data in promos', :key = 'data.id')
                imageCard
</template>

<script>
    import heading from '../../../_components/text/_heading.vue'
    import card from '../../../_components/card/_card'
    import cardWrapper from '../../../_components/card/_wrapper'
    import imageCard from './../../../_components/card/type/_image.vue'

    export default {
        components: {
            heading,
            card,
            cardWrapper,
            imageCard
        },

        data() {
            return {
                head : {
                    text : 'What\'s On',
                    linkText: 'See all',
                    lintUrl: '',
                },

                events : [
                    {
                        id: 1,
                    },

                    {
                        id: 2,
                    },

                    {
                        id: 3,
                    }
                ],

                promos : [
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
