<template lang="pug">
    button.button(:disabled = 'disabled', :class='[sizeClass, colorClass, buttonClass]', type='button')
        img.image(v-if='image', :src="image")
        i.icon.fas(v-if='icon', :class='icon')
        span(v-if='name') {{ name }}
</template>

<script>
    export default {
        props :  {
            name : [ Boolean, String ],
            image : [ Boolean, String ],
            icon : [ Boolean, String ],
            outline : Boolean,
            pill : Boolean,
            size : String,
            color : String,
            disabled : Boolean,
        },

        data() {
            return {
                isOutline : this.outline,
                isPill : this.pill
            }
        },

        computed : {
            buttonClass : function() {
                return {
                    'outline' : this.isOutline,
                    'pill' : this.isPill
                }
            },

            sizeClass : function () {
                return this.size ? this.size : ''
            },

            colorClass : function () {
                return this.color ? this.color : ''
            }
        }
    }
</script>

<style lang="scss" scoped >
    @import '../../../style/config.scss';

    .button {
        position: relative;
        width: 100%;
        border: em(1) solid;

        text-align: center;
        padding: em(12) em(50);

        display: flex;
        flex-direction: row;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;

        text-transform: uppercase;
        user-select: none;
        white-space: nowrap;
        cursor: pointer;
        margin: em(5) auto;

        @include media(sm-up){
            margin: em(5);
        }

        @include background($white)
        @include color($black)
        @include border($darkGrey)

        span {
            display: block;
            margin-bottom: -2px;
        }
    }

    button.button, input.button {
        @include fs(14)
        -webkit-appearance: none;
        box-shadow: none;
        padding: em(8) em(50);
        outline: none;
    }

    .button {
        @include fs(14)
        line-height: 1.4;
        width: 100%;

        @include media(sm-up){
            width: auto;
        }

        border-radius: em(10);

        &.pill {
            border-radius: em(20);
        }

        .icon{
            &:not(:last-child) {
                margin-right: em(6);
            }
        }

        .image {
            width: 20px;
            object-fit: contain;
            object-position: center;

            &:not(:last-child) {
                margin-right: em(10);
            }
        }

        &.full {
            width: 100%;
        }

        &.small{
            @include fs(14)
        }

        &.medium{
            @include fs(18)
        }

        &.large{
            @include fs(22)
        }
    }

    .button {
        &[disabled] {
            pointer-events: none;
            opacity: 0.5;
        }

        &.black {
            @include background($black);
            @include color($white)
            @include border($white, .3)
            &.outline {
                @include background($white)
                @include color($black)
            }
        }

        &.theme {
            @include background(#d4af37);
            @include color($white)
            @include border(#d4af37)
            &.outline {
                @include background($white)
                @include color(#d4af37)
                &:hover {
                    @include background(#d4af37)
                    @include color($white)
                    @include trans-prop(background-color, color)
                }
            }
        }

        &.white {
            @include background($white)
            @include color($black)
            @include border($black, .3)
            &.outline {
                @include background($white)
                @include color($black)
            }
        }

        &.dark {
            @include background($dark);
            @include color($white)
            @include border($white, .3)
            &.outline {
                @include background($white)
                @include color($dark)
            }
        }

        &.light {
            @include background($light)
            @include color($black)
            @include border($black, .3)
            &.outline {
                @include background($white)
                @include color($light)
            }
        }

        &.link {
            @include background($white, 0)
            @include color($black)
            border-color: transparent;
            text-decoration: underline;
        }

        &.primary {
            @include background($primary)
            @include color($black)
            @include border($primary, .3)
            &.outline {
                @include background($white);
                @include color($primary)
            }
        }

        &.danger {
            @include background($danger)
            @include color($white)
            @include border($white, .3)
            &.outline {
                @include background($white);
                @include color($danger)
            }
        }

        &.info {
            @include background($info)
            @include color($black)
            @include border($black, .3)
            &.outline {
                @include background($white);
                @include color($info)
            }
        }

        &.success {
            @include background($success)
            @include color($white)
            @include border($white, .3)
            &.outline {
                @include background($white);
                @include color($success)
            }
        }

        &.warning {
            @include background($warning)
            @include color($white)
            @include border($white, .3)
            &.outline {
                @include background($white);
                @include color($warning)
            }
        }

        &:hover {
            @include background($black)
            @include color($white)
            @include trans-prop(background-color, color)
        }

        &.outline {
            &:hover {
                @include background($black)
                @include color($white)
                @include trans-prop(background-color, color)
            }
        }
    }
</style>
