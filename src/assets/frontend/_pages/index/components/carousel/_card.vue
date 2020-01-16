<template lang="pug">
    siema(refer = 'card', :page = '5' carousel='card', arrow)
        siemaWrapper(v-for = "n in 6")
            card
</template>

<script>
    import siema from '../../../../_components/carousel/_siema.vue'
    import siemaWrapper from '../../../../_components/carousel/_wrapper.vue'
    import card from '../../../../_components/carousel/type/_card.vue'

    export default {
        components : {
            siema,
            siemaWrapper,
            card
        },
    }
</script>

<style lang="scss" scoped>
    .card {
        position: relative;
        width: 100%;
        height: 280px;
    }
</style>
