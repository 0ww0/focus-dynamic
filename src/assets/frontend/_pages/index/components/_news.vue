<template lang="pug">
    .events-holder
        heading(:text='head')
        card(stretch, :xmedia = 'false')
            cardWrapper(:card = 'isResponsive(data)', v-for = 'data in reverseItem', :key='data.id')
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
                    title : 'News',
                    linkText: 'See all',
                    lintUrl: '',
                },

                news : [
                    {
                        id: 1,
                        title : 'News Title Lorem Ipsum 1',
                        info : 'Info for News Lorem Ipsum Dolar Sect Amet',
                        imgPath : '',
                        imgName : 'default-short.png',
                        date : 'Sat, 20 Dec 2019',
                        align : 'left',
                        feature: false,
                    },

                    {
                        id: 2,
                        title : 'News Title Lorem Ipsum 2',
                        info : 'Info for News Lorem Ipsum Dolar Sect Amet',
                        imgPath : '',
                        imgName : 'default-short.png',
                        date : 'Sat, 20 Dec 2019',
                        align : 'left',
                        feature: false,
                    },

                    {
                        id: 3,
                        title : 'News Title Lorem Ipsum 3',
                        info : 'Info for News Lorem Ipsum Dolar Sect Amet',
                        imgPath : '',
                        imgName : 'default-short.png',
                        date : 'Sat, 20 Dec 2019',
                        align : 'left',
                        feature: false,
                    },

                    {
                        id: 4,
                        title : 'News Title Lorem Ipsum 4',
                        info : 'Info for News Lorem Ipsum Dolar Sect Amet',
                        imgPath : '',
                        imgName : 'default-short.png',
                        date : 'Sat, 20 Dec 2019',
                        align : 'left',
                        feature: true,
                    }
                ]
            }
        },

        computed : {
            reverseItem() {
                return this.news.slice().reverse()
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
        },

        created() {
            this.checkMobile()
        }
    }
</script>

<style lang="scss" scoped>
    .events-holder{
        padding-top: 25px;
        padding-bottom: 25px;
    }
</style>
