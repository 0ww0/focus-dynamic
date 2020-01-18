<template lang="pug">
    .card-carousel
        heading(:text = 'head')
        siema(refer = 'card', :page = 'page' carousel='card')
            siemaWrapper(v-for = "n in 6", :key = 'n')
                card
</template>

<script>
    import siema from '../../../../_components/carousel/_siema.vue'
    import siemaWrapper from '../../../../_components/carousel/_wrapper.vue'
    import card from '../../../../_components/carousel/type/_card.vue'
    import heading from '../../../../_components/text/_heading.vue'

    export default {
        components : {
            siema,
            siemaWrapper,
            card,
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
                }
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
</style>
