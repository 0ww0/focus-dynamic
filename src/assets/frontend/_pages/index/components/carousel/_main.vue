<template lang="pug">
    siema(refer = 'mainBanner', carousel='banner', :page='page' arrow, dot, loop)
        siemaWrapper(v-for = "data in banner", :key = 'data.id',)
            banner(:banner = 'data')
</template>

<script>
    import { ENDPOINT, apiClient, All_MAIN_BANNER_QUERY } from '../../../../_shares/graphcms.js'
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

                banner : [],
            }
        },

        methods : {
            fetchBanner() {
                apiClient.post(ENDPOINT, {
                    query: All_MAIN_BANNER_QUERY,
                }).then(resp => {
                    let banner = resp.data.data;
                    this.banner = banner.mainBanners;

                }).catch(err => {
                    console.log(err)
                })
            }
        },

        created() {
            this.fetchBanner()
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
        overflow: hidden;
    }
</style>
