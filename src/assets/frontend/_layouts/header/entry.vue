<template lang="pug">
    .wrapper-header
        loading(ref='loading')
        .container
            .header
                logo(:logo = 'logo', :url = 'url')
                joinLink(:membership = 'membership')
                trigger
        .navigation
            navigation
</template>

<script>
    import { URL, API, EntryAPI, Logo, Memberships } from './../api/_api.js'
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
                membership : {}
            }
        },

        methods: {
            fetchLogo() {
                API.post(EntryAPI, {
                    query: Logo,
                }).then(resp => {
                    let list = resp.data.data;
                    this.logo = list.logoSingleton;
                    this.logo.image = list.logoSingleton.logo.path;
                }).catch(err => {
                    console.log(err)
                })
            },

            fetchMembership(){
                API.post(EntryAPI, {
                    query: Memberships,
                }).then(resp => {
                    let list = resp.data.data;
                    this.membership = list.membershipsSingleton;
                }).catch(err => {
                    console.log(err)
                })
            },

            handleScroll : function () {
                let $header = $('.header'),
                    $window = $(window)
                if($window.scrollTop() > 250) {
                    $header.addClass('slim')
                } else {
                    $header.removeClass('slim')
                }
            },
        },

        created () {
            this.fetchLogo()
            this.fetchMembership()
            document.onreadystatechange = () => {
                if (document.readyState == "complete") {
                    this.$refs['loading'].close()
                } else {
                    this.$refs['loading'].open()
                }
            }
            window.addEventListener('scroll', this.handleScroll);
        },

        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
        }
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

        padding-top: 40px;
        padding-bottom: 20px;
        @include trans-prop(padding-top, padding-bottom)

        &.slim {
            padding-top: 20px;
            @include trans-prop(padding-top)
        }
    }

    .navigation {
        border-top: 1px solid;
        @include border(#e3e3e3)
    }
</style>
