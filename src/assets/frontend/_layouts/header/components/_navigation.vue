<template lang="pug">
    ul.navi(:class="{ active : isHamburger }")
        li.navi-list(v-for = 'data in navi', :key = 'data.id')
            a.navi-link(:href="data.link") {{ data.title }}
</template>

<script>
    import Media from '../../../_shares/media.js'

    export default {
        extends: Media,

        data() {
            return {
                navi : [
                    {
                        id : 1,
                        title : 'Brands',
                        link : '../eat-drink/'
                    },

                    {
                        id : 2,
                        title : 'About Us',
                        link : '../celebrate/'
                    },

                    {
                        id : 3,
                        title : 'Investor Relations',
                        link : '../happening/'
                    },


                    {
                        id : 4,
                        title : 'Membership',
                        link : '../news/'
                    },

                    {
                        id : 5,
                        title : 'Contact Us',
                        link : '../corporate/'
                    },
                ]
            }
        },

        computed : {
            isHamburger () {
                return this.$store.getters.isHamburger;
            },
        },

        methods : {
            removeHamburger () {
                if(this.is641 === true){
                    this.$store.dispatch('updateState', {
                        key : 'isHamburger',
                        value : false
                    });
                }
            },

            locationHamburger () {
                if(this.is641 === false){
                    this.$store.dispatch('updateState', {
                        key : 'isHamburger',
                        value : false
                    });
                }

                this.isHamburger === false ? document.body.classList.remove('no-scroll') : document.body.classList.add('no-scroll')
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
        top: 89px;
        right: -100%;
        list-style: none;
        user-select: none;
        text-transform: uppercase;
        font-weight: 500;
        padding-top: 10px;
        padding-bottom: 10px;
        text-align: left;
        @include background($white)

        @include media(xs-up) {
            top: 96px;
        }

        &.active{
            opacity: 1;
            visibility: visible;
            overflow-y: auto;
            right: 0;
            border-top: 1px solid;
            height: calc(100vh - 89px);

            @include media(xs-up){
                height: calc(100vh - 96px);
            }

            @include border(#dadada)
            @include trans-prop(visibility, opacity, right, border-top)
        }


        @include media(sm-up) {
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
            padding-top: 10px;
            padding-bottom: 10px;
            padding-left: 20px;
            padding-right: 20px;
            letter-spacing: .2em;

            @include fs(14)

            @include media(sm-up){
                display: inline-block;
                padding-top: 0;
                padding-bottom: 0;
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
</style>
