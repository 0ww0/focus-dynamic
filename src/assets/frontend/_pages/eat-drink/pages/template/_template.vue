<template lang="pug">
    .store-holder
        span {{ slug }}
        //- logoBanner(:banner = 'banner')
        //- .container
        //-     paragraphText(:paragraph = 'store')
        //- gallery(:gallery = 'gallery')
        //- .container
        //-     happening(:events = 'events', :promos = 'promos')
        //-     location
</template>

<script>
    import { ENDPOINT, API, Slug_Store_Query } from '../../api/_api.js'
    import logoBanner from '../../../../_components/banner/_logo.vue'
    import paragraphText from '../../../../_components/text/_paragraph.vue'
    import gallery from '../../components/_gallery.vue'
    import happening from '../../components/_happening.vue'
    import location from './../../components/_location.vue'

    export default {
        components : {
            logoBanner,
            paragraphText,
            gallery,
            happening,
            location
        },

        data() {
            return {
                slug: '',
                outlets : [],
            }
        },

        methods : {
            fetchSlugStore() {
                API.post(ENDPOINT, {
                    query: Slug_Store_Query,
                    variables: {
                        slug: this.slug
                    }
                }).then(resp => {
                    let store = resp.data.data;
                    this.outlets = store.outlets;
                    if(this.outlets.length === 0){
                        this.$router.replace({ name : 'index' })
                    }
                }).catch(err => {
                    console.log(err)
                })
            }
        },

        created() {
            this.slug = this.$route.params.slug;
            this.fetchSlugStore();
        }
    }
</script>

<style lang="scss" scoped>
</style>
