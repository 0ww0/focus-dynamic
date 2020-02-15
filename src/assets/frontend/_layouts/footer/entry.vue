<template lang="pug">
    .wrapper-footer
        .footer.container
            info
            .sitemap-holder
                sitemap(:sitemap = 'explore')
                sitemap(:sitemap = 'corporate')
                sitemap(:sitemap = 'membership')
</template>

<script>
    import { API, EntryAPI, Explore, Corporate, Membership } from './api/_api.js'
    import info from './components/_info.vue'
    import sitemap from './components/_sitemap.vue'

    export default {
        components : {
            info,
            sitemap
        },

        data() {
            return {
                explore : {
                    title: "Explore",
                    list: []
                },
                corporate : {
                    title: "Corporate",
                    list: []
                },
                membership : {
                    title: "Membership",
                    list: []
                }
            }
        },

        methods : {
            fetchExplore() {
                API.post(EntryAPI, {
                    query: Explore,
                }).then(resp => {
                    let explore = resp.data.data;
                    this.explore.list = explore.sitemapCollection;
                }).catch(err => {
                    console.log(err)
                })
            },

            fetchCorporate() {
                API.post(EntryAPI, {
                    query: Corporate,
                }).then(resp => {
                    let corporate = resp.data.data;
                    this.corporate.list = corporate.sitemapCollection;
                }).catch(err => {
                    console.log(err)
                })
            },

            fetchMembership() {
                API.post(EntryAPI, {
                    query: Membership,
                }).then(resp => {
                    let membership = resp.data.data;
                    this.membership.list = membership.sitemapCollection;
                }).catch(err => {
                    console.log(err)
                })
            }
        },

        created() {
            this.fetchExplore()
            this.fetchCorporate()
            this.fetchMembership()
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/config.scss';

    .wrapper-footer {
        position: relative;
        display: block;
        width: 100%;
        border-top: 1px solid;
        padding-top: 35px;
        padding-bottom: 35px;

        @include border(#e3e3e3)
        @include background($white)

        .footer {
            display: flex;
            flex-direction: column;
            flex-flow: column nowrap;

            @include media(sm-up) {
                flex-direction: row;
                flex-flow: row nowrap;
            }
        }

        /deep/ .info-holder {
            flex: 1;
            margin-bottom: 25px;

        }

        /deep/ .sitemap-holder {
            width: 100%;
            display: flex;
            flex-direction: column;
            flex-flow: column wrap;

            @include media(xs-up) {
                width: 100%;
                flex-direction: row;
                flex-flow: row wrap;
            }

            @include media(sm-up) {
                width: 50%;
            }

            @include media(md-up) {
                width: 40%;
            }

            .sitemap-component {
                &:not(:last-child) {
                    margin-bottom: 25px;
                }

                @include media(xs-up) {
                    margin-right: auto;

                    &:not(:last-child) {
                        margin-bottom: 0;
                    }
                }

                @include media(sm-up) {
                    margin-right: 0;
                    margin-left: auto;
                }
            }


        }
    }
</style>
