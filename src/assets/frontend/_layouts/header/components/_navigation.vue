<template lang="pug">
    ul.navi(:class="{ active : isHamburger }")
        li.navi-list
            a.navi-link(href="../brand/", :class="{ active : setActive('Brands') }") Brands
        li.navi-list(@click='toggleAbout()')
            a.navi-link(href="javascript:void(0)", :class="{ active : setActive('About Us') }") About Us
            .navi-sub.bg-white(:class="{ active : isAbout }")
                ul.sublayer
                    li.navi-list
                        a.navi-link Span
        li.navi-list(@click='toggleInvestor()')
            a.navi-link(href="javascript:void(0)", :class="{ active : setActive('Investor Relations') }") Investor Relations
            .navi-sub.bg-white(:class="{ active : isInvestor }")
                ul.sublayer
                    li.navi-list(v-for='data in investor')
                        a.navi-link(:href='data.link', v-if='data.link !== ""') {{ data.title }}
                        a.navi-link(:href="url + '/backend/storage/uploads' + data.asset.path", v-else) {{ data.title }}
        li.navi-list
            a.navi-link(href="../membership/", :class="{ active : setActive('Membership') }") Membership
        li.navi-list
            a.navi-link(href="../contact-us/", :class="{ active : setActive('Contact Us') }") Contact Us
</template>

<script>
    import Media from '../../../_shares/media.js'

    export default {
        extends: Media,

        props: {
            investor: Array,
            url: String,
        },

        computed : {
            isHamburger () {
                return this.$store.getters.isHamburger;
            },

            isInvestor () {
                return this.$store.getters.isInvestor;
            },

            isAbout () {
                return this.$store.getters.isAbout;
            }
        },

        methods : {
            setActive : function(payload){
                return payload === document.title.slice(0, payload.length)
            },

            toggleInvestor () {
                this.$store.dispatch('updateState', {
                    key : 'isInvestor',
                    value : !this.isInvestor
                })

                this.$store.dispatch('updateState', {
                    key : 'isAbout',
                    value : false
                })
            },

            toggleAbout () {
                this.$store.dispatch('updateState', {
                    key : 'isAbout',
                    value : !this.isAbout
                })

                this.$store.dispatch('updateState', {
                    key : 'isInvestor',
                    value : false
                })
            },

            removeHamburger () {
                if(this.is801 === true){
                    this.$store.dispatch('updateState', {
                        key : 'isHamburger',
                        value : false
                    });
                }
            },
        },

        created(){
            window.addEventListener('resize', this.removeHamburger)
        },

        beforeDestroy(){
            window.removeEventListener('resize', this.removeHamburger)
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../../style/config.scss';

    .navi {
        position: absolute;
        z-index: 2;
        height: 0;
        opacity: 0;
        visibility: hidden;
        width: 100%;
        top: 84px;
        right: -100%;
        list-style: none;
        user-select: none;
        text-transform: uppercase;
        font-weight: 500;
        text-align: left;
        @include background($white)

        @include media(xs-up) {
            top: 86px;
        }

        &.active{
            opacity: 1;
            visibility: visible;
            overflow-y: auto;
            right: 0;
            border-top: 1px solid;
            height: calc(100vh - 84px);

            @include media(xs-up){
                height: calc(100vh - 86px);
            }

            @include border(#dadada)
            @include trans-prop(visibility, opacity, right, border-top)
        }


        @include media(md-up) {
            position: relative;
            text-align: center;
            height: auto;
            top: 0;
            right: 0;
            opacity: 1;
            visibility: visible;
        }


        &-list {
            display: block;
            vertical-align: middle;
            padding-top: 12px;
            padding-bottom: 12px;
            padding-left: 20px;
            padding-right: 20px;

            @include fs(14)

            @include media(md-up){
                display: inline-block;
                &:first-child{
                    padding-left: 0;
                }
                &:last-child{
                    padding-right: 0;
                }
            }
        }

        &-link {
            &.active, &:hover{
                @include color(#d4af37)
                @include trans-prop(color)
            }
        }
    }

    .navi-sub{
        position: relative;
        height: auto;

        @include media(md-up){
            position: absolute;
            z-index: 1;
            visibility: hidden;
            height: 0;

            &.active{
                visibility: visible;
                height: auto;
            }
        }

        .sublayer{
            @include media(md-up){
                border: 1px solid;
                border-color: var(--grey);
                background-color: var(--white);
                margin-left: -20px;
                margin-top: 12px;
                text-align: left;
                .navi-list{
                    display: block;
                    padding-left: 0;
                    padding-right: 0;

                    &:not(:last-child){
                        border-bottom: 1px solid;
                        border-color: var(--grey);
                    }
                }
            }

            .navi-link{
                margin: 0 10px;

                &.active, &:hover{
                    @include color(#d4af37)
                    @include trans-prop(color)
                }

                &:after{
                    content: none;
                }

                @include media(md-up){
                    padding: 10px 0px;
                    margin: 0 15px;
                }
            }
        }
    }
</style>
