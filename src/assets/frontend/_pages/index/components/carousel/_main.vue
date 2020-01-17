<template lang="pug">
    siema(refer = 'mainBanner', carousel='banner', :page='page' arrow, dot, loop)
        siemaWrapper
            banner
        siemaWrapper
            banner
</template>

<script>
    import siema from '../../../../_components/carousel/_siema.vue'
    import siemaWrapper from '../../../../_components/carousel/_wrapper.vue'
    import banner from '../../../../_components/carousel/type/_banner.vue'

    export default {
        components : {
            siema,
            siemaWrapper,
            banner
        },

        data() {
            return {
                page : {
                    1200: 1,
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .banner {
        position: relative;
        width: 100%;
        height: 540px;
        margin-left: auto;
        margin-right: auto;
    }
</style>
