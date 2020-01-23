<template lang="pug">
    .store-holder
        logoBanner(:banner = 'banner')
        .container
            paragraphText(:paragraph = 'store')
</template>

<script>
    import logoBanner from '../../../../_components/banner/_logo.vue'
    import paragraphText from '../../../../_components/text/_paragraph.vue'

    export default {
        components : {
            logoBanner,
            paragraphText
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
                    text : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    align : 'center'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
