<template lang="pug">
    .term-holder
        .container.slim
            .title
                span Terms of Reference of The Board
            textTab(border)
                contentTab(name = "Audit Committee", selected)
                    audit(:content = 'audit')
                contentTab(name = "Nomination Committee")
                    nomination(:content = 'nomination')
</template>

<script>
    import textTab from './../../../../_components/tab/_text.vue'
    import contentTab from './../../../../_components/tab/_content.vue'
    import audit from './_audit.vue'
    import nomination from './_nomination.vue'

    export default {
        props : {
            audit : Object,
            nomination : Object,
        },

        components : {
            textTab,
            contentTab,
            audit,
            nomination
        },
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
