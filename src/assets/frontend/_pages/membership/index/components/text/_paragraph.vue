<template lang="pug">
    .paragraph-component
        .content(v-html = 'content')
</template>

<script>
    export default {
        props : {
            content: String
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../../../../style/config.scss';

    .paragraph-component {
        .content {
            @include fs(14)
        }
    }
</style>


<style lang="scss">
    .paragraph-component {
        height: 100%;
        display: flex;
        flex-direction: column;
        flex-flow: column nowrap;
        justify-content: center;
        .content {
            p {
                &:not(:last-child) {
                    margin-bottom: 15px;
                }
            }

            &:not(:last-child) {
                margin-bottom: 15px;
            }
        }
    }
</style>
