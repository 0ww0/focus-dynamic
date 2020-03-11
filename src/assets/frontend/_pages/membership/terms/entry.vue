<template lang="pug">
    .wrapper-content
        banner(:banner = 'banner', :url = 'url')
        .container
            terms(:terms = 'term.content')
</template>

<script>
    import { URL, API, EntryAPI, Terms } from './api/_api.js'
    import axios from 'axios'
    import banner from '../../../_components/banner/_heading.vue'
    import terms from './components/_terms.vue'

    export default {
        components : {
            banner,
            terms
        },

        data() {
            return {
                url: URL,
                term : {},
                banner : {
                    title : '',
                    image: {},
                },
            }
        },

        methods : {
            fetchAxios() {
                axios.all([
                    API.post(EntryAPI, { query : Terms }),
                ])
                .then(axios.spread(( TermsResp ) => {
                    let term = TermsResp.data.data
                    this.term = term.termsSingleton
                    this.banner.title = this.term.title
                    this.banner.image = this.term.image.path
                }))
                .catch(axios.spread(( TermsErr ) => {
                    console.log(TermsErr)
                }))
            },
        },

        created() {
            this.fetchAxios()
        }
    }
</script>
