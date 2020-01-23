<template lang="pug">
    .store-holder
        logoBanner(:banner = 'banner')
        .container
            paragraphText(:paragraph = 'store')
        gallery(:gallery = 'gallery')
</template>

<script>
    import logoBanner from '../../../../_components/banner/_logo.vue'
    import paragraphText from '../../../../_components/text/_paragraph.vue'
    import gallery from '../../components/_gallery.vue'

    export default {
        components : {
            logoBanner,
            paragraphText,
            gallery
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
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
