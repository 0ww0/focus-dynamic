<template lang="pug">
    .support-component
        .title
            span {{ support.title }}
        .content(v-html='support.content')
</template>

<script>
    export default {
        props: {
            support: Object,
        }
    }
</script>

<style lang="scss" scoped>
    @import './../../../../style/config.scss';

    .support-component {
        .title {
            @include fs(16)
            @include weight(500)
            margin-bottom: 10px;
        }

        .content {
            @include fs(14)
            @include weight(300)
        }
    }
</style>

<style lang='scss'>
    @import './../../../../style/config.scss';

    .support-component {
        a{
            text-decoration: underline;
            @include color($info)
        }
    }
</style>
