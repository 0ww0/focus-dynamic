<template lang="pug">
    .info-holder
        .logo
            a(:href="info.link")
                img(:src="url + info.logo", :alt = "info.name")
        .title
            p {{ info.name }}
        .description
            p(v-html="info.description")
</template>

<script>
    export default {
        props : {
            info: Object,
            url: String,
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
