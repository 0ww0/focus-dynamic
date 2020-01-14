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
                    type : 'bar',
                    loop : 6
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

    .bar{
        width: 60px;
        height: 50px;

        span {
            display: inline-block;
            width: calc((100% / 6) - 2px);
            height: 100%;
            animation: delay $time $curve infinite;
            background-color: $dark;

            &:not(:first-child){
                margin-left: 2px;
            }

            @for $i from 1 through 6 {
                &:nth-child(#{$i}) {
                    animation-delay: calc(#{$i} * 1 * 1.2s / 12);
                }
            }
        }
    }

    @keyframes delay {
        0%, 40%, 100% {
            transform: scaleY(0.05);
        }  20% {
            transform: scaleY(1.0);
        }
    }
</style>
