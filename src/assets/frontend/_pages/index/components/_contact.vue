<template lang="pug">
    .contact-holder
        heading(:text = 'head', subheader)
        card(stretch, :xmedia = 'false')
            cardWrapper(:card = 'isResponsive', v-for = 'data in contact', :key = 'data.title')
                support(:support = 'data')
</template>

<script>
    import Media from './../../../_shares/media.js'
    import { API, EntryAPI, Contact } from './../api/_api.js'
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
                contact: [],
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
            fetchContact() {
                API.post(EntryAPI, {
                    query: Contact,
                }).then(resp => {
                    let contact = resp.data.data;
                    this.contact = contact.contactsCollection;
                }).catch(err => {
                    console.log(err)
                })
            }
        },

        created(){
            this.checkMobile()
            this.fetchContact()
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
