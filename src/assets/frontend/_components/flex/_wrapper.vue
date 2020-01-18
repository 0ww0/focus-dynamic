<template lang="pug">
    .flex-wrapper(:class='flexClass', :style='flexOrder')
        slot
</template>

<script>
    export default {
        props : {
            flex : {
                type : String,
            },

            order : {
                type : Number
            }
        },

        computed : {
            flexClass : function () {
                return this.flex ? 'is-' + this.flex : ''
            },

            flexOrder : function () {
                return 'order: ' + this.order
            }
        }
    }
</script>

<style lang='scss' scoped>
    @import '../../style/config.scss';

    .flex-wrapper{
        display: block;
        flex-basis: 0;
        flex-shrink: 1;
        flex-grow: 1;
        padding: em(12);
    }

    .is-responsive {
        .is{
            &-12 {
                flex: none;
                width: calc((100% * (1)));
            }

            &-11 {
                flex: none;
                width: calc((100% * (1)));
            }

            &-10 {
                flex: none;
                width: calc((100% * (1)));
            }

            &-9 {
                flex: none;
                width: calc((100% * (1)));
            }

            &-8 {
                flex: none;
                width: calc((100% * (1)));
            }

            &-7 {
                flex: none;
                width: calc((100% * (1)));
            }

            &-6 {
                flex: none;
                width: calc((100% * (1)));
            }

            &-5 {
                flex: none;
                width: calc((100% * (1)));
            }

            &-4 {
                flex: none;
                width: calc((100% * (1)));
            }

            &-3 {
                flex: none;
                width: calc((100% * (1)));
            }

            &-2 {
                flex: none;
                width: calc((100% * (1)));
            }

            &-1 {
                flex: none;
                width: calc((100% * (1)));
            }
        }
    }


    @include media(xs-up) {
        .is-xs.is-responsive {
            .is {
                &-12 {
                    width: calc((100% * (12/12)));
                }

                &-11 {
                    width: calc((100% * (11/12)));
                }

                &-10 {
                    width: calc((100% * (10/12)));
                }

                &-9 {
                    width: calc((100% * (9/12)));
                }

                &-8 {
                    width: calc((100% * (8/12)));
                }

                &-7 {
                    width: calc((100% * (7/12)));
                }

                &-6 {
                    width: calc((100% * (6/12)));
                }

                &-5 {
                    width: calc((100% * (5/12)));
                }

                &-4 {
                    width: calc((100% * (4/12)));
                }

                &-3 {
                    width: calc((100% * (3/12)));
                }

                &-2 {
                    width: calc((100% * (2/12)));
                }

                &-1 {
                    width: calc((100% * (1/12)));
                }
            }
        }
    }

    @include media(sm-up) {
        .is-sm.is-responsive {
            .is {
                &-12 {
                    width: calc((100% * (12/12)));
                }

                &-11 {
                    width: calc((100% * (11/12)));
                }

                &-10 {
                    width: calc((100% * (10/12)));
                }

                &-9 {
                    width: calc((100% * (9/12)));
                }

                &-8 {
                    width: calc((100% * (8/12)));
                }

                &-7 {
                    width: calc((100% * (7/12)));
                }

                &-6 {
                    width: calc((100% * (6/12)));
                }

                &-5 {
                    width: calc((100% * (5/12)));
                }

                &-4 {
                    width: calc((100% * (4/12)));
                }

                &-3 {
                    width: calc((100% * (3/12)));
                }

                &-2 {
                    width: calc((100% * (2/12)));
                }

                &-1 {
                    width: calc((100% * (1/12)));
                }
            }
        }
    }

    @include media(md-up) {
        .is-md.is-responsive {
            .is {
                &-12 {
                    width: calc((100% * (12/12)));
                }

                &-11 {
                    width: calc((100% * (11/12)));
                }

                &-10 {
                    width: calc((100% * (10/12)));
                }

                &-9 {
                    width: calc((100% * (9/12)));
                }

                &-8 {
                    width: calc((100% * (8/12)));
                }

                &-7 {
                    width: calc((100% * (7/12)));
                }

                &-6 {
                    width: calc((100% * (6/12)));
                }

                &-5 {
                    width: calc((100% * (5/12)));
                }

                &-4 {
                    width: calc((100% * (4/12)));
                }

                &-3 {
                    width: calc((100% * (3/12)));
                }

                &-2 {
                    width: calc((100% * (2/12)));
                }

                &-1 {
                    width: calc((100% * (1/12)));
                }
            }
        }
    }

    @include media(dp-up) {
        .is-dp.is-responsive {
            .is {
                &-12 {
                    width: calc((100% * (12/12)));
                }

                &-11 {
                    width: calc((100% * (11/12)));
                }

                &-10 {
                    width: calc((100% * (10/12)));
                }

                &-9 {
                    width: calc((100% * (9/12)));
                }

                &-8 {
                    width: calc((100% * (8/12)));
                }

                &-7 {
                    width: calc((100% * (7/12)));
                }

                &-6 {
                    width: calc((100% * (6/12)));
                }

                &-5 {
                    width: calc((100% * (5/12)));
                }

                &-4 {
                    width: calc((100% * (4/12)));
                }

                &-3 {
                    width: calc((100% * (3/12)));
                }

                &-2 {
                    width: calc((100% * (2/12)));
                }

                &-1 {
                    width: calc((100% * (1/12)));
                }
            }
        }
    }

    @include media(hd-up) {
        .is-hd.is-responsive {
            .is {
                &-12 {
                    width: calc((100% * (12/12)));
                }

                &-11 {
                    width: calc((100% * (11/12)));
                }

                &-10 {
                    width: calc((100% * (10/12)));
                }

                &-9 {
                    width: calc((100% * (9/12)));
                }

                &-8 {
                    width: calc((100% * (8/12)));
                }

                &-7 {
                    width: calc((100% * (7/12)));
                }

                &-6 {
                    width: calc((100% * (6/12)));
                }

                &-5 {
                    width: calc((100% * (5/12)));
                }

                &-4 {
                    width: calc((100% * (4/12)));
                }

                &-3 {
                    width: calc((100% * (3/12)));
                }

                &-2 {
                    width: calc((100% * (2/12)));
                }

                &-1 {
                    width: calc((100% * (1/12)));
                }
            }
        }
    }
</style>
