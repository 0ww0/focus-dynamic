<template lang="pug">
    siema(refer = 'mainBanner', carousel='banner', arrow, dot)
        siemaWrapper
            bannerImage
        siemaWrapper
            bannerImage
</template>

<script>
    import siema from '../../../_components/carousel/_siema.vue'
    import siemaWrapper from '../../../_components/carousel/_wrapper.vue'
    import bannerImage from '../../../_components/carousel/type/_image.vue'

    export default {
        components : {
            siema,
            siemaWrapper,
            bannerImage
        },
    }
</script>

<style lang="scss" scoped>
</style>
