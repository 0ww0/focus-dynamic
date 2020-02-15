<template lang="pug">
    .info-holder
        .logo
            a(:href="logoObj.link")
                img(:src="url + path", :alt = "logoObj.name")
        .title
            p {{ logoObj.name }}
        .description
            p(v-html="logoObj.description")
</template>

<script>
    import { ENDPOINT, API, EntryAPI, Logo } from '../api/_api.js'

    export default {
        data() {
            return {
                url: ENDPOINT,
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

<style lang="scss" scoped>
    @import '../../../style/config.scss';


    .info-holder {
        .logo {
            width: 100%;
            max-width: 220px;
            margin-bottom: 25px;
        }

        .title {
            @include color($black)
            @include fs(14)
            font-weight: 500;
            letter-spacing: .1em;
            margin-bottom: 10px;
        }

        .description {
            @include color($black, .8)
            @include fs(14)
            font-weight: 300;
        }
    }
</style>
