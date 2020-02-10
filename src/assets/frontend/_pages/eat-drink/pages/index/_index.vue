<template lang="pug">
    .index-holder
        .container
            heading(:text='head', subheader)
            card(stretch, :xmedia = 'false')
                cardWrapper(:card = 'isResponsive', v-for = 'data in store', :key = 'data.id')
                    imageCard(:image = 'data', :slug='data.name_slug')
</template>

<script>
    import { API, EntryAPI, Outlets } from '../../api/_api.js'
    import Media from '../../../../_shares/media.js'
    import heading from '../../../../_components/text/_heading.vue'
    import card from '../../../../_components/card/_card.vue'
    import cardWrapper from '../../../../_components/card/_wrapper.vue'
    import imageCard from '../../../../_components/card/type/_image.vue'

    export default {
        extends : Media,

        components : {
            heading,
            card,
            cardWrapper,
            imageCard
        },

        data() {
            return {
                head : {
                    title : 'Eat & Drink',
                },

                store : []
            }
        },

        computed : {
            isResponsive () {
                if(this.is801) {
                    return 'one-quarter'
                } else if (this.is481) {
                    return 'half'
                } else {
                    return 'full'
                }
            }
        },

        methods : {
            fetchStore() {
                API.post(EntryAPI, {
                    query: Outlets,
                }).then(resp => {
                    let store = resp.data.data;
                    this.store = store.outletsCollection;
                }).catch(err => {
                    console.log(err)
                })
            }
        },

        created() {
            this.fetchStore()
            this.checkMobile()
        }
    }
</script>

<style lang="scss" scoped>
    .index-holder {
        padding-top: 25px;
        padding-bottom: 25px;
    }

    /deep/ .card-component {
        .image {
            height: calc(420px - 44px);
        }
    }
</style>
