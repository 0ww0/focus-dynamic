<template lang="pug">
    .wrapper-content
        .container
            mapx(:mapEmbed = "mapUrl")
            heading(:text = 'head', subheader)
            .support-holder
                card(stretch, :xmedia = 'false')
                    cardWrapper(:card = 'isResponsive', v-for = 'data in support', :key = 'data.id')
                        support(:support = 'data')
</template>

<script>
    import Media from './../../_shares/media.js'
    import heading from '../../_components/text/_heading.vue'
    import mapx from '../../_components/map/_map.vue'
    import card from './../../_components/card/_card.vue'
    import cardWrapper from './../../_components/card/_wrapper.vue'
    import support from '../../_components/text/_support.vue'

    export default {
        extends : Media,

        components : {
            heading,
            mapx,
            card,
            cardWrapper,
            support
        },

        data() {
            return {
                head: {
                    title : 'Contact Us',
                    align : 'left'
                },

                mapUrl : 'https://maps.google.com/maps?q=Menara%20Lien%20Hoe&t=&z=13&ie=UTF8&iwloc=&output=embed',

                support : [
                    {
                        id: 1,
                        title: 'Phone Support',
                        text: 'Call to speak to a customer service',
                        phone: 78037333,
                        link: false,
                        linkText: false,
                        iconClass: false,
                    },

                    {
                        id: 2,
                        title: 'Email Support',
                        text: 'Send an email, and get a next response.',
                        phone: false,
                        link: '#',
                        linkText: 'Message us',
                        iconClass: 'envelope',
                    },

                    {
                        id: 3,
                        title: 'Focus Dynamics (HQ)',
                        text: 'Menara Lien Hoe, Persiaran Tropicana, 47410 Petaling Jaya, Selangor',
                        phone: false,
                        link: false,
                        linkText: false,
                        iconClass: false,
                    }
                ]
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

        created() {
            this.checkMobile()
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper-content {
        padding-top: 25px;
        padding-bottom: 25px;
    }

    /deep/ .heading-component {
        &.subheader {
            padding-bottom: 0;
        }
    }

    /deep/ .card {
        justify-content: flex-start;
    }
</style>
