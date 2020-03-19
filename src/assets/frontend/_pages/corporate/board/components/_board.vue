<template lang="pug">
    .board-holder
        .image
            img(:src = " url + board.image.path")
        .name
            span {{ board.name }}
        .title
            span {{ board.title }}
        .content(v-html = 'board.content')
</template>

<script>
    export default {
        props : {
            board: Object,
            url : String
        }
    }
</script>

<style lang="scss" scoped>
    @import './../../../../style/config.scss';

    .board-holder {
        .image {
            width: 220px;
            border-radius: 100%;
            overflow: hidden;
            margin: 20px auto;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .name {
            @include fs(16)
            @include color(#d4af37)
            text-align: center;
        }

        .title {
            @include fs(14)
            text-align: center;
        }
    }
</style>

<style lang="scss">
    @import './../../../../style/config.scss';

    .content {
        padding: 10px 0;
        p {
            @include fs(14)
            margin-right: 10px;
            &:not(:last-child) {
                margin-bottom: 10px;
            }
        }
    }
</style>
