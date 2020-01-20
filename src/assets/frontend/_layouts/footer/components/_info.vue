<template lang="pug">
    .info-holder
        .logo
            a(:href="logo.link")
                img(:src="logo.image")
        .title
            p {{ title }}
        .description
            p {{ description }}
</template>

<script>
    export default {
        data() {
            return {
                logo : {
                    link : '../',
                    image : '../assets/images/logo/logo-black.png',
                },
                title : 'Focus Dynamics Group',
                description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../../style/config.scss';


    .info-holder {
        .logo {
            width: 100%;
            max-width: 220px;
            margin-bottom: 25px;
        }

        .title {
            @include color($black)
            @include fs(14)
            font-weight: 500;
            letter-spacing: .1em;
            margin-bottom: 10px;
        }

        .description {
            @include color($black, .8)
            @include fs(14)
            font-weight: 300;
        }
    }
</style>
