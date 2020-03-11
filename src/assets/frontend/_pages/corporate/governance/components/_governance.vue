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
            url : String,
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
