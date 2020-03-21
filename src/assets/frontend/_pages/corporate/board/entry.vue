<template lang="pug">
    .wrapper-content
        .container
            .content-holder
                card(stretch, :xmedia = 'false')
                    cardWrapper(card = 'full', v-for = 'data in board', :key = 'data.id')
                        boardCard(:board = 'data', :url = 'url')
</template>

<script>
    import { URL, API, EntryAPI, Boards } from './api/_api.js'
    import axios from 'axios'
    import Media from './../../../_shares/media.js'
    import card from './../../../_components/card/_card.vue'
    import cardWrapper from './../../../_components/card/_wrapper.vue'
    import boardCard from './components/_board.vue'

    export default {
        extends : Media,

        components : {
            card,
            cardWrapper,
            boardCard
        },

        data() {
            return {
                url: URL,
                board : [],
            }
        },

        methods : {
            fetchAxios() {
                axios.all([
                    API.post(EntryAPI, { query : Boards })
                ])
                .then(axios.spread(( BoardsResp ) => {
                    let board = BoardsResp.data.data;
                    this.board = board.boardsCollection;
                }))
                .catch(axios.spread(( BoardsErr ) => {
                    console.log(BoardsErr)
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
</style>
