<template lang="pug">
    .happening-holder
        heading(:text='heading')
        .event-holder
            heading(:text='eventTitle', subheader)
            card(stretch)
                cardWrapper(card = 'one-quarter', v-for = 'data in events', :key = 'data.id')
                    happeningCard(:happening = 'data')
        .promo-holder
            heading(:text='promoTitle', subheader)
            card(stretch)
                cardWrapper(card = 'one-quarter', v-for = 'data in promos', :key = 'data.id')
                    happeningCard(:happening = 'data')
</template>

<script>
    import heading from '../../../_components/text/_heading.vue'
    import card from '../../../_components/card/_card'
    import cardWrapper from '../../../_components/card/_wrapper'
    import happeningCard from './../../../_components/card/type/_happening.vue'

    export default {
        components: {
            heading,
            card,
            cardWrapper,
            happeningCard
        },

        data() {
            return {
                heading : {
                    text : 'What\'s On',
                    linkText: 'See all',
                    lintUrl: '',
                },

                eventTitle : {
                    text : 'Events'
                },

                promoTitle : {
                    text : 'Promo'
                },

                events : [
                    {
                        id : 1,
                        title : 'Event Name 1',
                        info : 'Event Promotion Info Lorem Ipsum Dolar Sect',
                        label : 'Label Of Place Promo/Event',
                        imgPath : '',
                        imgName : 'default-square.png',
                        align : 'left',
                    },

                    {
                        id : 2,
                        title : 'Event Name 2',
                        info : 'Event Promotion Info Lorem Ipsum Dolar Sect',
                        label : 'Label Of Place Promo/Event',
                        imgPath : '',
                        imgName : 'default-square.png',
                        align : 'left',
                    },

                    {
                        id : 3,
                        title : 'Event Name 3',
                        info : 'Event Promotion Info Lorem Ipsum Dolar Sect',
                        label : 'Label Of Place Promo/Event',
                        imgPath : '',
                        imgName : 'default-square.png',
                        align : 'left',
                    },

                    {
                        id : 4,
                        title : 'Event Name 4',
                        info : 'Event Promotion Info Lorem Ipsum Dolar Sect',
                        label : 'Label Of Place Promo/Event',
                        imgPath : '',
                        imgName : 'default-square.png',
                        align : 'left',
                    },
                ],

                promos : [
                    {
                        id : 1,
                        title : 'Promo Name 1',
                        info : 'Event Promotion Info Lorem Ipsum Dolar Sect',
                        label : 'Label Of Place Promo/Event',
                        imgPath : '',
                        imgName : 'default-square.png',
                        align : 'left',
                    },

                    {
                        id : 2,
                        title : 'Promo Name 2',
                        info : 'Event Promotion Info Lorem Ipsum Dolar Sect',
                        label : 'Label Of Place Promo/Event',
                        imgPath : '',
                        imgName : 'default-square.png',
                        align : 'left',
                    },

                    {
                        id : 3,
                        title : 'Promo Name 3',
                        info : 'Event Promotion Info Lorem Ipsum Dolar Sect',
                        label : 'Label Of Place Promo/Event',
                        imgPath : '',
                        imgName : 'default-square.png',
                        align : 'left',
                    },

                    {
                        id : 4,
                        title : 'Promo Name 4',
                        info : 'Event Promotion Info Lorem Ipsum Dolar Sect',
                        label : 'Label Of Place Promo/Event',
                        imgPath : '',
                        imgName : 'default-square.png',
                        align : 'left',
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .happening-holder{
        padding-top: 25px;
        padding-bottom: 25px;
    }
</style>
