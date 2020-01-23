<template lang="pug">
    .card-carousel
        heading(:text = 'head')
        siema(refer = 'card', :page = 'page' carousel='card', loop)
            siemaWrapper(v-for = "data in store", :key = 'store.id')
                imageCard(:image = 'data')
</template>

<script>
    import siema from '../../../../_components/carousel/_siema.vue'
    import siemaWrapper from '../../../../_components/carousel/_wrapper.vue'
    import imageCard from '../../../../_components/card/type/_image.vue'
    import heading from '../../../../_components/text/_heading.vue'

    export default {
        components : {
            siema,
            siemaWrapper,
            imageCard,
            heading
        },

        data() {
            return {
                head : {
                    text : 'Eat & Drink',
                    linkText: 'See all',
                    lintUrl: '',
                },

                page : {
                    480: 2,
                    640: 3,
                    800: 4,
                    1024: 5,
                },

                store : [
                    {
                        id : 1,
                        text : 'Place Name 1',
                        imgPath : '',
                        imgName : 'default-tall.png',
                        align : 'left',
                    },

                    {
                        id : 2,
                        text : 'Place Name 2',
                        imgPath : '',
                        imgName : 'default-tall.png',
                        align : 'left',
                    },

                    {
                        id : 3,
                        text : 'Place Name 3',
                        imgPath : '',
                        imgName : 'default-tall.png',
                        align : 'left',
                    },

                    {
                        id : 4,
                        text : 'Place Name 4',
                        imgPath : '',
                        imgName : 'default-tall.png',
                        align : 'left',
                    },

                    {
                        id : 5,
                        text : 'Place Name 5',
                        imgPath : '',
                        imgName : 'default-tall.png',
                        align : 'left',
                    },

                    {
                        id : 6,
                        text : 'Place Name 6',
                        imgPath : '',
                        imgName : 'default-tall.png',
                        align : 'left',
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .card-carousel {
        padding-top: 25px;
        padding-bottom: 25px;
    }

    .card {
        position: relative;
        width: 100%;
        height: 400px;
    }

    /deep/ .card-component {
        width: calc(100% - 20px);
        height: 400px;
        margin-left: 10px;
        margin-right: 10px;
    }
</style>
