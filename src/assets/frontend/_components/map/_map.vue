<template lang="pug">
    .map-component
        iframe(:src = 'mapEmbed', frameborder='0')
</template>

<script>
    export default {
        props : {
            mapEmbed : String,
        }
    }
</script>

<style lang="scss" scoped>
    .map-component{
        width: 100%;
        height: 450px;
        iframe {
            width: 100%;
            height: 100%;
        }
    }
</style>
