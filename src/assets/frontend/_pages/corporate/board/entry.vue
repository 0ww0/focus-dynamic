<template lang="pug">
    .wrapper-content
        banner(:banner = 'banner', :url = 'url')
        .container
            .content-holder
                card(stretch, :xmedia = 'false')
                    cardWrapper(card = 'full', v-for = 'data in board', :key = 'data.id')
                        boardCard(:board = 'data', :url = 'url')
</template>

<script>
    import { URL, API, EntryAPI, Banners, Boards } from './api/_api.js'
    import axios from 'axios'
    import Media from './../../../_shares/media.js'
    import card from './../../../_components/card/_card.vue'
    import cardWrapper from './../../../_components/card/_wrapper.vue'
    import boardCard from './components/_board.vue'
    import banner from './../../../_components/banner/_heading.vue'

    export default {
        extends : Media,

        components : {
            card,
            cardWrapper,
            boardCard,
            banner
        },

        data() {
            return {
                url: URL,
                banner: {
                    image: {}
                },
                board : [],
            }
        },

        methods : {
            fetchAxios() {
                axios.all([
                    API.post(EntryAPI, { query : Banners }),
                    API.post(EntryAPI, { query : Boards })
                ])
                .then(axios.spread(( BannerResp, BoardsResp ) => {
                    let banner = BannerResp.data.data;
                    this.banner = banner.bboardsSingleton;
                    this.banner.image = this.banner.image.path;

                    let board = BoardsResp.data.data;
                    this.board = board.boardsCollection;
                }))
                .catch(axios.spread(( BannersErr, BoardsErr ) => {
                    console.log(BannersErr, BoardsErr)
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
    @import './../../../style/config.scss';

    .content-holder {
        padding-top: 25px;
        padding-bottom: 25px;
        .title {
            @include fs(18)
            text-align: center;
            font-weight: bold;
            margin-bottom: 20px;
        }
    }


</style>
