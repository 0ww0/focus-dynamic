<template lang="pug">
    .image-holder
        .image
            img(:src = "url + image.image")
</template>

<script>
    export default {
        props : {
            image : Object,
            url : String,
        }
    }
</script>

<style lang='scss' scoped>
    .image-holder {
        padding-top: 25px;
        padding-bottom: 25px;
    }
</style>
