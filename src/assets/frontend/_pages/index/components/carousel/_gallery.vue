<template lang="pug">
.gallery-holder
    agile(:options = 'agile', v-if='gallery.list')
        siemaWrapper(v-for = "data in gallery.list", :key = 'data.id')
            .gallery-image
                img(:src='url + data.path')
        template(slot="prevButton")
            i.fas.fa-chevron-left
        template(slot="nextButton")
            i.fas.fa-chevron-right
</template>

<script>
    import siemaWrapper from '../../../../_components/carousel/_wrapper.vue'

    export default {
        props: {
            gallery: Object,
            url: String
        },

        components: {
            siemaWrapper,
        },

        data() {
            return {
                agile: {
                    autoplaySpeed: 7500,
                    fade: false,
                    speed: 2500,
                    pauseOnHover: true,
                    pauseOnDotsHover: true,
                    autoplay: true,
                    centerMode: true,
                    slidesToShow: 1,
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    .gallery-image{
        width: 100%;
        height: 540px;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
</style>
