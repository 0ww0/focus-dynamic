<template lang="pug">
    .paragraph-component(:class = "paragraph.align")
        .title(v-if="paragraph.title !== ''")
            p {{ paragraph.title }}
        .text
            p {{ paragraph.text }}
</template>

<script>
    export default {
        props : {
            paragraph : Object
        },

    }
</script>

<style lang="scss" scoped>
    @import '../../style/config.scss';

    .paragraph-component {
        padding-top: 45px;
        padding-bottom: 45px;

        &.left {
            text-align: left;
        }

        &.center {
            text-align: center;
        }

        &.right {
            text-align: right;
        }

        .title {
            @include fs(18)
            font-weight: 500;
            padding-bottom: 10px;
        }

        .text {
            @include fs(14)
            font-weight: 300;
        }
    }
</style>
