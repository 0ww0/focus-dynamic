<template lang="pug">
    .button-menu-component
        .button-icon(v-if='icon', @click = 'toggle')
            i.fas(:class='icon')
        .button-menu(v-if='open')
            slot
</template>

<script>
    export default {
        props : {
            icon : [ Boolean, String ],
            isOpen : Boolean
        },

        data () {
            return {
                buttons : [],
                open : this.isOpen,
            }
        },

        created() {
            this.buttons = this.$children;
        },

        methods : {
            toggle : function() {
                this.open = !this.open;
            },
        }
    }
</script>

<style lang="scss" scoped >
    @import '../../style/config.scss';

    .button {
        &-icon {
            position: relative;
            width: 45px;
            height: 45px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 100%;
            cursor: pointer;

            border: 1px solid;

            @include fs(14)
            @include border($dark)
            @include background($white)
            @include color($black)

            margin: em(5) auto;

            @include media(sm-up){
                margin: em(5);
            }

            &:hover {
                @include background($black)
                @include color($white)
                @include trans-prop(background-color, color)
            }
        }

        &-menu {
            width: 100%;
            z-index: 1;
            border: 1px solid;
            border-radius: em(5);
            margin-top: 5px;
            @include background($white)

            @include media(xs-up) {
                position: absolute;
                max-width: 260px;
            }

            .button {
                border: 0;
                border-radius: 0;
                padding: em(4) em(10);
                justify-content: flex-start;
                margin: em(5);
                width: calc(100% - 10px);
            }
        }
    }
</style>
