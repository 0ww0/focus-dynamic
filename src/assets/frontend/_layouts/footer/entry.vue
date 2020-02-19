<template lang="pug">
    .wrapper-footer
        .footer.container
            info(:info = "info", :url = 'url')
            .sitemap-holder
                sitemap(:sitemap = 'explore')
                sitemap(:sitemap = 'corporate')
                sitemap(:sitemap = 'membership')
</template>

<script>
    import { URL, API, EntryAPI, Logo, Explore, Corporate, Membership } from './../api/_api.js'
    import info from './components/_info.vue'
    import sitemap from './components/_sitemap.vue'

    export default {
        components : {
            info,
            sitemap
        },

        data() {
            return {
                url: URL,
                info: {
                    logo:{}
                },
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
            fetchLogo() {
                API.post(EntryAPI, {
                    query: Logo,
                }).then(resp => {
                    let list = resp.data.data;
                    this.info = list.logoSingleton;
                    this.info.logo = list.logoSingleton.logo.path;
                }).catch(err => {
                    console.log(err)
                })
            },

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
            this.fetchLogo()
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
