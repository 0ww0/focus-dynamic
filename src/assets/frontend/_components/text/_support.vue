<template lang="pug">
    .support-component
        .support-title
            p {{ support.title }}
        .support-text
            p {{ support.text }}
        .support-phone(v-if='support.phone')
            p +60 {{ support.phone }}
        .support-link(v-if='support.linkText')
            a(:href = "support.link")
                span {{ support.linkText }}
                i.far(:class="'fa-' + support.iconClass")
</template>

<script>
    export default {
        props : {
            support : Object
        }
    }
</script>

<style lang='scss' scoped >
    @import '../../style/config.scss';

    .support{
        &-title{
            @include fs(16)
        }

        &-text{
            @include weight(300)
            @include fs(14)
        }

        &-phone{
            @include weight(300)
            @include fs(14)
        }

        &-link{
            @include weight(300)
            @include fs(14)
            @include color($info);
            i{
                margin-left: 10px;
            }
            &:hover{
                text-decoration: underline;
            }
        }
    }
</style>
