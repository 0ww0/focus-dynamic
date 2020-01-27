<template lang="pug">
    transition(name = 'modal-fade')
        div(:class = 'overlay_classes',  v-show = 'isOpen', v-on:click = 'onOverlayClick')
            div(:class = 'modal_classes')
                button.modal-icon(@click = 'close', v-if="!hideCloseIcon")
                    i.fas.fa-times
                slot
                button.modal-button(@click = 'close', v-if='showCloseButton')
                    span Ok
</template>

<script>
    export default {
        name : 'modal',

        props : {
            overlayTheme : {
                type : String,
                required : false,
                default : 'light'
            },

            modalTheme: {
				type: String,
				required: false,
				default: 'light'
			},

            blocking: {
				type: Boolean,
				required: false,
				default: false
			},

			pulseOnBlock: {
				type: Boolean,
				required: false,
				default: true
			},

            hideCloseIcon: {
				type: Boolean,
				required: false,
				default: false
			},

            showCloseButton: {
                type: Boolean,
				required: false,
				default: false
            },

            enableMobile: {
                type: Boolean,
                required: false,
                default: false
            }
        },

        data() {
            return {
                isOpen : false,
                isBouncing : false,
                visible : false,
                body : {
                    height : null,
                    overflow : null
                }
            }
        },

        computed : {
            overlay_classes() {
                return [
                    'modal-backdrop',
                    'theme-' + this.overlayTheme,
                    {
                        'modal-clickable': !this.blocking,
                        'modal-mobile' : this.enableMobile
                    },
                ]
            },

            modal_classes() {
                return [
                    'modal',
                    'theme-' + this.modalTheme,
                ]
            }
        },

        methods : {
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

            bounce() {
                this.isBouncing = true
                setTimeout(() => this.is_bouncing = false, 330)
            },

            onOverlayClick(event) {
                if (!event.target.classList || event.target.classList.contains('modal-clickable')) {
                    if (this.blocking) {
                        if (this.pulseOnBlock) this.bounce()
                    } else {
                        this.close()
                    }
                }
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

<style lang='scss' scoped>
    @import '../../style/config.scss';

    .modal {
        position: relative;
        background: #FFFFFF;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 480px;
        border-radius: 5px;
        margin: em(15);
        z-index: 1;

        &-mobile {
            &.modal-backdrop {
                align-items: flex-start;

                @include media(sm-up) {
                    align-items: center;
                }
            }
        }

        &-backdrop {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(0, 0, 0, 0.3);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 3;
            overflow: auto;
        }

        &-icon {
            position: absolute;
            background-color: transparent;
            top: 8px;
            right: 8px;
            border: none;
            outline: 0;
            cursor: pointer;
            z-index: 1;
            @include fs(20)
        }

        &-button {
            border: em(1) solid;
            text-align: center;
            padding: em(8) em(50);
            width: calc(100% - 25px);

            outline: none;
            text-transform: uppercase;
            user-select: none;
            white-space: nowrap;
            cursor: pointer;
            margin: em(0) em(15) em(15);


            @include background($primary)
            @include color($black)
            @include border($primary, .3)

            @include fs(14)
            line-height: 1.4;

            border-radius: em(10);

            &:hover {
                @include background($black)
                @include color($white)
                @include trans-prop(background-color, color)
            }
        }

        &-fade-enter,
        &-fade-leave-active {
            opacity: 0;
        }

        &-fade-enter-active,
        &-fade-leave-active {
            transition: opacity .5s ease
        }
    }

    /deep/ .modal-body {
        position: relative;
        padding: 15px;
        user-select: none;
    }
</style>
