<template lang="pug">
    transition(name = 'loader-fade')
        .loader-component(:class='background', v-show = 'isOpen')
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
                    type : 'spin',
                    loop : 1
                },
                isOpen : false,
                body : {
                    height : null,
                    overflow : null
                }
            }
        },

        methods: {
            open() {
                this.isOpen = true
                this._lockBody()
                this.$emit('open')
            },

            close() {
                this.isOpen = false
                this._unlockBody()
                this.$emit('close')
            },

            _lockBody() {
                this.body.height = document.body.style.height
				this.body.overflow = document.body.style.overflow

				document.body.style.height = '100%'
				document.body.style.overflow = 'hidden'
            },

            _unlockBody() {
				document.body.style.height = this.body.height
				document.body.style.overflow = this.body.overflow
			},
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

    .spin {
        position: relative;
        width: 80px;
        height: 80px;
        border-radius: 100%;

        &:before, &:after {
            content: '';
            position: absolute;
            top: -10px;
            left: -10px;
            width: 100%;
            height: 100%;
            border-radius: 100%;
            border: 6px solid;
            @include border($light, 0.4)
            animation: spin $time $curve infinite;
        }

        &:after {
            border-top: 6px solid $dark;
        }
    }

    @keyframes spin{
        0%{
            transform: rotate(0deg);
        }

        100%{
            transform: rotate(360deg);
        }
    }
</style>
