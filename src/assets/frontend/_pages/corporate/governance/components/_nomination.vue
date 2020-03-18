<template lang="pug">
    .nomination-holder
        .content(v-html = 'content.content')
</template>

<script>
    export default {
        props : {
            content : Object
        }
    }
</script>

<style lang="scss" scoped>
    @import './../../../../style/config.scss';

    .nomination-holder {
        padding-top: 25px;
        padding-bottom: 25px;
    }

    .title {
        @include fs(16)
        text-align: left;
        font-weight: bold;
        margin-bottom: 20px;
        padding-bottom: 20px;
        text-align: center;
        border-bottom: 1px solid;
        @include border(#d4af37)
    }

    .content {
        max-height: 540px;
        height: 100%;
        overflow: auto;
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
