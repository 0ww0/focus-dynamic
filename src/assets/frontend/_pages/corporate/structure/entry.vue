<template lang="pug">
    .wrapper-content
        .container.extend
            imageCard(:image = 'structure', :url = 'url')
</template>

<script>
    import { URL, API, EntryAPI, Structures } from './api/_api.js'
    import axios from 'axios'
    import imageCard from './components/_image.vue'

    export default {
        components : {
            imageCard
        },

        data() {
            return {
                url: URL,
                structure : {
                    image : {}
                },
            }
        },

        methods : {
            fetchAxios() {
                axios.all([
                    API.post(EntryAPI, { query : Structures }),
                ])
                .then(axios.spread(( StructuresResp ) => {
                    let structure = StructuresResp.data.data
                    this.structure = structure.structuresSingleton
                    this.structure.image = this.structure.image.path
                }))
                .catch(axios.spread(( StructuresErr ) => {
                    console.log(BannersErr)
                }))
            }
        },

        created() {
            this.fetchAxios()
        }
    }
</script>

<style lang='scss' scoped>
    .extend {
        max-width: 1205px;
    }
</style>
