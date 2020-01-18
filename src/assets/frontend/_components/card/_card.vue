<template lang="pug">
    .card(:class = "[cardClass, queryClass, borderClass]")
        slot
</template>

<script>
    export default {
        props : {
            xmedia : {
                type : Boolean,
                default : true,
            },
            query : {
                type : String,
                default : 'sm',
                validator : function(value) {
                    return ['xs', 'sm', 'md', 'dp'].indexOf(value) !== -1
                }
            },
            stretch : Boolean,
            border : {
                type : String,
                validator : function(value) {
                    return [
                        'primary',
                        'grey',
                        'dark',
                        'light',
                        'danger',
                        'info',
                        'success',
                        'warning'
                    ].indexOf(value) !== -1
                }
            }
        },

        data() {
            return {
                isStretch : this.stretch,
                isXmedia  : this.xmedia,
                isBorder : this.border
            }
        },

        computed : {
            cardClass  : function () {
                return {
                    'is-stretch' : this.isStretch,
                    'is-responsive' : this.isXmedia,
                }
            },

            queryClass : function () {
                return  this.query ? 'is-' + this.query : ''
            },

            borderClass : function() {
                return  this.border ? 'is-border-' + this.border : ''
            }
        }
    }
</script>

<style lang="scss" scoped >
    @import '../../style/config.scss';

    .card {
        position: relative;
        display: flex;
        flex-direction: row;
        flex-flow: row wrap;

        align-items: center;
        justify-content: center;

        margin-left: em(-12);
        margin-right: em(-12);

        &.is-stretch {
            align-items: stretch;
        }
    }
</style>
