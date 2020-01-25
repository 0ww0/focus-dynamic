<template lang="pug">
    .wrapper-content
        .container
            heading(:text='head', subheader)
            card(stretch, :xmedia = 'false')
                cardWrapper(:card = 'isResponsive', v-for = 'data in celebrate', :key = 'data.id')
                    hoverCard(:hover = 'data')
</template>

<script>
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

                celebrate : [
                    {
                        id: 1,
                        text : 'Celebrate 1',
                        imgPath : '',
                        imgName : 'default-square.png',
                        align : 'center',
                    },

                    {
                        id: 2,
                        text : 'Celebrate 2',
                        imgPath : '',
                        imgName : 'default-square.png',
                        align : 'center',
                    },

                    {
                        id: 3,
                        text : 'Celebrate 3',
                        imgPath : '',
                        imgName : 'default-square.png',
                        align : 'center',
                    }
                ]
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

        created() {
            this.checkMobile()
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper-content {
        padding-top: 25px;
        padding-bottom: 25px;
    }
</style>
