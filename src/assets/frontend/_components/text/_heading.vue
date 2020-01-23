<template lang="pug">
    .heading-component(:class="{ 'subheader' : subheader }")
        .title(:class = 'text.align')
            p {{ text.title }}
        .link(v-if='!subheader')
            a(:href="'text.linkUrl'")
                span {{ text.linkText }}
                i.fas.fa-angle-double-right
</template>

<script>
    export default {
        props : {
            text : Object,
            subheader : Boolean,
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/config.scss';

    .heading-component {
        display: flex;
        flex-direction: row;
        flex-flow: row nowrap;
        align-items: center;
        padding: 25px 0;

        &.subheader {
            padding-top: 15px;
            padding-bottom: 15px;
            .title {
                @include  fs(20);
            }
        }

        .title {
            @include color(#d4af37)
            flex: 1;
            @include fs(24)
            font-weight: 500;
            letter-spacing: .1em;

            &.left {
                text-align: left;
            }

            &.center {
                text-align: center;
            }

            &.right {
                text-align: right;
            }
        }

        .link {
            a {
                &:hover {
                    @include color(#d4af37)
                    @include trans-prop(color)
                }
            }
            font-weight: 500;
            i {
                margin-left: 10px;
            }
        }
    }
</style>
