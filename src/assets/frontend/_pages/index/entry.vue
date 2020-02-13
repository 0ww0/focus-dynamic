<template lang="pug">
    .wrapper-content
        mainCarousel
        .container
            cardCarousel
            cardCelebrate
            cardHappening
</template>

<script>
    import mainCarousel from './components/carousel/_main.vue'
    import cardCarousel from './components/carousel/_card.vue'
    import cardCelebrate from './components/_celebrate.vue'
    import cardHappening from './components/_happening.vue'

    export default {
        components: {
            mainCarousel,
            cardCarousel,
            cardCelebrate,
            cardHappening,
        },
    }
</script>
