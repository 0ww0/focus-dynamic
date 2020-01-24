<template lang="pug">
    .store-holder
        logoBanner(:banner = 'banner')
        .container
            paragraphText(:paragraph = 'store')
        gallery(:gallery = 'gallery')
        .container
            happening(:events = 'events', :promos = 'promos')
            location
</template>

<script>
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
                banner : {
                    background: '../../../../assets/images/banner/default-banner-long.png',
                    foreground: '../../../../assets/images/logo/default-logo.png',
                    name : 'Store Name',
                    tagline : 'Store Tagline'
                },

                store : {
                    title : 'Lorem Ipsum',
                    text : [
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
                        'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                    ],
                    align : 'center'
                },

                gallery : [
                    {
                        id : 1,
                        imgDesktop : 'default-desktop.png',
                        imgMobile : 'default-mobile.png',
                        altText : 'Main Banner 1'
                    },

                    {
                        id : 2,
                        imgDesktop : 'default-desktop.png',
                        imgMobile : 'default-mobile.png',
                        altText : 'Main Banner 2'
                    },

                    {
                        id : 3,
                        imgDesktop : 'default-desktop.png',
                        imgMobile : 'default-mobile.png',
                        altText : 'Main Banner 2'
                    },

                    {
                        id : 4,
                        imgDesktop : 'default-desktop.png',
                        imgMobile : 'default-mobile.png',
                        altText : 'Main Banner 2'
                    },
                ],

                events : [
                    {
                        id : 1,
                        title : 'Event Name 1',
                        info : 'Event Promotion Info Lorem Ipsum Dolar Sect',
                        label : 'Label Of Place Promo/Event',
                        imgPath : '',
                        imgName : 'default-square.png',
                        align : 'left',
                    },

                    {
                        id : 2,
                        title : 'Event Name 2',
                        info : 'Event Promotion Info Lorem Ipsum Dolar Sect',
                        label : 'Label Of Place Promo/Event',
                        imgPath : '',
                        imgName : 'default-square.png',
                        align : 'left',
                    },

                    {
                        id : 3,
                        title : 'Event Name 3',
                        info : 'Event Promotion Info Lorem Ipsum Dolar Sect',
                        label : 'Label Of Place Promo/Event',
                        imgPath : '',
                        imgName : 'default-square.png',
                        align : 'left',
                    },

                    {
                        id : 4,
                        title : 'Event Name 4',
                        info : 'Event Promotion Info Lorem Ipsum Dolar Sect',
                        label : 'Label Of Place Promo/Event',
                        imgPath : '',
                        imgName : 'default-square.png',
                        align : 'left',
                    },
                ],

                promos : [
                    {
                        id : 1,
                        title : 'Promo Name 1',
                        info : 'Event Promotion Info Lorem Ipsum Dolar Sect',
                        label : 'Label Of Place Promo/Event',
                        imgPath : '',
                        imgName : 'default-square.png',
                        align : 'left',
                    },

                    {
                        id : 2,
                        title : 'Promo Name 2',
                        info : 'Event Promotion Info Lorem Ipsum Dolar Sect',
                        label : 'Label Of Place Promo/Event',
                        imgPath : '',
                        imgName : 'default-square.png',
                        align : 'left',
                    },

                    {
                        id : 3,
                        title : 'Promo Name 3',
                        info : 'Event Promotion Info Lorem Ipsum Dolar Sect',
                        label : 'Label Of Place Promo/Event',
                        imgPath : '',
                        imgName : 'default-square.png',
                        align : 'left',
                    },

                    {
                        id : 4,
                        title : 'Promo Name 4',
                        info : 'Event Promotion Info Lorem Ipsum Dolar Sect',
                        label : 'Label Of Place Promo/Event',
                        imgPath : '',
                        imgName : 'default-square.png',
                        align : 'left',
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
