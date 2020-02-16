<template lang="pug">
    .contact-holder
        heading(:text = 'head', subheader)
</template>

<script>
    import { API, EntryAPI, Contact } from './../api/_api.js'
    import heading from './../../../_components/text/_heading.vue'

    export default {
        components : {
            heading
        },

        data(){
            return {
                contact: {},
                head : {
                    title : '',
                    align: 'left'
                },
            }
        },

        methods: {
            fetchContact() {
                API.post(EntryAPI, {
                    query: Contact,
                }).then(resp => {
                    let contact = resp.data.data;
                    this.contact = contact.contactsSingleton;
                    this.head.title = this.contact.title;
                }).catch(err => {
                    console.log(err)
                })
            }
        },

        created(){
            this.fetchContact()
        }
    }
</script>

<style lang="scss" scoped>
    .contact-holder {
        padding-top: 25px;
        padding-bottom: 25px;
    }
</style>
