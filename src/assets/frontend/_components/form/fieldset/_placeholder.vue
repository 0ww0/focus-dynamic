<template lang="pug">
    .placeholder
        span.name {{ name }}
        span.sup.co-danger(v-if='important') *
</template>

<script>
    export default {
        props : {
            name : {
                type : String,
                required : true,
            },

            important : {
                type : Boolean
            }
        },
    }
</script>

<style lang='scss' scoped>
    @import '../../../style/config.scss';
    
    .placeholder{
        position: absolute;
        padding: 6px 0 5px;
        left: 12px;
        width: calc(100% - 30px);
        white-space: nowrap;
        user-select: none;
        pointer-events: none;
        font-weight: 300;
        overflow: hidden;
        @include fs(15)

        .name{
            color: #959595;
        }

        .danger {
            @include color($danger)
        }
    }
</style>
