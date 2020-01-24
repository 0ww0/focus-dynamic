<template lang="pug">
    .location-holder
        heading(:text = 'head', subheader)
</template>

<script>
    import heading from '../../../_components/text/_heading.vue'

    export default {
        components : {
            heading
        },

        data() {
            return {
                head: {
                    title : 'Location',
                    align : 'left'
                },
            }
        }
    }
</script>

<style lang="scss" scoped>
    .location-holder {
        padding-top: 35px;
        padding-bottom: 35px;
    }
</style>
