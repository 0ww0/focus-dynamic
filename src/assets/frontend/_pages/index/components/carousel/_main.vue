<template lang="pug">
    siema(refer = 'mainBanner', carousel='banner', :page='page' arrow, dot, loop)
        siemaWrapper(v-for = "data in banner", :key = 'banner.id')
            banner(:banner = 'data')
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
                },

                banner : [
                    {
                        id : 1,
                        imgDesktop : 'default-desktop.png',
                        imgMobile : 'default-mobile.png',
                        altText : 'Main Banner 1'
                    },

                    {
                        id : 2,
                        imgDesktop : 'default-desktop.png',
                        imgMobile : 'default-mobile.png',
                        altText : 'Main Banner 2'
                    },
                ]
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
