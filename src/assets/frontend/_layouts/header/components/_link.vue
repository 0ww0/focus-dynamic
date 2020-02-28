<template lang="pug">
    .link-holder(:class = 'isResponsive')
        a(:href = "membership.linkJN")
            span Join Member Now
            i.fas.fa-chevron-right
</template>

<script>
    import Media from '../../../_shares/media.js'

    export default {
        extends: Media,

        props : {
            membership : Object
        },

        computed : {
            isResponsive () {
                return this.is801 === true ? 'active' : ''
            }
        },

        created(){
            this.checkMobile()
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../../style/config.scss';

    .link-holder {
        display: none;
        @include fs(14)

        a{
            &.active, &:hover{
                @include color(#d4af37)
                @include trans-prop(color)
            }
        }

        &.active {
            display: block;
            position: absolute;
            right: 0;
        }


        span {
            display: inline-block;
            vertical-align: middle;
            margin-right: 10px;
        }
        i {
            display: inline-block;
            vertical-align: middle;
        }
    }
</style>
