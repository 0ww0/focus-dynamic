<template lang="pug">
    transition(name = 'loader-fade')
        .loader-component(:class='background')
            .loader(:class = 'load.type')
                span(v-for = 'n, index in load.loop') {{ load.text[index] }}
</template>

<script>
    export default {
        props : {
            background : {
                type: String,
                default: 'bg-grey'
            },

            text : {
                type : String,
                default : 'Loading'
            }
        },

        data() {
            return {
                load : {
                    type : 'text',
                    text : this.text.split(''),
                    loop : this.text.length
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/config.scss';

    .loader-component{
        display: flex;
        flex-direction: column;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        z-index: 10;
        height: 100vh;
    }

    $textLength : 7;
    $time: 1.2s;
    $curve: cubic-bezier(0.25, 0.46, 0.45, 0.94);

    .text{
        position: relative;
        text-transform: uppercase;
        @include color($dark)

        span{
            display: inline-block;
            opacity: 0;
            transform: rotateX(-90deg);
            animation: rotating $time $curve infinite;

            @for $i from 1 through $textLength{
                &:nth-child(#{$i}){
                    animation-delay: calc(#{$i} * 1 * 1.2s / 12);
                }
            }
        }
    }

    @keyframes rotating {
        10% {
            opacity: 0.5;
        }
        20% {
            opacity: 1;
            transform: rotateX(-360deg);
        }
        80% {
            opacity: 1;
            transform: rotateX(-360deg);
        }
        90% {
            opacity: 0.5;
        }
        100% {
            opacity: 0;
        }
    }
</style>
