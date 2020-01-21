<template lang="pug">
    .events-holder
        heading(:text='head')
        card(stretch, :xmedia = 'false')
            cardWrapper(:card = 'isResponsive(data)', v-for = 'data in news')
                newsCard(:news = 'data')
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
                        title : 'News Title Lorem Ipsum 1',
                        imgPath : '',
                        imgName : 'default-square.png',
                        align : 'left',
                        feature: true,
                    },

                    {
                        id: 2,
                        title : 'News Title Lorem Ipsum 2',
                        imgPath : '',
                        imgName : 'default-square.png',
                        align : 'left',
                        feature: false,
                    },

                    {
                        id: 3,
                        title : 'News Title Lorem Ipsum 3',
                        imgPath : '',
                        imgName : 'default-square.png',
                        align : 'left',
                        feature: false,
                    },

                    {
                        id: 4,
                        title : 'News Title Lorem Ipsum 3',
                        imgPath : '',
                        imgName : 'default-square.png',
                        align : 'left',
                        feature: false,
                    }
                ]
            }
        },

        methods : {
            isResponsive (data) {
                if(data.feature === true) {
                    return 'full'
                } else {
                    if(this.is801) {
                        return 'one-third'
                    } else if (this.is481) {
                        return 'half'
                    } else {
                        return 'full'
                    }
                }
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
