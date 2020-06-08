<template lang="pug">
    .wrapper-content
        .container
            .content-holder
                card(stretch, :xmedia = 'false')
                    cardWrapper(:card = 'isResponsive', v-for = 'data in media', :key = 'data.id')
                        hoverCard(:image = 'data', :url = 'url')
</template>

<script>
    import { URL, API, EntryAPI, Medias } from './api/_api.js'
    import axios from 'axios'
    import Media from '../../_shares/media.js'
    import card from '../../_components/card/_card.vue'
    import cardWrapper from '../../_components/card/_wrapper.vue'
    import hoverCard from './components/card/_hover.vue'

    export default {
        extends : Media,

        components : {
            card,
            cardWrapper,
            hoverCard,
        },

        data() {
            return {
                url: URL,
                media : [],
            }
        },

        computed : {
            isResponsive () {
                if(this.is1025) {
                    return 'one-third'
                } else if (this.is801) {
                    return 'half'
                }else {
                    return 'full'
                }
            }
        },

        methods : {
            fetchAxios() {
                axios.all([
                    API.post(EntryAPI, { query : Medias })
                ])
                .then(axios.spread(( MediasResp ) => {
                    let media = MediasResp.data.data;
                    this.media = media.mediasCollection;
                }))
                .catch(axios.spread(( MediasErr ) => {
                    console.log(MediasErr)
                }))
            },
        },

        created() {
            this.checkMobile()
            this.fetchAxios()
        }
    }
</script>

<style lang="scss" scoped>
    .content-holder {
        padding-top: 25px;
        padding-bottom: 25px;
    }

    /deep/ .modal {
        max-width: 1200px;
        background-color: transparent;
    }
</style>
