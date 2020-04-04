<template lang="pug">
    .terms-holder(v-html = 'terms')
</template>

<script>
    export default {
        props : {
            terms : String
        }
    }
</script>

<style lang="scss">
    @import './../../../../style/config.scss';

    .terms-holder{
        height: 100%;
        margin-top: 20px;
        margin-bottom: 20px;
        margin-right: 14px;

        @include media(hd-up){
            margin-left: 22px;
        }

        p{
            @include fs(16)

            &:not(:last-child){
                margin-bottom: 10px;
            }
        }

        ol, ul{
            @include fs(16)
        }
    }

    ol {
        list-style: none;
        list-style-position: inside;

        counter-reset: item;
        li {
            margin-left: 15px;
            counter-increment: item;

            &:not(:last-child){
                margin-bottom: 10px;
            }

            &:before {
                margin-right: 10px;
                font-weight: 400;
                content: counters(item, ".") " ";
                display: inline-block;
            }
        }
    }

    ul {
        list-style: none;
        list-style-position: inside;

        counter-reset: item;
        li {
            margin-left: 15px;
            counter-increment: item;

            &:before {
                margin-right: 10px;
                font-weight: normal;
                content: '•';
                display: inline-block;
            }

        }
    }
</style>
