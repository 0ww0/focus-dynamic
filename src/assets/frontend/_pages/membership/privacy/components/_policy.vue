<template lang="pug">
    .policy-holder(v-html = 'policy')
</template>

<script>
    export default {
        props : {
            policy : String
        }
    }
</script>

<style lang="scss">
    @import './../../../../style/config.scss';

    .policy-holder{
        height: calc(100vh - 85px);
        margin-top: 20px;
        margin-bottom: 20px;
        margin-right: 14px;
        overflow: auto;

        @include media(dp-up){
            height: calc(100vh - 66px - 41px - 182px - 85px - 40px);
        }

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
