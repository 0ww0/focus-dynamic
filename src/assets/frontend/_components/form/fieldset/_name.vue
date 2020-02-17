<template lang="pug">
    .name(:class='inlineClass')
        span.text {{ name }}
        span.sup.danger(v-if = 'important') *
</template>

<script>
    export default {
        props : {
            name : String,
            inline : Boolean,
            important : Boolean
        },

        computed : {
            inlineClass : function () {
                return  this.inline ? 'is-inline' : ''
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../../style/config.scss';

    .is-inline {
        margin-top: 4px;
        margin-bottom: 4px;
        margin-right: 20px;
    }

    .name {
        .text {
            @include fs(16)
        }

        .danger {
            @include color($danger)
        }
    }
</style>
