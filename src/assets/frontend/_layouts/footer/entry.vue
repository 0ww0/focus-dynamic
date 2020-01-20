<template lang="pug">
    .wrapper-footer
        .footer.container
            info
            .sitemap-holder
                sitemap(:sitemap = 'explore')
                sitemap(:sitemap = 'explore')
</template>

<script>
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
                    title : 'Explore',
                    list: [
                        {
                            id: 1,
                            name: 'Eat & Drink',
                            link: ''
                        },

                        {
                            id: 2,
                            name: 'Celebrate',
                            link: ''
                        },

                        {
                            id: 3,
                            name: 'What\'s On',
                            link: ''
                        },

                        {
                            id: 4,
                            name: 'Shop',
                            link: ''
                        },

                        {
                            id: 5,
                            name: 'News',
                            link: ''
                        },

                        {
                            id: 6,
                            name: 'Corporate',
                            link: ''
                        }
                    ]
                }
            }
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
