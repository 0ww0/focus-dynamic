<template lang="pug">
    .gallery-holder
        heading(:text = 'head', subheader)
        siema(refer = 'gallery', carousel='gallery', :page='page', loop)
            siemaWrapper(v-for = 'data in gallery')
                imageCard(:image = 'data')
</template>

<script>
    import heading from '../../../_components/text/_heading.vue'
    import siema from '../../../_components/carousel/_siema.vue'
    import siemaWrapper from '../../../_components/carousel/_wrapper.vue'
    import imageCard from '../../../_components/card/type/_image.vue'

    export default {
        props : {
            gallery : Array
        },

        components : {
            heading,
            siema,
            siemaWrapper,
            imageCard
        },

        data() {
            return {
                head: {
                    title : 'Gallery',
                    align : 'center'
                },

                page : {
                    480: 2,
                
                },
            }
        }
    }
</script>

<style lang="scss" scoped>
    .gallery-holder {
        padding-top: 35px;
        padding-bottom: 35px;
    }
.card{
    position: relative;
    width: 100%;
    height: 400px;
}

/deep/ .card-component {
    width: calc(100% - 20px);
    height: 400px;
    margin-left: 10px;
    margin-right: 10px;
}
</style>
