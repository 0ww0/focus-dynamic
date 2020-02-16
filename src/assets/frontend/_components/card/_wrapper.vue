<template lang="pug">
    .card-wrapper(:class='cardClass', :style='cardOrder')
        slot
</template>

<script>
    export default {
        props : {
            card : String,
            order : Number
        },

        computed : {
            cardClass : function () {
                return this.card ? 'is-' + this.card : ''
            },

            cardOrder : function () {
                return 'order: ' + this.order
            }
        }
    }
</script>

<style lang="scss" scoped >
    @import '../../style/config.scss';

    .card-wrapper{
        display: block;
        flex-basis: 0;
        flex-shrink: 1;
        flex-grow: 1;
        padding: em(12);
    }

    .is {
        &-full {
            flex: none;
            width: calc((100% * (1)));
        }

        &-third-quarter {
            flex: none;
            width: calc((100% * (3/4)));
        }

        &-two-third {
            flex: none;
            width: calc((100% * (2/3)));
        }

        &-half {
            flex: none;
            width: calc((100% * (1/2)));
        }

        &-one-third {
            flex: none;
            width: calc((100% * (1/3)));
        }

        &-one-quarter {
            flex: none;
            width: calc((100% * (1/4)));
        }
    }

    .is-responsive {
        .is {
            &-full {
                flex: none;
                width: calc((100% * (1)));
            }

            &-third-quarter {
                flex: none;
                width: calc((100% * (1)));
            }

            &-two-third {
                flex: none;
                width: calc((100% * (1)));
            }

            &-half {
                flex: none;
                width: calc((100% * (1)));
            }

            &-one-third {
                flex: none;
                width: calc((100% * (1)));

            }

            &-one-quarter {
                flex: none;
                width: calc((100% * (1)));
            }
        }
    }

    @include media(xs-up) {
        .is-xs.is-responsive {
            .is {
                &-full {
                    width: calc((100% * (1)));
                }

                &-third-quarter {
                    width: calc((100% * (3/4)));
                }

                &-two-third {
                    width: calc((100% * (2/3)));
                }

                &-half {
                    width: calc((100% * (1/2)));
                }

                &-one-third {
                    width: calc((100% * (1/3)));
                }

                &-one-quarter {
                    width: calc((100% * (1/4)));
                }
            }
        }
    }

    @include media(sm-up) {
        .is-sm.is-responsive {
            .is {
                &-full {
                    width: calc((100% * (1)));
                }

                &-third-quarter {
                    width: calc((100% * (3/4)));
                }

                &-two-third {
                    width: calc((100% * (2/3)));
                }

                &-half {
                    width: calc((100% * (1/2)));
                }

                &-one-third {
                    width: calc((100% * (1/3)));
                }

                &-one-quarter {
                    width: calc((100% * (1/4)));
                }
            }
        }
    }

    @include media(md-up) {
        .is-md.is-responsive {
            .is {
                &-full {
                    width: calc((100% * (1)));
                }

                &-third-quarter {
                    width: calc((100% * (3/4)));
                }

                &-two-third {
                    width: calc((100% * (2/3)));
                }

                &-half {
                    width: calc((100% * (1/2)));
                }

                &-one-third {
                    width: calc((100% * (1/3)));
                }

                &-one-quarter {
                    width: calc((100% * (1/4)));
                }
            }
        }
    }

    @include media(dp-up) {
        .is-dp.is-responsive {
            .is {
                &-full {
                    width: calc((100% * (1)));
                }

                &-third-quarter {
                    width: calc((100% * (3/4)));
                }

                &-two-third {
                    width: calc((100% * (2/3)));
                }

                &-half {
                    width: calc((100% * (1/2)));
                }

                &-one-third {
                    width: calc((100% * (1/3)));
                }

                &-one-quarter {
                    width: calc((100% * (1/4)));
                }
            }
        }
    }
</style>
