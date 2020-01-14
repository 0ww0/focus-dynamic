<template lang="pug">
    transition(name = 'loader-fade')
        .loader-component(:class='background')
            .loader(:class = 'load.type')
                span(v-for = 'n, index in load.loop')
</template>

<script>
    export default {
        props : {
            background : {
                type: String,
                default: 'bg-grey'
            },
        },

        data() {
            return {
                load : {
                    type : 'pulse',
                    loop : 3
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

    $time: 1.2s;
    $curve: cubic-bezier(0.25, 0.46, 0.45, 0.94);

    .pulse{
        position: relative;
        display: inline-block;
        width: 100px;
        span{
            display: inline-block;
            width: 8px;
            height: 8px;
            margin: auto 12px;
            @include background($dark)
            border-radius: 100%;
            text-align: center;
            animation: pulse $time $curve infinite;

            @for $i from 1 through 3 {
                &:nth-child(#{$i}){
                    animation-delay: calc(#{$i} * 1 * 1.2s / 12);
                }
            }
        }
    }

    @keyframes pulse {
        0%, 100%{
            opacity: 0;
            transform: scale(0.5);
        }

        60% {
            opacity: 1;
            transform: scale(1);
        }
    }
</style>
