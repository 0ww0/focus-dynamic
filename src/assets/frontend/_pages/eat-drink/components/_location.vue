<template lang="pug">
    .location-holder
        heading(:text = 'head', subheader)
        mapx(:mapEmbed = "mapUrl")
</template>

<script>
    import heading from '../../../_components/text/_heading.vue'
    import mapx from './../../../_components/map/_map.vue'

    export default {
        components : {
            heading,
            mapx
        },

        data() {
            return {
                head: {
                    title : 'Location',
                    align : 'left'
                },

                mapUrl : 'https://maps.google.com/maps?q=Menara%20Lien%20Hoe&t=&z=13&ie=UTF8&iwloc=&output=embed'
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
