<template lang="pug">
    .information-holder
        .title
            span General Corporate Information
        .content
            table
                tbody
                    tr
                        td Company Name
                        td {{ info.name }}
                    tr
                        td Stock Name
                        td {{ info.stockName }}
                    tr
                        td Stock Code
                        td {{ info.stockCode }}
                    tr
                        td Listing
                        td {{ info.listing }}
                    tr
                        td Sector
                        td {{ info.sector }}
                    tr
                        td Business Address
                        td(v-html = 'info.businessAddress')
                    tr
                        td Share Registrar
                        td(v-html = 'info.shareRegistrar')
                    tr
                        td Website
                        td
                            a.link(:href='info.website') {{ info.website }}
</template>

<script>
    export default {
        props : {
            info: Object,
        }
    }
</script>

<style lang="scss" scoped>
    @import './../../../../style/config.scss';

    .information-holder {
        padding-top: 25px;
        padding-bottom: 25px;
    }

    .title {
        @include fs(18)
        text-align: center;
        font-weight: bold;
        margin-bottom: 20px;
    }

    .content {
        @include fs(14)
        table {
            width: 100%;
            table-layout: fixed;
            border-collapse: collapse;
        }

        tr {
             @include odd{
                @include background($darkGrey, .4)
             }
        }

        td {
            padding: 5px 15px;
            vertical-align: top;
            border: 1px solid;

            &:first-child {
                font-weight: 500;
            }
        }

        .link {
            text-decoration: underline;
            &:hover {
                @include color(#d4af37)
            }
        }
    }
</style>
