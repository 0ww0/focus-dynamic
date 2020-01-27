<template lang="pug">
    .wrapper-content
        .container
            heading(:text='head', subheader)
            .event-holder
                heading(:text='eventTitle', subheader)
                card(stretch, :xmedia = 'false')
                    cardWrapper(:card = 'isResponsive', v-for = 'data in events', :key = 'data.id')
                        happeningCard(:happening = 'data')
            .promo-holder
                heading(:text='promoTitle', subheader)
                card(stretch, :xmedia = 'false')
                    cardWrapper(:card = 'isResponsive', v-for = 'data in promos', :key = 'data.id')
                        happeningCard(:happening = 'data')
</template>

<script>
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

                eventTitle : {
                    title : 'Events'
                },

                promoTitle : {
                    title : 'Promo'
                },

                events : [
                    {
                        id : 1,
                        title : 'Event Name 1',
                        desc : 'Event Promotion Info Lorem Ipsum Dolar Sect',
                        date: '20 Jan 2020 - 25 Jan 2020',
                        label : 'Label Of Place Promo/Event',
                        imgPath : '',
                        imgName : 'default-square.png',
                        align : 'left',
                    },

                    {
                        id : 2,
                        title : 'Event Name 2',
                        desc : 'Event Promotion Info Lorem Ipsum Dolar Sect',
                        date: '20 Jan 2020 - 25 Jan 2020',
                        label : 'Label Of Place Promo/Event',
                        imgPath : '',
                        imgName : 'default-square.png',
                        align : 'left',
                    },

                    {
                        id : 3,
                        title : 'Event Name 3',
                        desc : 'Event Promotion Info Lorem Ipsum Dolar Sect',
                        date: '20 Jan 2020 - 25 Jan 2020',
                        label : 'Label Of Place Promo/Event',
                        imgPath : '',
                        imgName : 'default-square.png',
                        align : 'left',
                    },

                    {
                        id : 4,
                        title : 'Event Name 4',
                        desc : 'Event Promotion Info Lorem Ipsum Dolar Sect',
                        date: '20 Jan 2020 - 25 Jan 2020',
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
                        desc : 'Event Promotion Info Lorem Ipsum Dolar Sect',
                        date: '20 Jan 2020 - 25 Jan 2020',
                        label : 'Label Of Place Promo/Event',
                        imgPath : '',
                        imgName : 'default-square.png',
                        align : 'left',
                    },

                    {
                        id : 2,
                        title : 'Promo Name 2',
                        desc : 'Event Promotion Info Lorem Ipsum Dolar Sect',
                        date: '20 Jan 2020 - 25 Jan 2020',
                        label : 'Label Of Place Promo/Event',
                        imgPath : '',
                        imgName : 'default-square.png',
                        align : 'left',
                    },

                    {
                        id : 3,
                        title : 'Promo Name 3',
                        desc : 'Event Promotion Info Lorem Ipsum Dolar Sect',
                        date: '20 Jan 2020 - 25 Jan 2020',
                        label : 'Label Of Place Promo/Event',
                        imgPath : '',
                        imgName : 'default-square.png',
                        align : 'left',
                    },

                    {
                        id : 4,
                        title : 'Promo Name 4',
                        desc : 'Event Promotion Info Lorem Ipsum Dolar Sect',
                        date: '20 Jan 2020 - 25 Jan 2020',
                        label : 'Label Of Place Promo/Event',
                        imgPath : '',
                        imgName : 'default-square.png',
                        align : 'left',
                    },
                ]
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

        created() {
            this.checkMobile()
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
