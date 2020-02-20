<template lang="pug">
.gallery-holder
    siema(refer = 'gallery', :page = 'page', carousel='gallery', loop, v-if='gallery.list')
        siemaWrapper(v-for = "data in gallery.list", :key = 'data.id')
            .gallery-image
                img(:src='url + data.path')
</template>

<script>
    import siema from '../../../../_components/carousel/_siema.vue'
    import siemaWrapper from '../../../../_components/carousel/_wrapper.vue'

    export default {
        props: {
            gallery: Object,
            url: String
        },

        components: {
            siema,
            siemaWrapper,
        },

        data() {
            return {
                page : {
                    1200 : 1
                },
            }
        },
    }
</script>

<style lang="scss" scoped>
</style>
