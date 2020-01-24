<template lang="pug">
    .index-holder
        .container
            heading(:text='head', subheader)
            card(stretch, :xmedia = 'false')
                cardWrapper(:card = 'isResponsive', v-for = 'data in store', :key = 'data.id')
                    imageCard(:image = 'data')
</template>

<script>
    import Media from '../../../../_shares/media.js'
    import heading from '../../../../_components/text/_heading.vue'
    import card from '../../../../_components/card/_card.vue'
    import cardWrapper from '../../../../_components/card/_wrapper.vue'
    import imageCard from '../../../../_components/card/type/_image.vue'

    export default {
        extends : Media,

        components : {
            heading,
            card,
            cardWrapper,
            imageCard
        },

        data() {
            return {
                head : {
                    title : 'Eat & Drink',
                },

                store : [
                    {
                        id : 1,
                        text : 'Place Name 1',
                        imgPath : '',
                        imgName : 'default-tall.png',
                        link : '../eat-drink/template',
                        align : 'left',
                    },

                    {
                        id : 2,
                        text : 'Place Name 2',
                        imgPath : '',
                        imgName : 'default-tall.png',
                        link : '../eat-drink/template',
                        align : 'left',
                    },

                    {
                        id : 3,
                        text : 'Place Name 3',
                        imgPath : '',
                        imgName : 'default-tall.png',
                        link : '../eat-drink/template',
                        align : 'left',
                    },

                    {
                        id : 4,
                        text : 'Place Name 4',
                        imgPath : '',
                        imgName : 'default-tall.png',
                        link : '../eat-drink/template',
                        align : 'left',
                    },

                    {
                        id : 5,
                        text : 'Place Name 5',
                        imgPath : '',
                        imgName : 'default-tall.png',
                        link : '../eat-drink/template',
                        align : 'left',
                    },

                    {
                        id : 6,
                        text : 'Place Name 6',
                        imgPath : '',
                        imgName : 'default-tall.png',
                        link : '../eat-drink/template',
                        align : 'left',
                    }
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
    .index-holder {
        padding-top: 25px;
        padding-bottom: 25px;
    }

    /deep/ .card-component {
        .image {
            height: calc(420px - 44px);
        }
    }
</style>
