<template lang="pug">
    .sitemap-component
        .title
            p {{ sitemap.title }}
        ul.list
            li(v-for = 'list in sitemap.list')
                a(:href="list.link")
                    span {{ list.name }}
</template>

<script>
    export default {
        props : {
            sitemap : Object
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../../style/config.scss';

    .sitemap-component {
        @include fs(14)

        .title {
            font-weight: 500;
            letter-spacing: .1em;
            margin-bottom: 10px;
        }

        .list {
            font-weight: 300;
            list-style: none;
            li {
                margin: 5px 0;
            }
        }
    }
</style>
