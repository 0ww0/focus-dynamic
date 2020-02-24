<template lang="pug">
    .button-group-component(:class="[ position, stack ? 'stack' : '', stackIcon ? 'stack-icon' : '', icon ? 'icon' : '' ,full ? 'full' : '', flex ? 'flex' : '' ]")
        slot
</template>

<script>
    export default {
        props : {
            stack : Boolean,
            stackIcon : Boolean,
            icon : Boolean,
            position : String,
            full : Boolean,
            flex : Boolean,
        },
    }
</script>

<style lang="scss" scoped >
    @import '../../style/config.scss';

    .button-group {
        &-component {
            display: flex;
            flex-direction: column;
            flex-flow: column wrap;

            align-items: center;
            justify-content: center;

            &.left{
                justify-content: flex-start;
                align-items: flex-start;
            }

            &.right{
                justify-content: flex-end;
                align-items: flex-end;
            }

            @include media(sm-up){
                flex-direction: row;
                flex-flow: row wrap;
            }

            &.flex {
                .button {
                    flex : 1;
                }
            }

            &.full {
                .button {
                    width: 100%;
                }
            }

            &.icon {
                .button {
                    position: relative;
                    width: 45px;
                    height: 45px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 100%;
                    cursor: pointer;
                    padding: 0;
                }
            }

            &.stack {
                @include media(sm-up){
                    flex-wrap: nowrap;
                }

                .button {
                    width: 100%;

                    @include media(sm-up) {
                        width: auto;
                    }

                    &:not(:last-child) {
                        margin-right: em(0);
                    }

                    &:not(:first-child) {
                        margin-left: em(0);
                    }

                    @include media(sm-up) {
                        @include first-child(){
                            border-top-right-radius: 0;
                            border-bottom-right-radius: 0;
                            border-right: 0;
                        }
                        @include last-child(){
                            border-top-left-radius: 0;
                            border-bottom-left-radius: 0;
                            border-left: 0;
                        }
                        @include all-but-first-last(2){
                            border-radius: 0;
                        }
                    }
                }
            }

            &.stack-icon {
                flex-direction: row;
                flex-flow: row nowrap;

                .button {
                    padding: em(6) em(25);
                    flex-grow: 1;

                    &:not(:last-child) {
                        margin-right: em(0);
                    }

                    &:not(:first-child) {
                        margin-left: em(0);
                    }

                    @include media(sm-up) {
                        flex-grow: 0;
                    }

                    @include first-child(){
                        border-top-right-radius: 0;
                        border-bottom-right-radius: 0;
                        border-right: 0;
                    }
                    @include last-child(){
                        border-top-left-radius: 0;
                        border-bottom-left-radius: 0;
                        border-left: 0;
                    }
                    @include all-but-first-last(2){
                        border-radius: 0;
                    }
                }
            }
        }
    }
</style>
