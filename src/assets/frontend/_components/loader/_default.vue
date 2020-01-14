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
                    type : 'default',
                    loop : 12
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

    .default{
        position: relative;
        display: inline-block;
        width: 100px;
        height: 100px;
        span{
            position: absolute;
            width: 6px;
            height: 6px;
            @include background($dark)
            border-radius: 100%;

            animation: default $time $curve infinite;

            $angle : 0deg 30deg 60deg 90deg 120deg 150deg 180deg 210deg 240deg 270deg 300deg 330deg;
            @each $degree in $angle {
                $i : index($angle, $degree);

                &:nth-child(#{$i}){
                    $sin : sin($degree);
                    $cos : cos($degree);
                    animation-delay: calc(#{$i} * 1 * 1.2s / 12);
                    top: calc((100px - 6px) * .4 + (-1 * #{$sin}) * ((100px - 6px) * .5));
                    left: calc((100px - 6px) * .4 + (-1 * #{$cos}) * ((100px - 6px) * .5));
                }
            }
        }
    }

    @keyframes default{
        0%, 20%, 80%, 100% {
            transform: scale(1);
        }

        50% {
            transform: scale(1.5);
        }
    }
</style>
