<template lang="pug">
    .term-holder
        .title
            span Terms of Reference of The Board
        .content
</template>

<script>
    export default {
        props : {
            audit : Object,
            nomination : Object,
        }
    }
</script>

<style lang="scss" scoped>
    @import './../../../../style/config.scss';

    .term-holder {
        padding-top: 25px;
        padding-bottom: 25px;
    }

    .title {
        @include fs(16)
        text-align: left;
        font-weight: bold;
        margin-bottom: 20px;
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
