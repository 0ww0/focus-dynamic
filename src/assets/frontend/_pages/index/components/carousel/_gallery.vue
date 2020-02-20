<template lang="pug">
    siema(refer = 'gallery', :page = 'page' carousel='gallery', loop, v-if = 'gallery')
        siemaWrapper(v-for = "data in gallery", :key = 'data.id',)
</template>

<script>
    import siema from '../../../../_components/carousel/_siema.vue'
    import siemaWrapper from '../../../../_components/carousel/_wrapper.vue'

    export default {
        props: {
            gallery: Array,
            url: String
        },
        
        components: {
            siema,
            siemaWrapper
        },

        data() {
            return {
                page : {
                    1200: 1,
                },
            }
        },
    }
</script>

<style lang="scss" scoped>
</style>
