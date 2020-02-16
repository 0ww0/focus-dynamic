<template lang="pug">
    .contact-holder
        heading(:text = 'head', subheader)
        card(stretch, :xmedia = 'false')
            cardWrapper(:card = 'isResponsive', v-for = 'data in support', :key = 'data.title')
                support(:support = 'data')
</template>

<script>
    import Media from './../../../_shares/media.js'
    import { API, EntryAPI, Support } from './../api/_api.js'
    import heading from './../../../_components/text/_heading.vue'
    import card from './../../../_components/card/_card.vue'
    import cardWrapper from './../../../_components/card/_wrapper.vue'
    import support from './text/_support.vue'

    export default {
        extends: Media,

        components : {
            heading,
            card,
            cardWrapper,
            support
        },

        data(){
            return {
                support: [],
                head : {
                    title : 'Contact Us',
                    align: 'left'
                },
            }
        },

        computed : {
            isResponsive () {
                if(this.is801) {
                    return 'one-third'
                } else if (this.is481) {
                    return 'half'
                } else {
                    return 'full'
                }
            }
        },

        methods: {
            fetchSupport() {
                API.post(EntryAPI, {
                    query: Support,
                }).then(resp => {
                    let support = resp.data.data;
                    this.support = support.supportsCollection;
                }).catch(err => {
                    console.log(err)
                })
            }
        },

        created(){
            this.checkMobile()
            this.fetchSupport()
        }
    }
</script>

<style lang="scss" scoped>
    .contact-holder {
        padding-top: 25px;
        padding-bottom: 25px;
    }

    /deep/ .card{
        justify-content: flex-start;
    }
</style>
