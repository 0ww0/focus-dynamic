<template lang="pug">
    form.form(v-if = 'formHeader')
        slot
    .form-group(:class='direction', v-else)
        slot
</template>

<script>
    export default {
        props : {
            formHeader : Boolean,
            direction : String,
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../../style/config.scss';
    
    .form {
        width: 100%;
        display: flex;
        flex-direction: column;
        flex-flow: row wrap;
        align-items: flex-start;

        &-group{
            display: flex;
            flex-direction: row;
            align-items: flex-start;

            margin: 5px 0;
            width: calc((100% / 1));

            &.column {
                flex-direction: column;
            }
        }

        .flexing{
            flex: 1;
        }
    }
</style>
