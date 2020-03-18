<template lang="pug">
    .profile-holder
        .tagline
            p {{ content.name }}
        .content(v-html = 'content.content')
        groupButton
            linkButton(name = 'Download Company Profile', :link = "url + '/backend/storage/uploads' + content.asset" color = 'theme', outline)
</template>

<script>
    import groupButton from './../../../../_components/button/_group.vue'
    import linkButton from './../../../../_components/button/_link.vue'

    export default {
        props : {
            content : Object,
            url: String,
        },

        components : {
            groupButton,
            linkButton
        }
    }
</script>

<style lang="scss" scoped>
    @import './../../../../style/config.scss';

    .profile-holder {
        padding-top: 25px;
        padding-bottom: 25px;
    }

    .tagline {
        padding-bottom: 25px;
        text-align: center;
        font-weight: bold;
        @include fs(16)
    }
</style>
