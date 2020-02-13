<template lang="pug">
    .logo-holder
        a(:href='logoObj.link')
            img(:src="url + path", :alt = 'logoObj.name')
</template>

<script>
    import { API, EntryAPI, Logo } from '../api/_api.js'

    export default {
        props : {
            url : {
                type : String,
                default: 'http://backend.waswar.net'
            }
        },

        data() {
            return {
                logoObj : {},
                path: {},
            }
        },

        methods : {
            fetchLogo() {
                API.post(EntryAPI, {
                    query: Logo,
                }).then(resp => {
                    let list = resp.data.data;
                    this.logoObj = list.logoSingleton;
                    this.path = this.logoObj.logo.path;
                }).catch(err => {
                    console.log(err)
                })
            }
        },

        created() {
            this.fetchLogo()
        }
    }
</script>

<style lang='scss' scoped>
    @import '../../../style/config.scss';

    .logo-holder{
        width: 100%;
        max-width: 250px;
        padding: 0 20px;

        @include media(xs-up) {
            max-width: 300px;
        }

        @include media(sm-up) {
            margin: 0 auto;
        }

        @include trans-prop(max-width)
    }
</style>
