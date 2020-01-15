<template lang="pug">
    .wrapper-header
        loading(v-if='loading')
        .header
            logo
            trigger
        .navigation
            navigation
</template>

<script>
    import logo from './components/_logo.vue'
    import trigger from './components/_trigger.vue'
    import navigation from './components/_navigation.vue'
    import loading from '../../_components/loader/_spin.vue'

    export default {
        components : {
            logo,
            trigger,
            navigation,
            loading
        },

        data() {
            return {
                loading : false,
            }
        },

        methods: {
            handleScroll : function () {
                let $header = $('.header'),
                    $window = $(window)
                if($window.scrollTop() > 250) {
                    $header.addClass('slim')
                } else {
                    $header.removeClass('slim')
                }
            },

            loader() {
                this.loading = true

                setTimeout(() => {
                    this.loading = false
                }, 3000)
            }
        },

        created () {
            window.addEventListener('DOMContentLoaded', this.loader)
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
        display: flex;
        flex-direction: row;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;

        padding-top: 40px;
        padding-bottom: 20px;
        border-bottom: 1px #e3e3e3 solid;
        @include trans-prop(padding-top, padding-bottom)

        &.slim {
            padding-top: 20px;
            @include trans-prop(padding-top)
        }
    }

    .navigation {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: center;
    }
</style>
