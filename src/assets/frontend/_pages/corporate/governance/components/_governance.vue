<template lang="pug">
    .governance-holder
        .title
            span {{ content.title }}
        .content(v-html = 'content.content')
</template>

<script>
    export default {
        props : {
            content : Object,
        }
    }
</script>

<style lang="scss" scoped>
    @import './../../../../style/config.scss';

    .governance-holder {
        padding-top: 25px;
        padding-bottom: 25px;
    }

    .title {
        @include fs(18)
        text-align: center;
        font-weight: bold;
        margin-bottom: 20px;
    }
</style>

<style lang="scss">
    @import './../../../../style/config.scss';

    .content {
        h4 {
            margin-bottom: 10px;
        }
        p {
            @include fs(14)
            margin-right: 10px;
            &:not(:last-child) {
                margin-bottom: 10px;
            }
        }
    }
</style>
