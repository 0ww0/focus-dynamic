<template lang="pug">
    .term-holder
        .title
            span {{ content.title }}
        .content
            img(:src="url + content.image")
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

    .term-holder {
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
        max-height: 713px;
        height: 100%;
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
