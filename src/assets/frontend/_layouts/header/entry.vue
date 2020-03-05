<template lang="pug">
    .wrapper-header
        loading(ref='loading')
        .container
            .header
                logo(:logo = 'logo', :url = 'url')
                joinLink(:membership = 'membership')
                trigger
        .navigation
            navigation(:investor = 'investor', :navigation = 'navigation', :aboutus = 'aboutus', :url = 'url')
</template>

<script>
    import { URL, API, EntryAPI, Logo, Memberships, Investors, Navigations, Aboutus } from './../api/_api.js'
    import axios from 'axios'
    import logo from './components/_logo.vue'
    import trigger from './components/_trigger.vue'
    import navigation from './components/_navigation.vue'
    import loading from '../../_components/loader/_spin.vue'
    import joinLink from './components/_link.vue'

    export default {
        components : {
            logo,
            trigger,
            navigation,
            loading,
            joinLink
        },

        data() {
            return {
                url: URL,
                logo: {
                    image:{}
                },
                membership : {},
                investor : [],
                navigation: [],
                aboutus: []
            }
        },

        methods: {
            fetchAxios() {
                axios.all([
                    API.post(EntryAPI, { query : Logo }),
                    API.post(EntryAPI, { query : Memberships }),
                    API.post(EntryAPI, { query : Investors }),
                    API.post(EntryAPI, { query : Aboutus }),
                    API.post(EntryAPI, { query : Navigations })
                ])
                .then(axios.spread(( LogoResp, MembershipsResp, InvestorsResp, AboutusResp, NavigationsResp ) => {
                    let logo = LogoResp.data.data;
                    this.logo = logo.logoSingleton;
                    this.logo.image = logo.logoSingleton.logo.path;

                    let member = MembershipsResp.data.data;
                    this.membership = member.membershipsSingleton;

                    let investor = InvestorsResp.data.data;
                    this.investor = investor.investorsCollection;

                    let aboutus = AboutusResp.data.data;
                    this.aboutus = aboutus.aboutsCollection;

                    let navigation = NavigationsResp.data.data;
                    this.navigation = navigation.navigationsCollection
                }))
                .catch(axios.spread(( LogoErr, MembershipsErr, InvestorsErr, AboutusErr, NavigationsErr ) => {
                    console.log(LogoErr, MembershipsErr, InvestorsErr, AboutusErr, NavigationsErr)
                }))
            },
        },

        created () {
            this.fetchAxios()
            document.onreadystatechange = () => {
                if (document.readyState == "complete") {
                    this.$refs['loading'].close()
                } else {
                    this.$refs['loading'].open()
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../style/config.scss';

    .wrapper-header {
        position: fixed;
        display: block;
        @include background($white)
        width: 100%;
        box-shadow: 0 2px 10px rgba(0, 0, 0, .2);
        z-index: 1;
    }

    .header {
        position: relative;
        display: flex;
        flex-direction: row;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;

        padding-top: 25px;
        padding-bottom: 25px;
    }

    .navigation {
        border-top: 1px solid;
        @include border(#e3e3e3)
    }
</style>
