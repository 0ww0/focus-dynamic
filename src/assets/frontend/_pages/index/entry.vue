<template lang="pug">
    .wrapper-content
        mainCarousel
        .container
            cardCarousel
</template>

<script>
    import mainCarousel from './components/carousel/_main.vue'
    import cardCarousel from './components/carousel/_card.vue'

    export default {
        components: {
            mainCarousel,
            cardCarousel
        },
    }
</script>
