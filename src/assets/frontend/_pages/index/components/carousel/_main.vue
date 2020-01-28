<template lang="pug">
    siema(refer = 'mainBanner', carousel='banner', :page='page' arrow, dot, loop, v-if='banner')
        siemaWrapper(v-for = "data in banner", :key = 'data.id',)
            banner(:banner = 'data')
</template>

<script>
    import { ENDPOINT, API, Get_Main_Banner_Query } from './../../api/_api.js'
    import siema from '../../../../_components/carousel/_siema.vue'
    import siemaWrapper from '../../../../_components/carousel/_wrapper.vue'
    import banner from '../../../../_components/carousel/type/_banner.vue'

    export default {
        components : {
            siema,
            siemaWrapper,
            banner,
        },

        data() {
            return {
                page : {
                    1200: 1,
                },

                banner : null,
            }
        },

        methods : {
            fetchBanner() {
                API.post(ENDPOINT, {
                    query: Get_Main_Banner_Query,
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
