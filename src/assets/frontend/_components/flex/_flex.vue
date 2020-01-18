<template lang="pug">
    .flex(:class='[flexClass, queryClass, directionClass]')
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
                default : 'md',
                validator : function(value) {
                    return ['xs', 'sm', 'md', 'dp'].indexOf(value) !== -1
                }
            },

            stretch : {
                type : Boolean,
            },

            direction : {
                type : String,
            },

            center : {
                type : Boolean
            }
        },

        data() {
            return {
                isStretch : this.stretch,
                isXmedia  : this.xmedia,
                isCenter : this.center,
            }
        },

        computed : {
            flexClass  : function () {
                return {
                    'is-stretch' : this.isStretch,
                    'is-responsive' : this.isXmedia,
                    'is-center' : this.isCenter
                }
            },

            queryClass : function () {
                return this.query ? 'is-' + this.query : ''
            },

            directionClass : function () {
                return this.direction  ? this.direction : ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/config.scss';

    .flex{
        position: relative;
        display: flex;

        align-items: center;
        align-content: space-between;
        justify-content: space-between;

        &.row{
            flex-direction: row;
            flex-flow: row wrap;
        }

        &.column{
            flex-direction: column;
            flex-flow: column wrap;
        }

        &.is-center {
            align-items: center;
            justify-content: center;
        }

        &.is-stretch {
            align-items: stretch;
        }
    }
</style>
