<template lang="pug">
    .gallery-holder
        heading(:text = 'head', subheader)
        siema(refer = 'gallery', carousel='gallery', :page='page', loop)
            siemaWrapper(v-for = 'data in gallery', :key = 'data.id')
                banner(:banner = 'data')
</template>

<script>
    import heading from '../../../_components/text/_heading.vue'
    import siema from '../../../_components/carousel/_siema.vue'
    import siemaWrapper from '../../../_components/carousel/_wrapper.vue'
    import banner from './../../../_components/carousel/type/_banner.vue'

    export default {
        props : {
            gallery : Array
        },

        components : {
            heading,
            siema,
            siemaWrapper,
            banner
        },

        data() {
            return {
                head: {
                    title : 'Gallery',
                    align : 'center'
                },

                page : {
                    480: 2,
                    640: 3,
                    // 800: 4,
                    // 1024: 5,
                },
            }
        },
    }
</script>

<style lang="scss" scoped>
    .gallery-holder {
        padding-top: 35px;
        padding-bottom: 35px;
    }

    .gallery{
        position: relative;
        width: calc(100%);
        height: 400px;
    }

    /deep/ .banner-component {
        width: calc(100% - 20px);
        height: 400px;
        margin-left: 10px;
        margin-right: 10px;
    }
</style>
