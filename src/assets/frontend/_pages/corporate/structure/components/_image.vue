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
