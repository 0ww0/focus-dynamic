<template lang="pug">
    .wrapper-content
        .container
            heading(:text='head', subheader)
            card(stretch, :xmedia = 'false')
                cardWrapper(:card = 'isResponsive')
                    formCard
                cardWrapper(:card = 'isResponsive')
                    supportCard(v-for='data in support', :key = 'data.title', :support = 'data')
</template>

<script>
    import { API, EntryAPI, Support }  from './api/_api.js'
    import Media from '../../_shares/media.js'
    import card from '../../_components/card/_card.vue'
    import heading from '../../_components/text/_heading.vue'
    import cardWrapper from '../../_components/card/_wrapper.vue'
    import supportCard from './components/text/_support.vue'
    import formCard from './components/_form.vue'

    export default {
        extends : Media,

        components : {
            heading,
            card,
            cardWrapper,
            supportCard,
            formCard
        },

        data() {
            return {
                head : {
                    title : 'Contact Us',
                },
                support : []
            }
        },

        computed : {
            isResponsive () {
                if(this.is801) {
                    return 'half'
                } else {
                    return 'full'
                }
            }
        },

        methods : {
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

        created() {
            this.checkMobile()
            this.fetchSupport()
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper-content {
        padding-top: 25px;
        padding-bottom: 25px;
    }
</style>
